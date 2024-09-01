'use client';

import { Alignment, Fit, Layout } from '@rive-app/react-canvas';

import RiveAnimation from '@/components/shared/rive-animation';

import useRiveAnimation from '@/hooks/use-rive-animation';

function Animation({ src }: { src: string }) {
  const { riveInstance, wrapperRef, animationRef, isIntersecting, setRiveInstance } =
    useRiveAnimation({});

  const riveAnimationProps = {
    src,
    autoplay: false,
    stateMachines: 'SM',
    layout: new Layout({
      fit: Fit['Cover'],
      alignment: Alignment['Center'],
    }),
    onLoad: () => {
      riveInstance?.resizeDrawingSurfaceToCanvas();
    },
  };

  return (
    <div className="absolute inset-0 h-full w-full">
      <span className="absolute left-0 top-0 -z-10 h-full w-px" ref={wrapperRef} aria-hidden />
      <div
        className="relative h-full w-full [&_canvas]:!h-full [&_canvas]:!w-full"
        ref={animationRef}
      >
        {isIntersecting ? (
          <RiveAnimation setRiveInstance={setRiveInstance} {...riveAnimationProps} />
        ) : null}
      </div>
    </div>
  );
}

export default Animation;
