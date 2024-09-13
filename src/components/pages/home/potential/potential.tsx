'use client';

import { Route } from 'next';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import clsx from 'clsx';
import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion';

import Animation from './animation';
import Section from './section';

const TOTAL_SLIDES_QTY = 4;
const ANIMATION_DURATION = 6000;

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

function Potential() {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prevSlide) => prevSlide + 1);
      }, ANIMATION_DURATION);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [inView]);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide === TOTAL_SLIDES_QTY ? 1 : prevSlide + 1));
      }, ANIMATION_DURATION);
    }
  };

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <LazyMotion features={domAnimation}>
      <section
        className="potential mt-[200px] px-safe xl:mt-[135px] md:mt-[125px] sm:mt-[116px]"
        ref={ref}
      >
        <div className="container flex justify-between gap-x-8 xl:max-w-5xl md:max-w-lg md:flex-col md:items-center md:gap-y-11 sm:gap-y-10">
          <div className="flex max-w-[640px] flex-col pb-12 pt-6 xl:pb-5 xl:pt-0 md:pb-0">
            <h2 className="max-w-[540px] font-title text-56 leading-[1.1] tracking-tight text-gray-20 xl:max-w-[420px] xl:text-48 md:text-40 sm:max-w-[289px] sm:text-32">
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
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                exit="hidden"
                transition={{ duration: 0.3 }}
                variants={variants}
              >
                <Section {...sections[currentSlide - 1]} />
              </m.div>
            </AnimatePresence>
          </div>
          <div className="mr-16 xl:mr-0 sm:w-full">
            {inView && (
              <>
                <Animation
                  className="aspect-square w-[736px] overflow-hidden rounded-[10px] border border-[#6B8547] border-opacity-20 xl:w-[480px] md:w-[448px] sm:w-full"
                  slideNumber={currentSlide}
                />
                <ul className="mt-5 flex items-center justify-center gap-4 xl:mt-4">
                  {[...Array(TOTAL_SLIDES_QTY)].map((_, index) => {
                    return (
                      <li
                        className="h-2 w-[72px] cursor-pointer overflow-hidden rounded-[10px] bg-gray-80"
                        key={index}
                        onClick={() => handleSlideChange(index + 1)}
                      >
                        <span
                          className={clsx(
                            'block h-full w-full origin-left bg-black',
                            currentSlide === index + 1 ? 'scale-x-100' : 'scale-x-0',
                          )}
                          style={{
                            transition: currentSlide === index + 1 ? `transform` : 'none',
                            transitionDuration:
                              currentSlide === index + 1 ? `${ANIMATION_DURATION}ms` : 'none',
                          }}
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
