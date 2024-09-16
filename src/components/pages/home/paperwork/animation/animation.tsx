'use client';

import { Alignment, Fit, Layout } from '@rive-app/react-canvas';
import clsx from 'clsx';

import RiveAnimation from '@/components/shared/rive-animation';

import useRiveAnimation from '@/hooks/use-rive-animation';

function Animation({ src, className }: { src: string; className?: string }) {
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
        className={clsx(
          'relative h-full w-full sm:pointer-events-none [&_canvas]:!h-full [&_canvas]:!w-full',
          className,
        )}
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
