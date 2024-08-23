import CurrentStep from '@/components/CurrentStep'
import { createClient } from '@/utils/supabase/server'
import { redirect, useSearchParams } from 'next/navigation'
import prisma from '@/lib/prisma'
import Link from 'next/link'
import Dashboard from '@/components/dashboard/Dashboard'

export default async function DashboardPage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()

  const { user } = data

  if (user === null || user === undefined) {
    redirect('/login')
  }

  const current_step = await prisma.user.findUnique({
    where: {
      email: user.email,
    },
    select: {
      current_step: true,
    },
  })

  return (
    <div className="flex h-full w-full flex-col items-center justify-start">
      {/* <CurrentStep step={current_step.current_step} email={user.email} /> */}
      <Dashboard />
    </div>
  )
}
