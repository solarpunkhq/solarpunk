import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';

import Login from '@/components/pages/login';

export default async function LoginForm() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  const { user } = data;

  if (user !== null && user !== undefined) {
    redirect('/dashboard');
  }

  return <Login />;
}
