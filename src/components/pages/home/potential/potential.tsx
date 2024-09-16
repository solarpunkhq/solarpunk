'use client';

import { Route } from 'next';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import clsx from 'clsx';
import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion';

import Animation from './animation';
import Section from './section';

const TOTAL_SLIDES_QTY = 4;
const ANIMATION_DURATION = 7000;

const sections = [
  {
    title: 'Exploration',
    description:
      'We will help you understand what type of Agrivoltaic project is right for you and what type of regulatory hurdles you will face. While we primarily focus on agrivoltaics, we also offer solar deployments for any non-agricultural land except residential roofs.',
    buttonText: 'Learn more',
    buttonLink: '/' as Route<string>,
  },
  {
    title: 'Planning',
    description:
      "We'll turn the research results into a plan and get the necessary permits to start your project. We help you with the paperwork and the planning.",
    buttonText: 'Learn more',
    buttonLink: '/' as Route<string>,
  },
  {
    title: 'Financing',
    description:
      'We partner with dept firms who can help you finance your project and who have years of experience in the energy sector.',
    buttonText: 'Learn more',
    buttonLink: '/' as Route<string>,
  },
  {
    title: 'Deployment',
    description:
      'Solarpunk works with a dedicated team of engineers and electricians to deploy your project. We take care of the entire process and optimise for speed to get your project up and running faster than the traditional way of photovoltaics.',
    buttonText: 'Learn more',
    buttonLink: '/' as Route<string>,
  },
];

const slidesQty = new Array(TOTAL_SLIDES_QTY).fill(1);

function Potential() {
  const [isAnimationMounted, setIsAnimationMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const progressBarRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });

  useEffect(() => {
    if (!inView || isAnimationMounted) {
      return;
    }

    setIsAnimationMounted(true);
  }, [inView, isAnimationMounted]);

  const startSlideChange = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide % TOTAL_SLIDES_QTY) + 1);
    }, ANIMATION_DURATION);
  }, [intervalRef]);

  useEffect(() => {
    if (inView) {
      startSlideChange();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentSlide, inView, startSlideChange]);

  return (
    <LazyMotion features={domAnimation}>
      <section
        className="potential mt-[200px] px-safe xl:mt-[135px] md:mt-[125px] sm:mt-[116px]"
        ref={ref}
      >
        <div className="container flex justify-between gap-x-8 lg:items-end md:max-w-lg md:flex-col md:items-center md:gap-y-11 sm:gap-y-10">
          <div className="flex max-w-[640px] flex-col pb-12 pt-6 xl:pb-5 xl:pt-0 lg:min-h-[519px] lg:pb-0 md:min-h-[auto]">
            <h2 className="max-w-[540px] font-title text-56 leading-[1.1] tracking-tight text-gray-20 xl:text-48 md:text-40 sm:max-w-[289px] sm:text-32">
              Discover your farm&apos;s full potential
            </h2>
            <p className="mt-[19px] max-w-[540px] text-25 leading-snug tracking-tighter text-gray-40 xl:text-20 md:mt-[18px] md:text-18 sm:mt-4 sm:text-16">
              Transform your fields with solar technology, fostering a thriving environment that
              supports longer and healthier crop cycles.
            </p>

            <AnimatePresence mode="wait">
              <m.div
                className="relative mt-auto md:mt-11 sm:mt-9"
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Section {...sections[currentSlide - 1]} />
              </m.div>
            </AnimatePresence>
          </div>
          <div className="mr-16 xl:mr-0 sm:w-full">
            {isAnimationMounted && (
              <>
                <Animation
                  className="aspect-square w-full max-w-[736px] overflow-hidden rounded-[10px] border border-[#6B8547] border-opacity-20 lg:w-[480px] md:w-[448px] sm:w-full"
                  slideNumber={currentSlide}
                  isPlaying={inView}
                />
                <ul className="mt-5 flex items-center justify-center gap-4 xl:mt-4">
                  {slidesQty.map((_, index) => {
                    return (
                      <li
                        className="h-1 w-[72px] cursor-pointer overflow-hidden rounded-[10px] bg-gray-80 transition-[transform] duration-200 hover:scale-y-[200%]"
                        key={index}
                        onClick={() => setCurrentSlide(index + 1)}
                      >
                        <span
                          className={clsx(
                            'block h-full w-full origin-left scale-x-0 bg-black',
                            index !== currentSlide - 1 && '[animation:none]',
                            inView
                              ? '[animation-play-state:running]'
                              : '[animation-play-state:paused]',
                          )}
                          ref={(el) => {
                            progressBarRefs.current[index] = el;
                          }}
                          data-animation
                        />
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}

export default Potential;
