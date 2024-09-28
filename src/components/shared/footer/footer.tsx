import Button from '@/components/shared/button';
// import Link from '@/components/shared/link';
import Logo from '@/components/shared/logo';

// import { MENUS } from '@/constants/menus';
import { ROUTE } from '@/constants/route';

function Footer() {
  return (
    <footer className="relative py-[26px] px-safe home-sm:py-4">
      <nav className="container flex h-full items-center justify-between gap-2 home-sm:flex-col home-sm:items-start home-sm:gap-6">
        <Logo />
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
