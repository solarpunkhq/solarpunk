'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

import Button from '@/components/shared/button';
import Logo from '@/components/shared/logo';

import { MENUS } from '@/constants/menus';
import { ROUTE } from '@/constants/route';

function Footer() {
  const t = useTranslations('FooterComponent');

  return (
    <footer className="relative bg-gray-12 py-[26px] px-safe home-sm:py-4">
      <nav className="container flex h-full items-center justify-between gap-1 px-4 home-sm:flex-col home-sm:items-start home-sm:gap-6">
        <Logo invert />
        <ul className="grid grid-cols-5 items-center justify-between uppercase leading-none md:gap-2">
          {MENUS.footer.main.map(({ label, href }, index) => (
            <li key={index}>
              <Button className="p-1 font-semibold tracking-wide" href={href} theme="black">
                {label}
              </Button>
            </li>
          ))}
        </ul>
        <Button
          className="mr-[7px] shrink-0 home-lg:mr-0"
          theme="green"
          size="home-xs"
          href={ROUTE.contactUs}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('contactUs')}
        </Button>
      </nav>
    </footer>
  );
}

export default Footer;
