import { Metadata } from 'next';

import { getMetadata } from '@/lib/get-metadata';

import { SEO_FARMS_DATA } from '@/constants/seo-data';

export default function FarmsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

type Locale = 'de' | 'en';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const metadata = getMetadata(SEO_FARMS_DATA.index[locale]);
  return {
    ...metadata,
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      images: metadata.openGraph?.images,
    },
  };
}
