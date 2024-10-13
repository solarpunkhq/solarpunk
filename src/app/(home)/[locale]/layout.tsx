import React from 'react';

import { inter, manrope } from '@/fonts';

import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';

import '@/styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="mt-14 grow">{children}</main>
        <Footer />
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
