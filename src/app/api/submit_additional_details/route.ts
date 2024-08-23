import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { createClient } from '@/utils/supabase/server'

export async function POST(request: Request) {
  const body = await request.json()
  const email = body.email
  const about_farm = body.about_farm
  const phone_number = body.phone_number
  const finance_option = body.finance_option
  const deployment_type = body.deployment_type

  const supabase = createClient()

  const { data: supabase_data, error: supabase_error } =
    await supabase.auth.getUser()
  if (supabase_error || !supabase_data?.user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  if (supabase_data.user.email !== email) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  await prisma.user.update({
    data: {
      about_farm: about_farm,
      current_step: 1,
      phone_number: phone_number,
      finance_option: finance_option,
      deployment_type: deployment_type,
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
