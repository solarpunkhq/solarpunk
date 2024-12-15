import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import ReminderTemplate from '@/email_templates/reminder-template';
import { reminderTranslations } from '@/utils/emailTranslations';
import { Resend } from 'resend';

import { prisma } from '@/lib/prisma';

const resend = new Resend(process.env.RESEND_API_KEY);

const sendReminder = async (userId: number, reminder_number: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      email: true,
      country: true,
    },
  });

  if (!user) {
    return;
  }

  //@ts-ignore
  let translations = reminderTranslations[user.country];
  if (!translations) {
    translations = reminderTranslations.default;
  }

  const { data, error } = await resend.emails.send({
    from: process.env.ONBOARDING_SEND_FROM_EMAIL || '',
    to: user.email,
    subject: translations.subject,
    react: ReminderTemplate({ translations, reminder_number }),
  });

  console.log(error, data);
};

// Send first reminder after 1 day
// Send second reminder after 3 days
// Send third reminder after 7 days
// Do not send more reminders
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response('Unauthorized', {
      status: 401,
    });
  }

  const users = await prisma.user.findMany({
    where: {
      current_step: {
        equals: 0,
      },
      reminders_sent: {
        lt: 3,
      },
      created_timestamp: {
        lt: new Date(Date.now() - 1000 * 60 * 60 * 24),
      },
    },
  });

  for (const user of users) {
    let delayInDays;

    switch (user.reminders_sent) {
      case null:
        delayInDays = 1;
        break;
      case 1:
        delayInDays = 3;
        break;
      case 2:
        delayInDays = 7;
        break;
      default:
        delayInDays = 1;
    }

    const delayInMillis = delayInDays * 24 * 60 * 60 * 1000;

    if (user.last_reminder_sent && Date.now() - user.last_reminder_sent.getTime() < delayInMillis) {
      continue;
    }

    await sendReminder(user.id, (user.reminders_sent ?? 0) + 1);

    await prisma.user.update({
      where: { id: user.id },
      data: {
        reminders_sent: (user.reminders_sent ?? 0) + 1,
        last_reminder_sent: new Date(),
      },
    });
  }

  return NextResponse.json({ success: true });
}
