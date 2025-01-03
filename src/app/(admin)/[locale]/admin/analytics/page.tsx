import { redirect } from '@/i18n/routing';
import { createClient } from '@/utils/supabase/server';

import Analytics from '@/components/pages/admin/analytics';
import TanstackProvider from '@/components/shared/tanstack-provider';

export default async function AnalyticsPage() {
  const supabase = createClient();

  const { data: supabase_data, error: supabase_error } = await supabase.auth.getUser();

  const { user } = supabase_data;

  if (!user) {
    redirect('/login');
  }

  if (user?.app_metadata?.role !== 'admin') {
    redirect('/dashboard');
  }

  return (
    <TanstackProvider>
      <Analytics />
    </TanstackProvider>
  );
}
