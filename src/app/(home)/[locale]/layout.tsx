import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import React from 'react';

import { inter, manrope } from '@/fonts';

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
          <main className="mt-14 grow">{children}</main>
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

function getLocaleFromDomain(): string {
  const host = typeof window !== 'undefined' ? window.location.host : 'solarpunkhq.com';

  if (host.endsWith('.sh')) {
    return 'de';
  }
  return 'en';
}

export async function generateMetadata() {
  const locale = getLocaleFromDomain() as Locale;
  return getMetadata(SEO_DATA.index[locale]);
}
