import React from 'react';

import Header from '@/components/shared/header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
