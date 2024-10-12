import Button from '@/components/shared/button';
import Logo from '@/components/shared/logo';

import { MENUS } from '@/constants/menus';
import { ROUTE } from '@/constants/route';

function Footer() {
  return (
    <footer className="relative py-[26px] px-safe home-sm:py-4">
      <nav className="container flex h-full items-center justify-between gap-2 home-sm:flex-col home-sm:items-start home-sm:gap-6">
        <Logo />
        <ul className="grid grid-cols-5 items-center justify-between uppercase leading-none md:gap-2">
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
          className="mr-[7px] shrink-0 home-lg:mr-0"
          theme="black"
          size="home-xs"
          href={ROUTE.contactUs}
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact us
        </Button>
      </nav>
      <p className="px-4 pt-4 text-center text-xs text-gray-50">
        Donate on Bittensor:{' '}
        <a
          target="_blank"
          className="text-gray-100 underline hover:text-black"
          href="https://bittensor.com/scan/address/5HZHcpjgozBVD9vHRTBo1fvtrNHXvq49ZpCre3t51siXmr15"
        >
          5HZHcpjgozBVD9vHRTBo1fvtrNHXvq49ZpCre3t51siXmr15
        </a>
      </p>
    </footer>
  );
}

export default Footer;
