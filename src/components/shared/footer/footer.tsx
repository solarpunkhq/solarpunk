import Image from 'next/image';

import Button from '@/components/shared/button';
import Link from '@/components/shared/link';

import { MENUS } from '@/constants/menus';
import { ROUTE } from '@/constants/route';

import logo from '@/svgs/logo.svg';

function Footer() {
  return (
    <footer className="relative py-[26px] px-safe pb-safe-or-10">
      <nav className="container flex h-full items-center justify-between sm:flex-col sm:items-start sm:gap-7">
        <Link className="" href={ROUTE.index}>
          <Image src={logo} width={115} height={26} alt="" />
          <span className="sr-only">Solurpunk</span>
        </Link>
        <ul className="flex justify-between gap-x-8 font-semibold uppercase leading-none tracking-tight sm:grid sm:grid-cols-2 sm:gap-x-[78px] sm:gap-y-0.5">
          {MENUS.footer.main.map(({ label, href }, index) => {
            return (
              <li key={index}>
                <Link className="py-2" href={href} size="xs" theme="black">
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
        <Button className="sm:hidden" theme="black" size="xs" href={ROUTE.index}>
          Contact us
        </Button>
      </nav>
    </footer>
  );
}

export default Footer;
