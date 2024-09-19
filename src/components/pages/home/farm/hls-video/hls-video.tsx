'use client';

import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion';

import useIsSafari from '@/hooks/use-is-safari';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Hls = require('hls.js/dist/hls.light.min.js');

const VIDEO_MP4 = '/videos/pages/home/farm/card.mp4?updated=20240919135945';
const VIDEO_M3U8 = '/videos/pages/home/farm/card.m3u8?updated=20240919135945';

function HlsVideo() {
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
    const videoSrc = isSafari ? VIDEO_MP4 : VIDEO_M3U8;

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
      <div
        className="pointer-events-none flex w-[608px] shrink-0 items-center justify-center overflow-hidden rounded-[10px] lg:w-[482px] md:aspect-[0.709] md:w-[448px] sm:aspect-square sm:w-full sm:max-w-[448px]"
        ref={videoPreloadRef}
      >
        <AnimatePresence>
          {/*       
            Video optimization parameters:
              mp4: -pix_fmt yuv420p -vf "scale=1220:-2" -movflags faststart -vcodec libx264 -g 60 -crf 20
              m3u8: -codec: copy -start_number 0 -hls_time 2 -hls_list_size 0 -f hls output.m3u8
          */}
          {isInView && (
            <m.video
              className="w-full object-cover object-center md:scale-110 sm:translate-y-[48px] sm:scale-100"
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
