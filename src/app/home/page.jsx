'use client'

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function HomePage() {
  const router = useRouter()
  const supabase = createClient()
  const [userEmail, setUserEmail] = useState('')

  useEffect(() => {
    supabase.auth
      .getSession()
      .then((data) => {
        const email = data.data.session.user.email
        setUserEmail(email)
      })
      .catch((err) => router.push('/onboarding'))
  }, [])

  return (
    <div className="mb-[200px] mt-12 ">
      <p>user {userEmail}</p>
    </div>
  )
}
