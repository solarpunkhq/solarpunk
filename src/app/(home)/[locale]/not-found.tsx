import { Route } from 'next';

import Link from '@/components/shared/link';

import { getMetadata } from '@/lib/get-metadata';

import { SEO_DATA } from '@/constants/seo-data';

import '@/styles/globals.css';

export default function NotFound() {
  return (
    <section className="not-found py-36 home-sm:py-24">
      <div className="container">
        <h1 className="fs-40 font-medium">Oops! Page not found.</h1>
        <p className="mt-4 max-w-lg text-18 leading-normal tracking-tight text-[#000]/60 home-md:mt-4 home-sm:mt-3.5 home-sm:max-w-md home-sm:text-16 home-sm:leading-snug">
          We can&apos;t seem to find the page you&apos;re looking for. It might have been moved or
          no longer exists. Visit our{' '}
          <Link href={'/' as Route} className="font-medium text-[#0073E5] hover:text-[#4DA6FF]">
            homepage
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

export const metadata = getMetadata(SEO_DATA.notFound);
