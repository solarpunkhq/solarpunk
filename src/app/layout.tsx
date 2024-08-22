import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';

import '@/styles/globals.css';

import { inter } from './fonts';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  // FIXME: Add theme color
  themeColor: '#000000',
};
