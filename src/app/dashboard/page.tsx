import CurrentStep from '@/components/CurrentStep'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()

  const { user } = data

  console.log(user)

  if (user === null || user === undefined) {
    redirect('/login')
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <CurrentStep email={user.email ? user.email : null} />
    </div>
  )
}
