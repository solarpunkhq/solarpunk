'use client';

import clsx from 'clsx';
import { LazyMotion, domAnimation, m } from 'framer-motion';

const ANIMATION_DURATION = 0.2;

function Burger({
  className,
  isToggled,
  onClick,
}: {
  className?: string;
  isToggled: boolean;
  onClick: () => void;
}) {
  return (
    <LazyMotion features={domAnimation}>
      <m.button
        className={clsx('relative', className)}
        type="button"
        animate={isToggled ? 'toggled' : 'initial'}
        aria-label={isToggled ? 'Close menu' : 'Open menu'}
        onClick={onClick}
      >
        <div className="absolute -inset-5" aria-hidden />
        <span className="relative block h-7 w-7">
          <m.span
            className="absolute right-0 top-1 block h-0.5 w-7 rounded-full bg-[#000] transition-colors duration-200"
            variants={{
              initial: {
                top: 4,
                opacity: 1,
                transition: {
                  top: { duration: ANIMATION_DURATION, delay: ANIMATION_DURATION },
                  opacity: { duration: 0, delay: ANIMATION_DURATION },
                },
              },
              toggled: {
                top: 13,
                transition: { duration: ANIMATION_DURATION },
                transitionEnd: { opacity: 0 },
              },
            }}
          />
          <m.span
            className="absolute right-0 top-[13px] block h-0.5 w-7 rounded-full bg-[#000] transition-colors duration-200"
            variants={{
              initial: {
                opacity: 1,
                transition: { duration: 0, delay: ANIMATION_DURATION },
              },
              toggled: {
                opacity: 0,
                transition: { duration: 0, delay: ANIMATION_DURATION },
              },
            }}
          />
          <m.span
            className="absolute bottom-1 right-0 block h-0.5 w-7 rounded-full bg-[#000] transition-colors duration-200"
            variants={{
              initial: {
                bottom: 4,
                opacity: 1,
                transition: {
                  bottom: { duration: ANIMATION_DURATION, delay: ANIMATION_DURATION },
                  opacity: { duration: 0, delay: ANIMATION_DURATION },
                },
              },
              toggled: {
                bottom: 13,
                transition: { duration: ANIMATION_DURATION },
                transitionEnd: { opacity: 0 },
              },
            }}
          />
          <m.span
            className="absolute right-0 top-3.5 h-0.5 w-7 rounded-full bg-[#000] opacity-0 transition-colors duration-200"
            variants={{
              initial: {
                rotate: '0deg',
                opacity: 0,
                transition: {
                  rotate: { duration: ANIMATION_DURATION },
                  opacity: { duration: 0, delay: ANIMATION_DURATION },
                },
              },
              toggled: {
                opacity: 1,
                rotate: '45deg',
                transition: {
                  rotate: { duration: ANIMATION_DURATION, delay: ANIMATION_DURATION },
                  opacity: { duration: 0, delay: ANIMATION_DURATION },
                },
              },
            }}
          />
          <m.span
            className="absolute right-0 top-3.5 h-0.5 w-7 rounded-full bg-[#000] opacity-0 transition-colors duration-200"
            variants={{
              initial: {
                rotate: '0deg',
                opacity: 0,
                transition: {
                  rotate: { duration: ANIMATION_DURATION },
                  opacity: { duration: 0, delay: ANIMATION_DURATION },
                },
              },
              toggled: {
                opacity: 1,
                rotate: '-45deg',
                transition: {
                  rotate: { duration: ANIMATION_DURATION, delay: ANIMATION_DURATION },
                  opacity: { duration: 0, delay: ANIMATION_DURATION },
                },
              },
            }}
          />
        </span>
      </m.button>
    </LazyMotion>
  );
}

export default Burger;
