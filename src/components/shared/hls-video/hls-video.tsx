'use client';

import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

import clsx from 'clsx';
import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion';

import useIsSafari from '@/hooks/use-is-safari';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Hls = require('hls.js/dist/hls.light.min.js');

type HlsVideo = {
  src: { mp4: string; m3u8: string };
  videoClassName: string;
  videoWrapperClassName?: string;
};

function HlsVideo({ src, videoClassName, videoWrapperClassName }: HlsVideo) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const isSafari = useIsSafari();
  const { ref: videoPreloadRef, inView: isInView } = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px 500px 0px',
  });
  const { ref: videoVisibleyRef, inView: isVideoVisible } = useInView({
    threshold: 0.05,
  });

  const setVideoRefs = (el: HTMLVideoElement | null) => {
    if (videoRef.current !== el) {
      videoRef.current = el;
    }
    videoVisibleyRef(el);
  };

  useEffect(() => {
    const videoElement = videoRef?.current;

    if (!videoElement || !isInView) {
      return;
    }

    // Each video is optimized to work well in different browsers
    const videoSrc = isSafari ? src.mp4 : src.m3u8;

    // Using HLS.js for browsers that support it, except for Safari which has native HLS support.
    if (Hls.isSupported() && !isSafari) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(videoElement);
    } else {
      const source = document.createElement('source');
      source.src = videoSrc;
      source.type = 'video/mp4';
      videoElement.appendChild(source);
    }
  }, [isInView, isSafari]);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement) {
      return;
    }

    if (isVideoVisible) {
      videoElement.currentTime = 0;
      videoElement.play();
    } else {
      videoElement.pause();
    }
  }, [isVideoVisible]);

  return (
    <LazyMotion features={domAnimation}>
      <div className={clsx('pointer-events-none', videoWrapperClassName)} ref={videoPreloadRef}>
        <AnimatePresence>
          {isInView && (
            <m.video
              className={videoClassName}
              width={1472}
              height={1056}
              controls={false}
              ref={setVideoRefs}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              autoPlay
              loop
              muted
              playsInline
            />
          )}
        </AnimatePresence>
      </div>
    </LazyMotion>
  );
}

export default HlsVideo;
