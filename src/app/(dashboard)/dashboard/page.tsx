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
    <div className="h-full w-full">
      <div className="invisible hidden h-full w-full flex-col items-center justify-start md:visible md:flex">
        <Dashboard email={user.email} />
      </div>
      <div className="flex h-full w-full items-center justify-center md:invisible md:hidden">
        This site is best viewed on a larger screen. Please visit on a desktop
        or laptop.
      </div>
    </div>
  )
}
