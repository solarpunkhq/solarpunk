import { NextResponse } from 'next/server';

import { SubmittedTemplate } from '@/email_templates/submitted-template';
import { createClient } from '@/utils/supabase/server';
import { Resend } from 'resend';

import { prisma } from '@/lib/prisma';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const about_farm = body.about_farm;
  const about_self = body.about_self;
  const finance_option = body.finance_option;
  const deployment_type = body.deployment_type;
  const availability_option = body.availability_option;

  const supabase = createClient();

  const { data: supabase_data, error: supabase_error } = await supabase.auth.getUser();
  if (supabase_error || !supabase_data?.user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  //@ts-ignore
  const { email } = await prisma.user.findFirst({
    select: {
      email: true,
    },
    where: {
      id: body.user_id,
    },
  });

  if (supabase_data.user.email !== email) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  await prisma.user.update({
    data: {
      about_farm: about_farm,
      current_step: 1,
      finance_option: finance_option,
      deployment_type: deployment_type,
      availability_option: availability_option,
      total_revenue: body.total_revenue,
      step_1_timestamp: new Date(),
      about_self: about_self,
    },
    where: {
      email: email,
    },
  });

  await prisma.acre.deleteMany({
    where: {
      userId: body.user_id,
    },
  });

  await prisma.user.update({
    data: {
      acres: {
        create: body.acres,
      },
    },
    where: {
      email: email,
    },
  });

  const { data: data_two, error: error_two } = await resend.emails.send({
    from: process.env.ONBOARDING_SEND_FROM_EMAIL || '',
    to: process.env.ONBOARDING_ALERT_EMAIL || '',
    subject: 'User Acres Updated',
    react: SubmittedTemplate({ name: body.name }),
  });

  return NextResponse.json({ message: 'Submitted Successfully' }, { status: 200 });
}
