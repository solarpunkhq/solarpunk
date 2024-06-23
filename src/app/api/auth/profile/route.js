import { createAdminClient } from '@/lib/supabase/adminServer'
import { createServerClient } from '@/lib/supabase/server'

import { NextResponse } from 'next/server'

export async function GET(request) {
  const supabase = createServerClient()
  const supabaseAdmin = createAdminClient()

  try {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
      })
    }

    const { data: profilesData } = await supabaseAdmin
      .from('profiles')
      .select()
      .eq('user_id', user.id)
      .limit(1)
      .maybeSingle()

    if (!profilesData) {
      return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
      })
    }

    return new NextResponse(JSON.stringify({ data: profilesData }), {
      status: 200,
    })
  } catch (err) {
    return new NextResponse(JSON.stringify({ error: err.message }), {
      status: 500,
    })
  }
}
