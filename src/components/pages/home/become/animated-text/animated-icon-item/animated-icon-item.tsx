'use client';

import { useTranslations } from 'next-intl';

import React, { ReactNode, useMemo } from 'react';

import { LazyMotion, domAnimation, m, useTransform } from 'framer-motion';

import { UseGetOpacity, UseGetTextOpacity } from '@/hooks/use-get-animation';
import useWindowSize from '@/hooks/use-window-size';

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

  const circleXPosition = useTransform(opacity, [0.45, 0.451], [startXPosition, endXPosition]);

  if (width === undefined) {
    return '';
  }

  return circleXPosition;
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
      return -34;
    } else if (width < 1280) {
      return -50;
    } else {
      return -54;
    }
  }, [width]);

  const textXPosition = useTransform(opacity, [0.45, 0.451], [0, endXPosition]);

  return textXPosition;
}

function UseStyleTransforms(
  index: number,
  totalItems: number,
  sectionRef: React.RefObject<HTMLDivElement>,
  width: number | undefined,
) {
  const opacity = UseGetOpacity(index, totalItems, sectionRef);

  const circleXPosition = UseCircleXPosition(index, totalItems, sectionRef, width);

  const circleBgColor = useTransform(
    opacity,
    [0.45, 0.451],
    [
      'linear-gradient(180deg, #FFF 0%, #FFF 117.52%)',
      'linear-gradient(180deg, #FFDE6B 0%, #FF7511 117.52%)',
    ],
  );

  const underlayBgColor = useTransform(opacity, [0.45, 0.451], ['#a1a2a5', '#040406']);
  const circleBoxShadow = useTransform(
    opacity,
    [0.45, 0.451],
    ['0px 0px 8px 4px #a1a2a5', '0px 0px 8px 4px #000000'],
  );
  const textXPosition = UseTextX(index, totalItems, sectionRef, width);

  return { circleXPosition, circleBgColor, underlayBgColor, circleBoxShadow, textXPosition };
}

interface ItemProps {
  content?: ReactNode;
  index: number;
  totalItems: number;
  className?: string;
  sectionRef: React.RefObject<HTMLDivElement>;
}

function AnimatedIconItem({ index, totalItems, sectionRef }: ItemProps) {
  const { width } = useWindowSize();

  const { circleXPosition, circleBgColor, underlayBgColor, circleBoxShadow, textXPosition } =
    UseStyleTransforms(index, totalItems, sectionRef, width);
  const t = useTranslations('translations');

  return (
    <LazyMotion features={domAnimation}>
      <m.span className="[word-spacing:30px] home-lg:[word-spacing:32px] home-md:[word-spacing:26px] home-sm:[word-spacing:18px]">
        <m.span
          className="relative transition-opacity duration-500"
          style={{
            opacity: UseGetTextOpacity(index - 1, totalItems, sectionRef),
          }}
        >
          {t('become_animated_1')}
        </m.span>
        <m.span className="solar-wrapper relative inline-block">
          <m.span
            className="solar-text relative z-20 inline-block pl-14 font-title text-60 font-semibold leading-[1.48] tracking-tighter text-white transition-all duration-500 home-lg:pl-[50px] home-lg:text-51 home-md:text-44 home-sm:pl-[34px] home-sm:text-30"
            style={{
              x: textXPosition,
            }}
          >
            solar
          </m.span>
          <m.span
            className="black-underlay absolute left-1/2 top-[54%] -z-50 h-[88px] w-[232px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-500 home-lg:h-[76px] home-lg:w-[200px] home-md:h-[66px] home-md:w-[185px] home-sm:h-11 home-sm:w-[126px]"
            style={{ backgroundColor: underlayBgColor }}
          />
          <m.span
            className="orange-circle absolute -left-1 top-[54%] z-30 h-[54px] w-[54px] -translate-y-1/2 rounded-full transition-all duration-500 home-lg:-left-[26px] home-lg:size-[46px] home-md:size-[42px] home-sm:size-[30px] home-sm:translate-x-[23px]"
            style={{
              x: circleXPosition,
              y: '-50%',
              background: circleBgColor,
              boxShadow: circleBoxShadow,
            }}
          />
        </m.span>
        <m.span
          className="relative transition-opacity duration-500"
          style={{
            opacity: UseGetTextOpacity(index + 1, totalItems, sectionRef),
          }}
        >
          {' '}
          {t('become_animated_2')}
        </m.span>
      </m.span>
    </LazyMotion>
  );
}

export default AnimatedIconItem;
