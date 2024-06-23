import OnboardingSteps from '@/components/OnboardingSteps'
import { db } from '@/lib/db'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const supabase = createClient()
  const { data, error } = await supabase.auth.getUser()

  if (!data.user) {
    redirect('/login')
  }
  const profile = await db.profile.findUnique({
    where: {
      email: data.user.email,
    },
  })


  return (
    <div className="flex  justify-center p-12">
      <OnboardingSteps currentStep={profile.onboardingStep} email={profile.email} />
    </div>
  )
}
