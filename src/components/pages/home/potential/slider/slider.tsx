'use client';

import { Route } from 'next';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import clsx from 'clsx';
import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion';

import Animation from '../animation';
import SliderTextContent from '../slider-text-content';

type SliderTextContent = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: Route<string>;
};

const TOTAL_SLIDES_QTY = 4;
const ANIMATION_DURATION = 7000;

const slidesQty = new Array(TOTAL_SLIDES_QTY).fill(1);

// TODO: refactoring of slider behavior logic is required
function Slider({ sliderTextContent }: { sliderTextContent: SliderTextContent[] }) {
  const [isAnimationMounted, setIsAnimationMounted] = useState(false);
  const [isAnimationLoaded, setIsAnimationLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState<number>(1);

  const progressBarRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { ref: preloadRef, inView: isPreloading } = useInView({
    triggerOnce: true,
    rootMargin: '500px 0px',
  });
  const { ref: playRef, inView: isPlaying } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });

  useEffect(() => {
    if (!isPreloading || isAnimationMounted) {
      return;
    }

    setIsAnimationMounted(true);
  }, [isPreloading, isAnimationMounted]);

  const startSlideChange = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide % TOTAL_SLIDES_QTY) + 1);
    }, ANIMATION_DURATION);
  }, [intervalRef]);

  useEffect(() => {
    if (isPlaying && isAnimationLoaded) {
      startSlideChange();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentSlide, isPlaying, startSlideChange, isAnimationLoaded]);

  const handleLoadCompleted = (isLoaded: boolean) => {
    setIsAnimationLoaded(isLoaded);
  };

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait">
        <m.div
          className="relative col-start-1 row-start-2 mt-auto flex flex-col justify-between pb-14 lg:pb-3 md:col-span-full md:h-[220px] md:pb-0"
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <SliderTextContent {...sliderTextContent[currentSlide - 1]} />
        </m.div>
      </AnimatePresence>
      <div
        className="col-start-2 row-span-2 mr-16 xl:mr-0 md:col-span-full md:row-start-3 md:row-end-4 sm:mt-1 sm:w-full"
        ref={preloadRef}
      >
        {isAnimationMounted && (
          <>
            <div ref={playRef}>
              <Animation
                className="aspect-square w-[736px] overflow-hidden rounded-[10px] border border-[#6B8547] border-opacity-20 xl:w-[700px] lg:w-[480px] md:w-[448px] sm:w-full"
                slideNumber={currentSlide}
                isPlaying={isPlaying}
                onLoadCompleted={handleLoadCompleted}
              />
            </div>
            <ul className="mt-2 flex items-center justify-center gap-2 xl:mt-1 sm:gap-4">
              {slidesQty.map((_, index) => {
                return (
                  <li
                    className="group flex cursor-pointer items-center justify-center px-1 py-3 sm:px-0"
                    key={index}
                    onClick={() => setCurrentSlide(index + 1)}
                  >
                    <span className="h-1 w-[72px] overflow-hidden rounded-[10px] bg-gray-80 transition-[transform] duration-200 [transform:translateZ(0)] group-hover:scale-y-[200%] sm:w-[68px]">
                      <span
                        className={clsx(
                          'block h-full w-full origin-left scale-x-0 bg-black',
                          index !== currentSlide - 1 && '[animation:none]',
                          isPlaying && isAnimationLoaded
                            ? '[animation-play-state:running]'
                            : '[animation-play-state:paused]',
                        )}
                        ref={(el) => {
                          progressBarRefs.current[index] = el;
                        }}
                        data-animation
                      />
                    </span>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    </LazyMotion>
  );
}

export default Slider;