'use client';

import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion';

import Link from '@/components/shared/link';

import { MENUS } from '@/constants/menus';

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
            className="absolute inset-x-0 bottom-0 top-0 z-40 hidden bg-[#fff] bg-opacity-95 px-safe md:block"
            initial="closed"
            animate="opened"
            exit="closed"
            variants={menuVariants}
            onClick={onClick}
          >
            <div className="flex h-full w-full px-4 py-16 text-left">
              <ul className="flex w-full flex-col overflow-y-auto">
                {MENUS.header.map(({ label, href }, index) => (
                  <li className="h-14 border-b border-black" key={index}>
                    <Link className="text-gray-8 block py-5 leading-none" href={href} size="md">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </m.nav>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}

export default MobileMenu;
