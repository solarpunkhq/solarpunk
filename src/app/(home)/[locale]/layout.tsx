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

export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }) {
  return getMetadata(SEO_DATA.index[locale]);
}
