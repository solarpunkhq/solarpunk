'use client';

import React, { ReactNode, useMemo } from 'react';

import { LazyMotion, domAnimation, m, useScroll, useTransform } from 'framer-motion';

import useWindowSize from '@/hooks/use-window-size';

export type ItemType = 'text' | 'solar-animation';

function UseGetOpacity(
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
  const opacity = UseGetOpacity(index, totalItems, sectionRef);
  const contentOpacity = useTransform(opacity, (value) => (value <= 0.25 ? 0.25 : 1));

  return contentOpacity;
}

function UseCircleXPosition(
  index: number,
  totalItems: number,
  sectionRef: React.RefObject<HTMLDivElement>,
  width: number | undefined,
) {
  const opacity = UseGetOpacity(index, totalItems, sectionRef);

  const startXPosition = useMemo(() => {
    if (!width) {
      return;
    }

    if (width < 768) {
      return 23;
    }
    if (width < 1280) {
      return 20;
    }

    return 0;
  }, [width]);

  const endXPosition = useMemo(() => {
    if (!width) {
      return;
    }

    if (width < 768) {
      return 100;
    }
    if (width < 1024) {
      return 136;
    }

    return 142;
  }, [width]);

  const circleXPosition = useTransform(opacity, [0.25, 0.251], [startXPosition, endXPosition]);

  if (width === undefined) {
    return '';
  }

  return circleXPosition;
}

function UseBg(index: number, totalItems: number, sectionRef: React.RefObject<HTMLDivElement>) {
  const opacity = UseGetOpacity(index, totalItems, sectionRef);
  const circleColor = useTransform(
    opacity,
    [0.25, 0.251],
    [
      'linear-gradient(180deg, #FFF 0%, #FFF 117.52%)',
      'linear-gradient(180deg, #FFDE6B 0%, #FF7511 117.52%)',
    ],
  );

  return circleColor;
}

function UseUnderlayColor(
  index: number,
  totalItems: number,
  sectionRef: React.RefObject<HTMLDivElement>,
) {
  const opacity = UseGetOpacity(index, totalItems, sectionRef);
  const underlayColor = useTransform(opacity, [0.25, 0.251], ['#9194A1', '#040406']);

  return underlayColor;
}

function UseBoxShadow(
  index: number,
  totalItems: number,
  sectionRef: React.RefObject<HTMLDivElement>,
) {
  const opacity = UseGetOpacity(index, totalItems, sectionRef);

  const boxShadow = useTransform(
    opacity,
    [0.25, 0.251],
    ['0px 0px 8px 4px #9194A1', '0px 0px 8px 4px #000000'],
  );

  return boxShadow;
}

function UseTextX(
  index: number,
  totalItems: number,
  sectionRef: React.RefObject<HTMLDivElement>,
  width: number | undefined,
) {
  const opacity = UseGetOpacity(index, totalItems, sectionRef);

  const endXPosition = useMemo(() => {
    if (!width) {
      return;
    }

    if (width < 768) {
      return -40;
    } else {
      return -50;
    }
  }, [width]);

  const textXPosition = useTransform(opacity, [0.25, 0.251], [0, endXPosition]);

  return textXPosition;
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
  const { width } = useWindowSize();

  return (
    <LazyMotion features={domAnimation}>
      {(() => {
        switch (type) {
          case 'solar-animation':
            return (
              <m.span className="[word-spacing:38px] lg:[word-spacing:32px] md:[word-spacing:26px] sm:[word-spacing:18px]">
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
                    className="solar-text relative z-20 inline-block pl-14 font-sans text-55 leading-[0.8] text-white transition-all duration-500 lg:pl-[50px] lg:text-50 md:text-44 sm:pl-10 sm:text-30"
                    style={{
                      x: UseTextX(index, totalItems, sectionRef, width),
                    }}
                  >
                    solar
                  </m.span>
                  <m.span
                    className="black-underlay absolute left-1/2 top-[54%] -z-50 h-[88px] w-[232px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-500 lg:h-[76px] lg:w-[200px] md:h-[66px] md:w-[185px] sm:h-11 sm:w-[126px]"
                    style={{
                      backgroundColor: UseUnderlayColor(index, totalItems, sectionRef),
                    }}
                  />
                  <m.span
                    className="orange-circle absolute -left-2.5 top-[54%] z-30 h-[54px] w-[54px] -translate-y-1/2 rounded-full transition-[transform,opacity,box-shadow] duration-[500ms,200ms,500ms] lg:-left-[26px] lg:size-[46px] md:size-[42px] sm:size-[30px] sm:translate-x-[23px]"
                    style={{
                      x: UseCircleXPosition(index, totalItems, sectionRef, width),
                      y: '-50%',
                      background: UseBg(index, totalItems, sectionRef),
                      boxShadow: UseBoxShadow(index, totalItems, sectionRef),
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
