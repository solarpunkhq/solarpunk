import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

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
      }
    })

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
