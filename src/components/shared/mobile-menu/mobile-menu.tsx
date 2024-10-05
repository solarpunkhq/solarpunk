'use client';

import clsx from 'clsx';
import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion';

import Button from '@/components/shared/button';
import Link from '@/components/shared/link';

import { MENUS } from '@/constants/menus';
import { ROUTE } from '@/constants/route';

const ANIMATION_DURATION = 0.2;

const menuVariants = {
  closed: {
    opacity: 0,
    transition: {
      duration: ANIMATION_DURATION,
    },
  },
  opened: {
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATION,
    },
  },
};

function MobileMenu({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {isOpen && (
          <m.nav
            className="absolute inset-x-0 bottom-0 top-0 z-40 hidden bg-white px-safe home-md:block"
            initial="closed"
            animate="opened"
            exit="closed"
            variants={menuVariants}
            onClick={onClick}
          >
            <div className="relative flex h-full w-full flex-col justify-between pb-10 pt-14 text-left">
              <ul className="flex w-full flex-col overflow-y-auto px-5 font-semibold uppercase tracking-wide">
                {MENUS.header.map(({ label, href }, index) => (
                  <li
                    className={clsx(
                      'border-b border-black',
                      index === MENUS.header.length - 1 && 'border-none',
                    )}
                    key={index}
                  >
                    <Link
                      className="block pb-[17px] pt-[18px] leading-none text-gray-5"
                      href={href}
                      size="home-sm"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col items-start justify-center gap-4">
                <Button
                  className="absolute -bottom-5 left-1/2 !h-11 w-[calc(100%-2.5rem)] -translate-x-1/2 py-3.5"
                  theme="black"
                  size="home-sm"
                  href={ROUTE.login}
                >
                  Login
                </Button>
                <Button
                  className="absolute -bottom-5 left-1/2 !h-11 w-[calc(100%-2.5rem)] -translate-x-1/2 py-3.5"
                  theme="black"
                  size="home-sm"
                  href={ROUTE.index}
                >
                  Contact us
                </Button>
              </div>
            </div>
          </m.nav>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}

export default MobileMenu;
