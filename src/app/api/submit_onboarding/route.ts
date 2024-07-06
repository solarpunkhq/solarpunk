import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { Resend } from 'resend'
import { ThankYouTemplate } from '@/email_templates/ThankYouTemplate'
import { SubmittedTemplate } from '@/email_templates/SubmittedTemplate'
import { iso1A2Code } from '@rapideditor/country-coder'
import { promises as fs } from 'fs'
import { onboardingTranslations } from '@/utils/onboardingTranslations'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const body = await request.json()
  console.log(body)

  const coords = body.acres[0].latlngs[0]
  const country = iso1A2Code([coords[0].lng, coords[0].lat])

  await prisma.user.create({
    data: {
      email: body.email,
      name: body.name,
      acres: {
        create: body.acres,
      },
      current_step: 0,
      country: country,
    },
  })

  let translations = onboardingTranslations[country]
  if (!translations) {
    translations = onboardingTranslations.default
  }

  const { data, error } = await resend.emails.send({
    from: process.env.ONBOARDING_SEND_FROM_EMAIL,
    to: body.email,
    subject: 'Welcome to SolarpunkHQ',
    react: ThankYouTemplate({ translations: translations }),
  })

  const { data: data_two, error: error_two } = await resend.emails.send({
    from: process.env.ONBOARDING_SEND_FROM_EMAIL,
    to: process.env.ONBOARDING_ALERT_EMAIL,
    subject: 'New Acres Submitted',
    react: SubmittedTemplate({ name: body.name }),
  })

  return NextResponse.json(
    { message: 'Submitted Successfully' },
    { status: 200 }
  )
}
