'use client';

import React, { ReactNode } from 'react';

import { LazyMotion, cubicBezier, domAnimation, m, useScroll, useTransform } from 'framer-motion';

export type ItemType = 'text' | 'solar-animation';

function useGetOpacity(
  index: number,
  totalItems: number,
  sectionRef: React.RefObject<HTMLDivElement>,
) {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['300px 1', '1 0.6'],
  });

  const opacity = useTransform(
    scrollYProgress,
    [index / totalItems, (index + 1) / totalItems],
    [0.25, 1],
  );

  return opacity;
}

function UseGetContentOpacity(
  index: number,
  totalItems: number,
  sectionRef: React.RefObject<HTMLDivElement>,
) {
  const opacity = useGetOpacity(index, totalItems, sectionRef);
  const contentOpacity = useTransform(opacity, (value) => (value <= 0.25 ? 0.25 : 1));

  return contentOpacity;
}

function UseCircleX(
  index: number,
  totalItems: number,
  sectionRef: React.RefObject<HTMLDivElement>,
) {
  const opacity = useGetOpacity(index, totalItems, sectionRef);

  return useTransform(opacity, [0.25, 0.251], [0, 142], {
    ease: cubicBezier(0.22, 0.68, 0, 1.71),
  });
}

function UseTextX(index: number, totalItems: number, sectionRef: React.RefObject<HTMLDivElement>) {
  const opacity = useGetOpacity(index, totalItems, sectionRef);

  return useTransform(opacity, [0.25, 0.251], [0, -50], {
    ease: cubicBezier(0.22, 0.68, 0, 1.71),
  });
}

interface ItemProps {
  content: ReactNode;
  index: number;
  totalItems: number;
  type: ItemType;
  className?: string;
  sectionRef: React.RefObject<HTMLDivElement>;
}

function AnimatedItem({ content, index, totalItems, type, sectionRef }: ItemProps) {
  return (
    <LazyMotion features={domAnimation}>
      {(() => {
        switch (type) {
          case 'solar-animation':
            return (
              <m.span className="[word-spacing:38px] lg:[word-spacing:26px] md:[word-spacing:20px] sm:[word-spacing:18px]">
                <m.span
                  className="relative transition-opacity duration-500"
                  style={{
                    opacity: UseGetContentOpacity(index - 1, totalItems, sectionRef),
                  }}
                >
                  with{' '}
                </m.span>
                <m.span className="solar-wrapper relative inline-block">
                  <m.span
                    className="solar-text relative z-20 inline-block pl-14 font-sans text-55 leading-[0.8] text-white transition-all duration-500"
                    style={{
                      opacity: UseGetContentOpacity(index, totalItems, sectionRef),
                      x: UseTextX(index, totalItems, sectionRef),
                    }}
                  >
                    solar
                  </m.span>
                  <m.span
                    className="black-underlay absolute left-1/2 top-1/2 -z-50 h-[88px] w-[232px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black transition-all duration-500"
                    style={{
                      opacity: UseGetContentOpacity(index, totalItems, sectionRef),
                    }}
                  />
                  <m.span
                    className="orange-circle absolute -left-2.5 top-1/2 z-30 h-[54px] w-[54px] -translate-y-1/2 rounded-full bg-sun-icon-bg shadow-sun-icon transition-[transform,opacity] duration-[500ms,200ms]"
                    style={{
                      opacity: UseGetContentOpacity(index, totalItems, sectionRef),
                      x: UseCircleX(index, totalItems, sectionRef),
                      y: '-50%',
                    }}
                  />
                </m.span>
                <m.span
                  className="relative transition-opacity duration-500"
                  style={{
                    opacity: UseGetContentOpacity(index + 1, totalItems, sectionRef),
                  }}
                >
                  {' '}
                  energy
                </m.span>
              </m.span>
            );

          default:
            return (
              <m.span
                className="relative transition-opacity duration-500"
                style={{
                  opacity: UseGetContentOpacity(index, totalItems, sectionRef),
                }}
              >
                {content}
              </m.span>
            );
        }
      })()}
    </LazyMotion>
  );
}

export default AnimatedItem;
