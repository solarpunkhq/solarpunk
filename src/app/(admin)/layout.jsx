import { Inter } from 'next/font/google';
import Link from 'next/link';

import { TooltipProvider } from '@radix-ui/react-tooltip';
import { Analytics } from '@vercel/analytics/react';
import { Home, LineChart, SheetIcon, Users2 } from 'lucide-react';

import { Toaster } from '@/components/ui/toaster';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

import { cn } from '@/lib/utils';

import { SEO_DATA } from '@/constants/seo-data';

import '@/styles/tailwind.css';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }) {
  return (
    <html lang="en" className={'bg-neutral-950 h-full text-base antialiased'}>
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/@geoman-io/leaflet-geoman-free@latest/dist/leaflet-geoman.css"
        />
        <script
          src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
          integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
          crossOrigin=""
          defer
        />
        <script
          src="https://unpkg.com/@geoman-io/leaflet-geoman-free@latest/dist/leaflet-geoman.js"
          defer
        />
      </head>
      <body className={cn('flex min-h-screen flex-col bg-black antialiased', inter.className)}>
        <TooltipProvider>
          <div className="flex min-h-screen w-full flex-col bg-white">
            <aside className="bg-background fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r sm:flex">
              <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                <Link
                  href="/"
                  className="bg-primary text-primary-foreground group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold md:h-8 md:w-8 md:text-base"
                >
                  <Home className="h-4 w-4 transition-all group-hover:scale-110" />
                  <span className="sr-only">Solarpunk</span>
                </Link>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="/admin"
                      className="text-muted-foreground hover:text-foreground flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8"
                    >
                      <SheetIcon className="h-5 w-5" />
                      <span className="sr-only">Dashboard</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">Dashboard</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="/admin/admins"
                      className="text-muted-foreground hover:text-foreground flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8"
                    >
                      <Users2 className="h-5 w-5" />
                      <span className="sr-only">Admins</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">Admins</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="https://vercel.com/solarpunk/website/analytics"
                      className="text-muted-foreground hover:text-foreground flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8"
                    >
                      <LineChart className="h-5 w-5" />
                      <span className="sr-only">Analytics</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">Analytics</TooltipContent>
                </Tooltip>
              </nav>
            </aside>
            {children}
          </div>
          <Toaster />
        </TooltipProvider>
      </body>
      <Analytics />
    </html>
  );
}

export const metadata = getMetadata(SEO_DATA.index);
