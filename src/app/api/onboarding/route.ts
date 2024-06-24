import { db } from '@/lib/db'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { NewSubmissionEmailTemplate } from '@/components/email-templates/NewSubmission'
import { OnboardingEmailTemplate } from '@/components/email-templates/Onboarding'
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, acres } = body

    if (!email || !name || !acres) {
      throw new Error('Email, name and acres are required')
    }

    const profile = await db.profile.create({
      data: {
        name,
        email,
        acres: {
          create: acres
        },
        onboardingStep: 0,
      },
      select:{
        name:true,
        email:true,
        acres:true
      }
    })

    const { data, error } = await resend.emails.send({
      from: 'onboarding@asingh.tech',
      to: profile.email,
      subject: 'Welcome to SolarPunkHQ',
      react: OnboardingEmailTemplate({name:profile.name}),
    })
    console.log('Data:', data)
    console.log('Error:', error)
    
    const area = profile.acres.reduce((acc, curr) => acc + curr.area, 0).toFixed(2)

    const { data: data_submission, error: error_submission } = await resend.emails.send({
      from: 'onboarding@asingh.tech',
      to: process.env.ONBOARDING_ALERT_EMAIL,
      subject: 'New Acres Submitted',
      react: NewSubmissionEmailTemplate({ name: profile.name, area }),
    })
    console.log('Data2:', data_submission)
    console.log('Error2:', error_submission)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error creating profile:', error)
    
    //check if error is prisma  unique constraint error
    if (error.code === 'P2002') {
      return NextResponse.json({ success: false, error: 'Email already exists' })
    }
    return NextResponse.json({ success: false })
  }
}
