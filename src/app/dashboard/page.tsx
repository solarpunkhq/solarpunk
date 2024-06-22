import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export default async function DashboardPage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <div>Dashboard page content</div>
    </div>
  )
}
