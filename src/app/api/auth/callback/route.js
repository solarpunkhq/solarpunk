import { createServerClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/adminServer'

import { NextResponse } from 'next/server'

export async function GET(request) {
  // The `/auth/callback` route is required for the server-side auth flow implemented
  // by the SSR package. It exchanges an auth code for the user's session.
  // https://supabase.com/docs/guides/auth/server-side/nextjs
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const origin = requestUrl.origin

  if (code) {
    const supabase = createServerClient()
    await supabase.auth.exchangeCodeForSession(code)

    const supabaseAdmin = createAdminClient()

    const {
      data: { user },
    } = await supabase.auth.getUser()

    await supabaseAdmin.from('profiles').upsert({
      email: user.email,
      verified: true,
      user_id: user.id,
    })
  }

  // URL to redirect to after sign up process completes
  return NextResponse.redirect(`${origin}/home`)
}
