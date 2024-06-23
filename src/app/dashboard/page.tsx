import CurrentStep from '@/components/CurrentStep'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import prisma from '@/lib/prisma'

export default async function DashboardPage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()

  const { user } = data

  console.log(user)

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
  console.log('Current Step: ', current_step)

  return (
    <div className="flex h-full w-full flex-col items-center justify-start">
      <CurrentStep step={current_step.current_step} email={user.email} />
    </div>
  )
}
