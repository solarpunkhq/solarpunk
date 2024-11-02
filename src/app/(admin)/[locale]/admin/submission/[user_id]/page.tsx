import { redirect } from '@/i18n/routing';
import { createClient } from '@/utils/supabase/server';

import SubmissionWrapper from '@/components/pages/admin/submission-wrapper';
import TanstackProvider from '@/components/shared/tanstack-provider';

export default async function SubmissionPage({ params }: { params: { user_id: string } }) {
  const supabase = createClient();

  const { data: supabase_data, error: supabase_error } = await supabase.auth.getUser();

  const { user } = supabase_data;

  if (!user) {
    redirect('/login');
  }

  if (user?.app_metadata?.role !== 'admin') {
    redirect('/dashboard');
  }

  const { user_id } = params;

  return (
    <TanstackProvider>
      <SubmissionWrapper user_id={user_id} />
    </TanstackProvider>
  );
}
