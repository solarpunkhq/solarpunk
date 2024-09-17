import Image from 'next/image';

import Button from '@/components/shared/button';
import Link from '@/components/shared/link';

import { MENUS } from '@/constants/menus';
import { ROUTE } from '@/constants/route';

import logo from '@/svgs/logo.svg';

function Footer() {
  return (
    <footer className="relative py-[26px] px-safe sm:py-5">
      <nav className="container flex h-full items-center justify-between gap-2 sm:flex-col sm:items-start sm:gap-7">
        <Link className="" href={ROUTE.index}>
          <Image src={logo} width={115} height={26} alt="" />
          <span className="sr-only">Solurpunk</span>
        </Link>
        <ul className="ml-9 flex items-center justify-between gap-x-8 uppercase leading-none lg:ml-7 md:-ml-[15px] sm:ml-0 sm:grid sm:grid-cols-2 sm:gap-x-[70px] sm:gap-y-2">
          {MENUS.footer.main.map(({ label, href }, index) => {
            return (
              <li key={index}>
                <Link
                  className="py-1 font-semibold tracking-wide"
                  href={href}
                  size="xs"
                  theme="black"
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
        <Button
          className="mr-[7px] shrink-0 lg:mr-0 sm:hidden"
          theme="black"
          size="xs"
          href={ROUTE.index}
        >
          Contact us
        </Button>
      </nav>
    </footer>
  );
}

export default Footer;
