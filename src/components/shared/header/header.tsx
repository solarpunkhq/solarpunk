'use client';

import Button from '@/components/shared/button';
// import Burger from '@/components/shared/header/burger';
// import Link from '@/components/shared/link';
import Logo from '@/components/shared/logo';
import MobileMenu from '@/components/shared/mobile-menu';

import { useMobileMenu } from '@/hooks/use-mobile-menu';

// import { MENUS } from '@/constants/menus';
import { ROUTE } from '@/constants/route';

function Header() {
  const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenu();

  return (
    <>
      <header className="absolute left-0 right-0 top-0 z-50 h-14 bg-white px-safe pt-safe sm:h-[42px]">
        <div
          className="container-wide flex h-full items-center justify-between"
          aria-label="Global"
        >
          <Logo className="sm:w-[106px]" isPriorityLoading />
          {/* TODO: uncomment when the menu is ready */}
          {/* <nav className="absolute left-1/2 top-1/2 ml-[22px] -translate-x-1/2 -translate-y-1/2 lg:ml-0 md:hidden">
            <ul className="flex gap-x-4 uppercase">
              {MENUS.header.map(({ label, href }, index) => (
                <li key={index}>
                  <Link
                    className="p-2 font-semibold tracking-wide"
                    size="xs"
                    theme="black"
                    href={href}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav> */}
          {/* TODO: hide on md when the menu is ready */}
          <Button
            // className="md:hidden"
            theme="black"
            size="xs"
            href={ROUTE.contactUs}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact us
          </Button>
          {/* <Burger
            className="hidden md:block"
            isToggled={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          /> */}
        </div>
      </header>
      <MobileMenu isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
    </>
  );
}

export default Header;
