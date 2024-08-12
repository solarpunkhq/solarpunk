import { NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import { createClient as createAdminClient } from '@supabase/supabase-js'
import prisma from '@/lib/prisma'
import ReminderTemplate from '@/email_templates/ReminderTemplate'
import { reminderTranslations } from '@/utils/translations/emailTranslations'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const body = await request.json()
  const user_id = body.user_id
  const email_template = body.email_template

  const supabase = createClient()

  const { data: supabase_data, error: supabase_error } =
    await supabase.auth.getUser()
  if (supabase_error || !supabase_data?.user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  if (supabase_data.user.app_metadata.role !== 'admin') {
    return NextResponse.json({ message: 'Not admin' }, { status: 401 })
  }

  const user = await prisma.user.findUnique({
    where: {
      id: user_id,
    },
    select: {
      email: true,
      country: true,
    },
  })

  if (!user) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 })
  }

  const { data, error } = await resend.emails.send({
    from: process.env.ONBOARDING_SEND_FROM_EMAIL,
    to: user.email,
    subject: getTranslations(email_template, user.country).subject,
    react: getTemplate(email_template, user.country),
  })

  if (error) {
    return NextResponse.json(
      { message: 'Error sending email' },
      { status: 500 }
    )
  }

  return NextResponse.json(
    { message: 'Email send successfully' },
    { status: 200 }
  )
}

const getTranslations = (email_template, country: string) => {
  switch (email_template) {
    case 'details_reminder':
      let translations = reminderTranslations[country]
      if (!translations) {
        translations = reminderTranslations.default
      }
      return translations
  }
}

const getTemplate = (email_template: string, country: string) => {
  switch (email_template) {
    case 'details_reminder':
      return ReminderTemplate({
        translations: getTranslations(email_template, country),
      })
  }
}
