import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(request: Request) {
  const body = await request.json()
  console.log(body)
  const email = body.email
  const about_farm = body.about_farm
  const phone_number = body.phone_number
  const finance_option = body.finance_option

  await prisma.user.update({
    data: {
      about_farm: about_farm,
      current_step: 1,
      phone_number: phone_number,
      finance_option: finance_option,
    },
    where: {
      email: email,
    },
  })

  return NextResponse.json(
    { message: 'Submitted Successfully' },
    { status: 200 }
  )
}
