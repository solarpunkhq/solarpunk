import { NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'

export async function POST(request: Request) {
  const body = await request.json()
  console.log(body)
  const email = body.email

  const supabase = createClient()

  const { data, error } = await supabase.auth.signInWithOtp({
    email: email,
    options: {
      shouldCreateUser: true,
      emailRedirectTo: 'localhost:3000/dashboard',
    },
  })

  return NextResponse.json(
    { message: 'Submitted Successfully' },
    { status: 200 }
  )
}
