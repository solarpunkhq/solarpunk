import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import React from 'react';

import { inter, manrope } from '@/fonts';

import Button from '@/components/shared/button';
import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';

import { getMetadata } from '@/lib/get-metadata';

import { SEO_DATA } from '@/constants/seo-data';

import '@/styles/globals.css';

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body className="flex min-h-full flex-col">
        <NextIntlClientProvider messages={messages}>
          <Header />

          <main className="mt-14 grow">
            <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-[#ff6154] px-6 py-2.5 text-white sm:px-3.5 sm:before:flex-1">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <p className="text-gray-900 text-sm/6">
                  <strong className="font-semibold">Live on Product Hunt</strong>
                  <svg
                    viewBox="0 0 2 2"
                    aria-hidden="true"
                    className="mx-2 inline h-0.5 w-0.5 fill-current"
                  >
                    <circle r={1} cx={1} cy={1} />
                  </svg>
                  Support us on our first launch today!
                </p>
                <Button
                  size="home-xs"
                  theme="black"
                  href="https://www.producthunt.com/posts/solarpunk"
                  target="_blank"
                  className="hover:bg-white "
                >
                  Upvote Now <span aria-hidden="true">&rarr;</span>
                </Button>
              </div>
              <div className="flex flex-1 justify-end"></div>
            </div>
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#000000',
};

type Locale = 'de' | 'en';

export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }) {
  return getMetadata(SEO_DATA.index[locale]);
}
