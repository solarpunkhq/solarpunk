import { OnboardingComponent } from '@/components/Onboarding'
import { headers } from 'next/headers'

export default function Onboarding() {
  const headersList = headers()
  const country = headersList.get('x-vercel-ip-country')

  return <OnboardingComponent country={country} />
}
