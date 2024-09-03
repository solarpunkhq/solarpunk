'use client';

import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

function Quote() {
  const firstHighlightRef = useRef<HTMLSpanElement | null>(null);
  const secondHighlightRef = useRef<HTMLSpanElement | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  useEffect(() => {
    if (inView) {
      const elements = [firstHighlightRef, secondHighlightRef];

      elements.forEach((element, index) => {
        setTimeout(() => {
          element.current!.classList.add('active');
        }, index * 1250);
      });
    }
  }, [inView]);

  return (
    <section
      className="quote relative my-[241px] px-safe lg:my-[168px] md:my-[138px] sm:mb-24 sm:mt-[104px]"
      ref={ref}
    >
      <div className="container">
        <figure className="relative flex max-w-[1344px] justify-between gap-2 sm:flex-col sm:gap-5">
          <figcaption className="fs-24 mt-2 leading-none tracking-tighter text-gray-40 lg:mt-3 md:mt-0">
            – Thomas Edison
          </figcaption>
          <blockquote className="fs-28 max-w-[738px] font-medium leading-snug tracking-tighter lg:max-w-[640px] md:max-w-[448px] sm:max-w-none">
            “We are like tenant farmers{' '}
            <mark className="highlight" ref={firstHighlightRef}>
              chopping down
            </mark>{' '}
            the fence around our house for fuel when we should be using nature&apos;s inexhaustible
            sources of energy –{' '}
            <mark className="highlight" ref={secondHighlightRef}>
              sun, wind and tide.
            </mark>{' '}
            I&apos;d put my money on the sun and solar energy. What a source of power! I hope we
            don&apos;t have to wait until oil and coal run out before we tackle that.”
          </blockquote>
        </figure>
      </div>
    </section>
  );
}

export default Quote;
