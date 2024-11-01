// app/blog/[slug]/page.tsx
import { unstable_setRequestLocale } from 'next-intl/server';

import SubmissionComponent from '@/components/pages/share/submission';
import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';

import { getMetadata } from '@/lib/get-metadata';

import { SHARE_METADATA } from '@/constants/seo-data';

export default async function Submission({
  params: { submission_id, locale },
}: {
  params: { submission_id: string; locale: string };
}) {
  unstable_setRequestLocale(locale);
  console.log('locale', locale);

  return (
    <div className="h-screen">
      <Header />
      <main className="mx-8 mt-20 min-h-screen">
        <SubmissionComponent submission_id={submission_id} locale={locale} />
      </main>
      <Footer />
    </div>
  );
}

type Locale = 'de' | 'en';

export async function generateMetadata({
  params: { locale, submission_id },
}: {
  params: { locale: Locale; submission_id: string };
}) {
  return getMetadata(SHARE_METADATA.index[locale]);
}
