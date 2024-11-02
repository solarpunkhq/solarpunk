'use client';

import { useEffect } from 'react';

import { useRouter } from '@/i18n/routing';
import { createClient } from '@/utils/supabase/client';

export default function LogoutPage() {
  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    supabase.auth.signOut().finally(() => {
      router.push('/onboarding');
    });
  });

  return <div />;
}
