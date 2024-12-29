import { NextResponse } from 'next/server';

import ReminderTemplate from '@/email_templates/reminder-template';
import { reminderTranslations } from '@/utils/emailTranslations';
import { createClient } from '@/utils/supabase/server';
import { Resend } from 'resend';

import { prisma } from '@/lib/prisma';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const user_id = body.user_id;
  const email_template = body.email_template;

  const supabase = createClient();

  const { data: supabase_data, error: supabase_error } = await supabase.auth.getUser();
  if (supabase_error || !supabase_data?.user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  if (supabase_data.user.app_metadata.role !== 'admin') {
    return NextResponse.json({ message: 'Not admin' }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: {
      id: user_id,
    },
    select: {
      email: true,
      locale: true,
    },
  });

  if (!user) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }

  const { data, error } = await resend.emails.send({
    from: process.env.ONBOARDING_SEND_FROM_EMAIL || '',
    to: user.email,
    subject: getTranslations(email_template, user.locale).subject,
    react: getTemplate(email_template, user.locale),
  });

  if (error) {
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }

  return NextResponse.json({ message: 'Email send successfully' }, { status: 200 });
}

const getTranslations = (email_template: any, locale: string) => {
  switch (email_template) {
    case 'details_reminder':
      //@ts-ignore
      let translations = reminderTranslations[locale];
      if (!translations) {
        translations = reminderTranslations.en;
      }
      return translations;
  }
};

const getTemplate = (email_template: string, locale: string) => {
  switch (email_template) {
    case 'details_reminder':
      return ReminderTemplate({
        translations: getTranslations(email_template, locale),
      });
  }
};
