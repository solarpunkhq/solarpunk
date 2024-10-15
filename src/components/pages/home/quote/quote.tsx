'use client';

import { useTranslations } from 'next-intl';

import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

function Quote() {
  const t = useTranslations('QuoteComponent');
  const firstHighlightRef = useRef<HTMLSpanElement | null>(null);
  const secondHighlightRef = useRef<HTMLSpanElement | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  useEffect(() => {
    if (inView) {
      const elements = [firstHighlightRef, secondHighlightRef];

      elements.forEach((element, index) => {
        setTimeout(() => {
          element.current!.classList.add('active');
        }, index * 250);
      });
    }
  }, [inView]);

  return (
    <section
      className="quote relative my-[241px] px-safe home-lg:my-[168px] home-md:my-[138px] home-sm:mb-[110px] home-sm:mt-[104px]"
      ref={ref}
    >
      <div className="container">
        <figure className="relative flex max-w-[1344px] justify-between gap-2 home-sm:flex-col home-sm:gap-5">
          <figcaption className="fs-24 mt-2 leading-none tracking-tighter text-gray-40 home-lg:mt-3 home-md:mt-0">
            {t('author')}
          </figcaption>
          <blockquote className="fs-28 max-w-[738px] font-medium leading-snug tracking-tighter home-lg:max-w-[640px] home-md:max-w-[448px] home-sm:max-w-none">
            {t('quote').split(t('firstHighlight'))[0]}
            <mark className="highlight" ref={firstHighlightRef}>
              {t('firstHighlight')}
            </mark>
            {t('quote').split(t('firstHighlight'))[1].split(t('secondHighlight'))[0]}
            <mark className="highlight" ref={secondHighlightRef}>
              {t('secondHighlight')}
            </mark>
            {t('quote').split(t('secondHighlight'))[1]}
          </blockquote>
        </figure>
      </div>
    </section>
  );
}

export default Quote;
