'use client';

import { useRouter } from 'next/navigation';

import { useEffect } from 'react';

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
