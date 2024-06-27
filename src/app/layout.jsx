import { RootLayout } from '@/components/RootLayout'
import { cn } from '@/lib/utils'
import localFont from 'next/font/local'
import '@/styles/tailwind.css'
import { Inter } from 'next/font/google'

export const metadata = {
  title: {
    template: '%s - Solarpunk',
    default: 'Solarpunk - Covering farms with solar panels',
  },
}

const calSans = localFont({
  src: [
    {
      path: '../../public/fonts/CalSans-SemiBold.ttf',
      weight: '400',
    },
  ],
  variable: '--font-cal-sans',
})

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

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
          calSans.variable,
          inter.variable
        )}
      >
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
