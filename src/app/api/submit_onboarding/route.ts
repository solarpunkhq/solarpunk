import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { Resend } from 'resend'
import { ThankYouTemplate } from '@/email_templates/ThankYouTemplate'
import { SubmittedTemplate } from '@/email_templates/SubmittedTemplate'
import { iso1A2Code } from '@rapideditor/country-coder'
import { promises as fs } from 'fs'
import { onboardingTranslations } from '@/utils/onboardingTranslations'
import { addScreenshot } from '@/utils/supabase/storage'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const body = await request.formData()

  const acresString = body.get('acres') as string
  const acres = JSON.parse(acresString)
  const screenshot = body.get('screenshot') as File
  const email = body.get('email') as string
  const name = body.get('name') as string

  const response = await addScreenshot(screenshot, email)
  const screenshot_url = response.publicUrl

  const coords = acres[0].latlngs[0]
  const country = iso1A2Code([coords[0].lng, coords[0].lat])

  await prisma.user.create({
    data: {
      email: email,
      name: name,
      acres: {
        create: acres,
      },
      current_step: 0,
      country: country,
      screenshot_url: screenshot_url,
    },
  })

  let translations = onboardingTranslations[country]
  if (!translations) {
    translations = onboardingTranslations.default
  }

  const { data, error } = await resend.emails.send({
    from: process.env.ONBOARDING_SEND_FROM_EMAIL,
    to: email,
    subject: 'Welcome to SolarpunkHQ',
    react: ThankYouTemplate({
      translations: translations,
      screenshot_url: screenshot_url,
    }),
  })

  const { data: data_two, error: error_two } = await resend.emails.send({
    from: process.env.ONBOARDING_SEND_FROM_EMAIL,
    to: process.env.ONBOARDING_ALERT_EMAIL,
    subject: 'New Acres Submitted',
    react: SubmittedTemplate({ name: name, screenshot_url: screenshot_url }),
  })

  return NextResponse.json(
    { message: 'Submitted Successfully' },
    { status: 200 }
  )
}
