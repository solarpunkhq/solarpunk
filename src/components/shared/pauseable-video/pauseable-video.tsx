'use client';

import {
  ForwardRefRenderFunction,
  PropsWithChildren,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import { useInView } from 'react-intersection-observer';

import clsx from 'clsx';
import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion';

import { ClassName } from '@/types/classname';

type PauseableVideoProps = ClassName & {
  videoClassName?: string;
  customInView?: boolean;
  width: number;
  height: number;
  withReset?: boolean;
};

/* eslint-disable react/function-component-definition */
const PauseableVideo: ForwardRefRenderFunction<
  HTMLVideoElement | null,
  PropsWithChildren<PauseableVideoProps>
> = (
  { children, className, videoClassName, width, height, customInView, withReset = false },
  ref,
) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [videoVisibilityRef, isInView] = useInView({
    triggerOnce: true,
    rootMargin: '400px 0px',
  });
  const { inView, ref: setVideoRef } = useInView({ threshold: 0.1 });

  useEffect(() => {
    setVideoRef(videoRef.current);
  }, [setVideoRef]);

  function playVideo(videoElement: HTMLVideoElement) {
    if (withReset) {
      videoElement.currentTime = 0;
    }
    const playPromise = videoElement.play();

    if (playPromise !== undefined) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      playPromise.catch((error: any) => {
        // eslint-disable-next-line no-console
        console.error('Error attempting to play video:', error);
      });
    }
  }

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }

    const videoElement = videoRef.current;

    if (customInView !== undefined) {
      if (customInView) {
        playVideo(videoElement);
      } else {
        videoElement.pause();
      }
    } else {
      if (inView) {
        playVideo(videoElement);
      } else {
        videoElement.pause();
      }
    }
  }, [inView, customInView]);

  // Combine the external ref with the internal videoRef
  useImperativeHandle<HTMLVideoElement | null, HTMLVideoElement | null>(
    ref,
    () => videoRef.current,
  );

  return (
    <LazyMotion features={domAnimation}>
      <div className={className} ref={videoVisibilityRef}>
        <AnimatePresence>
          {isInView && (
            <m.video
              className={clsx('absolute inset-0', videoClassName)}
              ref={videoRef}
              controls={false}
              width={width}
              height={height}
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              autoPlay
              loop
              playsInline
              muted
            >
              {children}
            </m.video>
          )}
        </AnimatePresence>
      </div>
    </LazyMotion>
  );
};

export default forwardRef(PauseableVideo);
