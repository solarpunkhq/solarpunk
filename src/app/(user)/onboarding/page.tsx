import { headers } from 'next/headers';

import Onboarding from '@/components/pages/onboarding/onboarding';

import { getMetadata } from '@/lib/get-metadata';

import { SEO_DATA } from '@/constants/seo-data';

export default function OnboardingPage() {
  const headersList = headers();
  const country = headersList.get('x-vercel-ip-country') || 'US';

  return <Onboarding country={country} />;
}

export const metadata = getMetadata(SEO_DATA.index);
