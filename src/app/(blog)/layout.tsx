import { Inter } from 'next/font/google';

import cn from 'classnames';

import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';

import { getMetadata } from '@/lib/get-metadata';

import { SEO_DATA } from '@/constants/seo-data';

import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = getMetadata(SEO_DATA.index);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body className={cn(inter.className, 'dark:bg-slate-900 dark:text-slate-400')}>
        <Header />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
