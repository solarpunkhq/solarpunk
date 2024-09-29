import { NextResponse } from 'next/server';

import { SubmittedTemplate } from '@/email_templates/submitted-template';
import { ThankYouTemplate } from '@/email_templates/thank-you-template';
import { authEmailTranslations } from '@/utils/translations/authEmailTranslations';
import { onboardingTranslations } from '@/utils/translations/emailTranslations';
import { iso1A2Code } from '@rapideditor/country-coder';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

import { prisma } from '@/lib/prisma';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  console.log(body);

  const coords = body.acres[0].latlngs[0];
  const country = iso1A2Code([coords[0].lng, coords[0].lat]) || 'US';

  let total_revenue = 0;
  for (const acre of body.acres) {
    let revenue = acre.revenue;
    total_revenue += revenue;
  }

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (user) {
    return NextResponse.json({ message: 'User already exists' }, { status: 500 });
  }

  await prisma.user.create({
    data: {
      email: body.email,
      name: body.name,
      acres: {
        create: body.acres,
      },
      current_step: 0,
      country: country,
      total_revenue: total_revenue,
    },
  });

  //@ts-ignore
  let translations = onboardingTranslations[country];
  if (!translations) {
    translations = onboardingTranslations.default;
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || '',
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    },
  );

  //@ts-ignore
  let authTranslations = authEmailTranslations[country];
  if (!authTranslations) {
    authTranslations = authEmailTranslations.default;
  }
  const { data: create_data, error: create_error } = await supabase.auth.admin.createUser({
    email: body.email,
    email_confirm: true,
    user_metadata: authTranslations,
  });

  const { data: link_data, error: link_error } = await supabase.auth.admin.generateLink({
    type: 'magiclink',
    email: body.email,
  });

  if (link_data.properties === undefined || link_data.properties === null) {
    return NextResponse.json({ message: 'Failed to create user' }, { status: 500 });
  }

  const magic_link =
    process.env.NEXT_PUBLIC_DEFAULT_SITE_URL +
    `/auth/confirm?token_hash=${link_data.properties.hashed_token}&type=magiclink`;

  const { data, error } = await resend.emails.send({
    from: process.env.ONBOARDING_SEND_FROM_EMAIL || '',
    to: body.email,
    subject: translations.subject,
    react: ThankYouTemplate({
      translations: translations,
      magic_link: magic_link,
    }),
  });

  const { data: data_two, error: error_two } = await resend.emails.send({
    from: process.env.ONBOARDING_SEND_FROM_EMAIL || '',
    to: process.env.ONBOARDING_ALERT_EMAIL || '',
    subject: 'New Acres Submitted',
    react: SubmittedTemplate({ name: body.name }),
  });

  return NextResponse.json(
    { message: 'Submitted Successfully', magic_link: magic_link },
    { status: 200 },
  );
}
