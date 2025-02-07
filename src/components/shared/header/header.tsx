'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

import Button from '@/components/shared/button';
import Logo from '@/components/shared/logo';
import MobileMenu from '@/components/shared/mobile-menu';

import { useMobileMenu } from '@/hooks/use-mobile-menu';

import { ROUTE } from '@/constants/route';

import Burger from './burger';

function Header({ isLoggedIn = false }: { isLoggedIn?: boolean }) {
  const t = useTranslations('translations');

  const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenu();
  const pathname = usePathname();

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
              <li>
                <Button
                  className="p-2 font-semibold tracking-wide"
                  size="home-xs"
                  theme={pathname.includes('/blog/agrivoltaics') ? 'green' : 'white'}
                  href={ROUTE.agrivoltaics}
                >
                  {t('header_agrivoltaics')}
                </Button>
              </li>
              {pathname.includes('/farms') && (
                <li>
                  <Button
                    className="p-2 font-semibold tracking-wide"
                    size="home-xs"
                    theme={pathname.includes('/farms') ? 'green' : 'white'}
                    href={'/farms'}
                  >
                    Rent an apartment
                  </Button>
                </li>
              )}
              <li>
                <Button
                  className="p-2 font-semibold tracking-wide"
                  size="home-xs"
                  theme={pathname.endsWith('/blog') ? 'green' : 'white'}
                  href={ROUTE.blog}
                >
                  {t('header_blog')}
                </Button>
              </li>
            </ul>
          </nav>
          <div className="flex items-center justify-center gap-4">
            {!isLoggedIn ? (
              <Button
                className="home-md:hidden"
                theme="white"
                size="home-xs"
                href={ROUTE.login}
                rel="noopener noreferrer"
              >
                {t('header_login')}
              </Button>
            ) : (
              <Button
                className="home-md:hidden"
                theme="white"
                size="home-xs"
                href={ROUTE.logout}
                rel="noopener noreferrer"
              >
                {t('header_logout')}
              </Button>
            )}

            <Button
              className="home-md:hidden"
              theme="black"
              size="home-xs"
              href={ROUTE.contactUs}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('header_contact')}
            </Button>
          </div>

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
