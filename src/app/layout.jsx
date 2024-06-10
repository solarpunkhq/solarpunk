import { RootLayout } from '@/components/RootLayout'
import { Inter as FontSans } from 'next/font/google'
import { cn } from '@/lib/utils'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Solarpunk',
    default: 'Solarpunk - Covering farms with solar panels',
  },
}

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
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
        ></script>
        <script
          src="https://unpkg.com/@geoman-io/leaflet-geoman-free@latest/dist/leaflet-geoman.js"
          defer
        ></script>
      </head>
      <body
        className={cn(
          'flex min-h-screen flex-col bg-black font-sans antialiased',
          fontSans.variable
        )}
      >
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
