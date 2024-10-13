import { headers } from 'next/headers';

import Onboarding from '@/components/pages/onboarding/onboarding';

export default function OnboardingPage() {
  const headersList = headers();
  const country = headersList.get('x-vercel-ip-country') || 'US';

  return <Onboarding country={country} />;
}
