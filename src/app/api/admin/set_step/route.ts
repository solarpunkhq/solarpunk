import { NextResponse } from 'next/server';

import StepChangeTemplate from '@/email_templates/step-change-template';
import { stepChangeTranslations } from '@/utils/emailTranslations';
import { createClient } from '@/utils/supabase/server';
import { Resend } from 'resend';

import { prisma } from '@/lib/prisma';
import { getStepNameFromIndex } from '@/lib/utils';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const user_id = body.user_id;
  const step = body.step;

  const supabase = createClient();

  const { data: supabase_data, error: supabase_error } = await supabase.auth.getUser();
  if (supabase_error || !supabase_data?.user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  if (supabase_data.user.app_metadata.role !== 'admin') {
    return NextResponse.json({ message: 'Not admin' }, { status: 401 });
  }

  let stepField = `step_${step - 1}_timestamp`;
  if (step === -1) {
    stepField = 'rejected_timestamp';
  }

  const user = await prisma.user.update({
    where: {
      id: user_id,
    },
    data: {
      current_step: step,
      [stepField]: new Date(),
    },
    select: {
      email: true,
      country: true,
    },
  });

  if (!user) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }

  //@ts-ignore
  let translations = stepChangeTranslations[user.country];
  if (!translations) {
    //@ts-ignore
    translations = stepChangeTranslations.default[getStepNameFromIndex(step)];
  }

  const { data, error } = await resend.emails.send({
    from: process.env.ONBOARDING_SEND_FROM_EMAIL || '',
    to: user.email,
    subject: translations.subject,
    react: StepChangeTemplate({
      translations: translations,
    }),
  });

  if (error) {
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }

  return NextResponse.json({ message: 'Email send successfully' }, { status: 200 });
}
