import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { Resend } from 'resend'
import { iso1A2Code } from '@rapideditor/country-coder'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const body = await request.json()
  console.log(body)

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

  return NextResponse.json({ message: 'Updated Successfully' }, { status: 200 })
}
