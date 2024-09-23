import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { Resend } from 'resend'
import { iso1A2Code } from '@rapideditor/country-coder'
import { createClient } from '@/utils/supabase/server'
import { SubmittedTemplate } from '@/email_templates/SubmittedTemplate'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const body = await request.json()

  const supabase = createClient()

  const { data: supabase_data, error: supabase_error } =
    await supabase.auth.getUser()
  if (supabase_error || !supabase_data?.user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  const userEmail = await prisma.user.findFirst({
    select: {
      email: true,
    },
    where: {
      id: body.user_id,
    },
  })

  if (supabase_data.user.email !== userEmail.email) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  await prisma.acre.deleteMany({
    where: {
      userId: body.user_id,
    },
  })

  await prisma.user.update({
    data: {
      acres: {
        create: body.acres,
      },
      current_step: 0,
    },
    where: {
      email: body.email,
    },
  })

  const { data: data_two, error: error_two } = await resend.emails.send({
    from: process.env.ONBOARDING_SEND_FROM_EMAIL,
    to: process.env.ONBOARDING_ALERT_EMAIL,
    subject: 'User Acres Updated',
    react: SubmittedTemplate({ name: body.name }),
  })

  return NextResponse.json({ message: 'Updated Successfully' }, { status: 200 })
}
