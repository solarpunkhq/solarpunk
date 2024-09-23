import { NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import prisma from '@/lib/prisma'
import { getStepNameFromIndex } from '@/lib/utils'

export async function GET(request: Request) {
  const supabase = createClient()

  const { data: supabase_data, error: supabase_error } =
    await supabase.auth.getUser()
  if (supabase_error || !supabase_data?.user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }
  if (supabase_data.user.app_metadata.role !== 'admin') {
    return NextResponse.json({ message: 'Not admin' }, { status: 401 })
  }

  const data = await prisma.user.findMany({})
  const processed_data = data.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      status: getStepNameFromIndex(user.current_step),
      total_revenue: '$' + user.total_revenue.toLocaleString(),
      created_at: user.created_timestamp.toLocaleDateString(),
    }
  })

  return NextResponse.json(processed_data, { status: 200 })
}
