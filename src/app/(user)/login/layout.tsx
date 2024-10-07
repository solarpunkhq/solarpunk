import React from 'react';

import { inter, manrope } from '@/fonts';

import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';

import '@/styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex min-h-full flex-col justify-center">
        <Header />
        {children}
      </div>
    </>
  );
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#000000',
};
