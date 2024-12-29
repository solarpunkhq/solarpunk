import { NextResponse } from 'next/server';

import { SubmittedTemplate } from '@/email_templates/submitted-template';
import { ThankYouTemplate } from '@/email_templates/thank-you-template';
import { authTranslations } from '@/utils/emailTranslations';
import { onboardingTranslations } from '@/utils/emailTranslations';
import { getProjectionsFromAcres, getTotalAreaFromAcreData } from '@/utils/projections';
import { iso1A2Code } from '@rapideditor/country-coder';
import { createClient } from '@supabase/supabase-js';
import fetch from 'node-fetch';
import { Resend } from 'resend';

import { prisma } from '@/lib/prisma';
import { formatNumberAsAmount } from '@/lib/utils';

const resend = new Resend(process.env.RESEND_API_KEY);

interface SlackMessageBody {
  id: string;
  email: string;
  name: string;
  country: string;
  total_projected_revenue: string;
  total_area: string;
}

async function sendSlackMessage(body: SlackMessageBody): Promise<void> {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;

  if (!webhookUrl) {
    throw new Error('SLACK_WEBHOOK_URL is not defined in environment variables');
  }

  const message = {
    text: `:sunny: *New Lead Received* :sunny:\n
    *Email*: ${body.email}
    *Name*: ${body.name}
    *Country*: ${body.country}
    *Total Area*: ${body.total_area} acres
    *Total Projected Revenue*: $${body.total_projected_revenue}
    *English Share Link*: https://solarpunkhq.com/en/share/${body.id}
    *German Share Link*: https://solarpunkhq.com/de/share/${body.id}
    `,
  };

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });

    if (!response.ok) {
      throw new Error(`Slack API responded with status ${response.status}`);
    }

    console.log('Message sent successfully');
  } catch (error) {
    console.error('Error sending message to Slack:', error);
  }
}

export async function POST(request: Request) {
  const body = await request.json();

  const coords = body.acres[0].latlngs[0];
  const country = iso1A2Code([coords[0].lng, coords[0].lat]) || 'US';

  const totalArea = getTotalAreaFromAcreData(body.acres);
  const projections = getProjectionsFromAcres(totalArea, 25, 5);
  const total_revenue = projections.revenue_per_year;

  let locale = body.locale;
  if (locale === '') {locale = 'en';}

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (user) {
    return NextResponse.json({ message: 'User already exists' }, { status: 500 });
  }

  const userData = await prisma.user.create({
    data: {
      email: body.email,
      name: body.name,
      acres: {
        create: body.acres,
      },
      current_step: 0,
      country: country,
      total_revenue: total_revenue,
      locale: locale,
    },
  });

  //@ts-ignore
  let translations = onboardingTranslations[locale];
  if (!translations) {
    translations = onboardingTranslations.en;
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
  let authTranslationsForUser = authTranslations[locale];
  if (!authTranslationsForUser) {
    authTranslationsForUser = authTranslations.en;
  }
  authTranslationsForUser.Locale = locale;
  await supabase.auth.admin.createUser({
    email: body.email,
    email_confirm: true,
    user_metadata: authTranslationsForUser,
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
    `/en/auth/confirm?token_hash=${link_data.properties.hashed_token}&type=magiclink`;

  await resend.emails.send({
    from: process.env.ONBOARDING_SEND_FROM_EMAIL || '',
    to: body.email,
    subject: translations.subject,
    react: ThankYouTemplate({
      translations: translations,
      magic_link: magic_link,
    }),
  });

  await resend.emails.send({
    from: process.env.ONBOARDING_SEND_FROM_EMAIL || '',
    to: process.env.ONBOARDING_ALERT_EMAIL || '',
    subject: 'New Acres Submitted',
    react: SubmittedTemplate({ name: body.name }),
  });

  await sendSlackMessage({
    email: body.email,
    name: body.name,
    country: country,
    total_projected_revenue: formatNumberAsAmount(total_revenue.toFixed(0)),
    total_area: totalArea.toFixed(2),
    id: userData.id.toString(),
  });

  return NextResponse.json(
    { message: 'Submitted Successfully', magic_link: magic_link },
    { status: 200 },
  );
}
