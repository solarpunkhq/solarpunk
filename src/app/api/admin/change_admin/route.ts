import { NextResponse } from 'next/server';

import { createClient } from '@/utils/supabase/server';
import { createClient as createAdminClient } from '@supabase/supabase-js';

export async function POST(request: Request) {
  const body = await request.json();
  const user_id = body.user_id;
  const is_admin = body.is_admin;

  const supabase = createClient();

  const { data: supabase_data, error: supabase_error } = await supabase.auth.getUser();
  if (supabase_error || !supabase_data?.user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  if (supabase_data.user.app_metadata.role !== 'admin') {
    return NextResponse.json({ message: 'Not admin' }, { status: 401 });
  }

  const supabaseAdmin = createAdminClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || '',
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    },
  );

  const { data, error } = await supabaseAdmin.auth.admin.updateUserById(user_id, {
    app_metadata: {
      role: is_admin ? 'admin' : 'user',
    },
  });
  console.log(error);

  if (error) {
    return NextResponse.json({ message: 'Error updating user' }, { status: 500 });
  }

  return NextResponse.json({ message: 'Submitted Successfully' }, { status: 200 });
}
