import { RootLayout } from '@/components/RootLayout'
import { cn } from '@/lib/utils'
import localFont from 'next/font/local'
import '@/styles/tailwind.css'
import { Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'
import { TooltipProvider } from '@radix-ui/react-tooltip'
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
  title: {
    template: '%s - Solarpunk',
    default: 'Solarpunk - Covering farms with solar panels',
  },
  openGraph: {
    title: 'Solarpunk | Covering farms with solar panels',
    description:
      'We help plan, finance and build solar parks on your existing farmland.',
    url: 'https://solarpunkhq.com',
    siteName: 'Solarpunk',
    images: [
      {
        url: 'https://solarpunkhq.com/og-image.png',
        width: 1910,
        height: 1000,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solarpunk | Covering farms with solar panels',
    description:
      'We help plan, finance and build solar parks on your existing farmland.',
    site: 'varunbln',
    images: ['https://solarpunkhq.com/twitter-image.png'],
  },
}

const calSans = localFont({
  src: [
    {
      path: '../../../public/fonts/CalSans-SemiBold.ttf',
      weight: '400',
    },
  ],
  variable: '--font-cal-sans',
})

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full text-base antialiased">
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
        ></script>
      </head>
      <body
        className={cn(
          'h-full w-full font-sans antialiased',
          calSans.variable,
          inter.variable
        )}
      >
        <TooltipProvider>
          {children}
          <Toaster />
        </TooltipProvider>
      </body>
      <Analytics />
    </html>
  )
}
