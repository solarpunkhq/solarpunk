import { NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import { createClient as createAdminClient } from '@supabase/supabase-js'

export async function GET(request: Request) {
  const supabase = createClient()

  const { data: supabase_data, error: supabase_error } =
    await supabase.auth.getUser()
  if (supabase_error || !supabase_data?.user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  const supabaseAdmin = createAdminClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  )

  const { data, error } = await supabaseAdmin.auth.admin.listUsers()
  if (error) {
    return NextResponse.json(
      { message: 'Error fetching users' },
      { status: 500 }
    )
  }
  if ('users' in data && Array.isArray(data.users)) {
    const processed_data = data.users.map((user) => {
      return {
        id: user.id,
        email: user.email,
        created_at: user.created_at,
        is_admin: user.app_metadata.role === 'admin',
      }
    })
    return NextResponse.json(processed_data, { status: 200 })
  } else {
    return NextResponse.json(
      { message: 'Error fetching users' },
      { status: 500 }
    )
  }
}
