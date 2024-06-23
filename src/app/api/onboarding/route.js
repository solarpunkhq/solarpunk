import { createServerClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/adminServer'
import { NextResponse } from 'next/server'

export async function POST(request) {
  const { acresInfo, phoneNumber, financingOption } = await request.json()

  if (!acresInfo || !phoneNumber || !financingOption) {
    return new NextResponse(
      JSON.stringify({ error: 'Missing required parameters' }),
      {
        status: 400,
      }
    )
  }

  const supabase = createServerClient()
  const supabaseAdmin = createAdminClient()

  try {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    const { data: profilesData } = await supabaseAdmin
      .from('profiles')
      .select()
      .eq('user_id', user.id)
      .limit(1)
      .maybeSingle()

    if (profilesData && profilesData.onboarding_step === 0) {
      const { error } = await supabaseAdmin
        .from('profiles')
        .update({
          acres_information: acresInfo,
          phone_number: phoneNumber,
          onboarding_step: 1,
        })
        .eq('user_id', user.id)

      if (error) {
        console.error(error)
        return new NextResponse(JSON.stringify({ error: error.message }), {
          status: 500,
        })
      }

      return new NextResponse(
        JSON.stringify({ message: 'First step completed' }),
        {
          status: 200,
        }
      )
    } else {
      return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
      })
    }
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
    })
  }
}
