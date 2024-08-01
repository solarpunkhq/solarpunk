import { NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import prisma from '@/lib/prisma'

const currentStepToStatus = (current_step: number) => {
  switch (current_step) {
    case 0:
      return 'Details'
    case 1:
      return 'In Review'
    case 2:
      return 'Planning'
    case 3:
      return 'Deployment'
    default:
      return 'Unknown'
  }
}

export async function GET(request: Request) {
  const supabase = createClient()

  const { data: supabase_data, error: supabase_error } =
    await supabase.auth.getUser()
  if (supabase_error || !supabase_data?.user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  const data = await prisma.user.findMany({})
  const processed_data = data.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      status: currentStepToStatus(user.current_step),
      total_revenue: '$' + user.total_revenue.toLocaleString(),
      created_at: user.created_timestamp.toLocaleDateString(),
    }
  })

  return NextResponse.json(processed_data, { status: 200 })
}
