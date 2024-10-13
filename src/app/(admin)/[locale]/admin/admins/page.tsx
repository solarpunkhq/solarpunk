import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';

import AdminsList from '@/components/pages/admin/admins-list';
import TanstackProvider from '@/components/shared/tanstack-provider';

export default async function AdminsPage() {
  const supabase = createClient();

  const { data: supabase_data, error: supabase_error } = await supabase.auth.getUser();

  const { user } = supabase_data;

  if (user === null || user === undefined) {
    redirect('/login');
  }

  if (user.app_metadata.role !== 'admin') {
    redirect('/dashboard');
  }

  return (
    <TanstackProvider>
      <AdminsList />
    </TanstackProvider>
  );
}
