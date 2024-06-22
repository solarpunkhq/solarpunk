'use client'

import { createClient } from '@/utils/supabase/client'
import CurrentStep from '@/components/CurrentStep'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()

  const { user } = data
  console.log(data, user, error)
  if (user === undefined || user === null) {
    redirect('/login')
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <CurrentStep email={user.email ? user.email : null} />
    </div>
  )
}
