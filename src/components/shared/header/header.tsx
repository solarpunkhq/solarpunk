'use client';

import Button from '@/components/shared/button';
// import Burger from '@/components/shared/header/burger';
// import Link from '@/components/shared/link';
import Logo from '@/components/shared/logo';
import MobileMenu from '@/components/shared/mobile-menu';

import { useMobileMenu } from '@/hooks/use-mobile-menu';

import { MENUS } from '@/constants/menus';
import { ROUTE } from '@/constants/route';

import Burger from './burger';

function Header() {
  const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenu();

  return (
    <>
      <header className="absolute left-0 right-0 top-0 z-50 h-14 bg-white px-safe pt-safe ">
        <div
          className="container-wide flex h-full items-center justify-between"
          aria-label="Global"
        >
          <Logo isPriorityLoading />
          <nav className="absolute left-1/2 top-1/2 ml-[22px] -translate-x-1/2 -translate-y-1/2 home-lg:ml-0 home-md:hidden">
            <ul className="flex gap-x-4 uppercase">
              {MENUS.header.map(({ label, href }, index) => (
                <li key={index}>
                  <Button
                    className="p-2 font-semibold tracking-wide"
                    size="home-xs"
                    theme="white"
                    href={href}
                  >
                    {label}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
          <Button
            className="home-md:hidden"
            theme="black"
            size="home-xs"
            href={ROUTE.contactUs}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact us
          </Button>
          <Burger
            className="hidden home-md:block"
            isToggled={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          />
        </div>
      </header>
      <MobileMenu isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
    </>
  );
}

export default Header;
