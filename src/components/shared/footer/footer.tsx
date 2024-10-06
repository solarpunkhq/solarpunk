import Button from '@/components/shared/button';
import Logo from '@/components/shared/logo';

import { MENUS } from '@/constants/menus';
import { ROUTE } from '@/constants/route';

function Footer() {
  return (
    <footer className="relative py-[26px] px-safe home-sm:py-4">
      <nav className="container flex h-full items-center justify-between gap-2 home-sm:flex-col home-sm:items-start home-sm:gap-6">
        <Logo />
        <ul className="grid grid-cols-3 items-center justify-between gap-2 uppercase leading-none md:grid-cols-5">
          {MENUS.footer.main.map(({ label, href }, index) => {
            return (
              <li key={index}>
                <Button className="py-1 font-semibold tracking-wide" href={href} theme="white">
                  {label}
                </Button>
              </li>
            );
          })}
        </ul>
        <Button
          className="mr-[7px] shrink-0 home-lg:mr-0 home-sm:hidden"
          theme="black"
          size="home-xs"
          href={ROUTE.contactUs}
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact us
        </Button>
      </nav>
    </footer>
  );
}

export default Footer;
