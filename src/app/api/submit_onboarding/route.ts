import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { Resend } from 'resend'
import { ThankYouTemplate } from '@/email_templates/ThankYouTemplate'
import { SubmittedTemplate } from '@/email_templates/SubmittedTemplate'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const body = await request.json()
  console.log(body)

  await prisma.user.create({
    data: {
      email: body.email,
      name: body.name,
      acres: {
        create: body.acres,
      },
      current_step: 1,
    },
  })

  const { data, error } = await resend.emails.send({
    from: 'varun@varunbalani.com',
    to: body.email,
    subject: 'Welcome to SolarPunkHQ',
    react: ThankYouTemplate({}),
  })

  const { data: data_two, error: error_two } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: process.env.ONBOARDING_ALERT_EMAIL,
    subject: 'New Acres Submitted',
    react: SubmittedTemplate({ name: body.name }),
  })

  console.log(data, error, data_two, error_two)

  return NextResponse.json(
    { message: 'Submitted Successfully' },
    { status: 200 }
  )
}
