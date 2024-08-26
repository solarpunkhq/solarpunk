// import Footer from '@/components/shared/footer';
import { esbuild, inter } from '@/fonts';

import Header from '@/components/shared/header';

import '@/styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${esbuild.variable}`}>
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="grow">{children}</main>
        {/* <Footer /> */}
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
