'use client'

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function LogoutPage() {
  const supabase = createClient()
  const router = useRouter()

  useEffect(() => {
    supabase.auth.signOut().finally(() => {
      router.push('/onboarding')
    })
  })

  return <div></div>
}
