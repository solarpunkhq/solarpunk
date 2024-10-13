import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import { inter, manrope } from '@/fonts';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { Analytics } from '@vercel/analytics/react';

import { Toaster } from '@/components/ui/toaster';

import { getMetadata } from '@/lib/get-metadata';
import { cn } from '@/lib/utils';

import { SEO_DATA } from '@/constants/seo-data';

import '@/styles/globals.css';
import '@/styles/tailwind.css';

export default async function Layout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale} className="h-full text-base antialiased">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
        <script
          src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
          integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
          crossOrigin=""
          defer
        />
      </head>
      <body className={cn('h-full w-full font-sans antialiased', manrope.variable, inter.variable)}>
        <NextIntlClientProvider messages={messages}>
          <TooltipProvider>
            {children}
            <Toaster />
          </TooltipProvider>
        </NextIntlClientProvider>
      </body>
      <Analytics />
    </html>
  );
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#000000',
};

export const metadata = getMetadata(SEO_DATA.index);
