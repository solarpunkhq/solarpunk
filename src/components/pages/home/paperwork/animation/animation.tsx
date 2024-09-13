'use client';

import { Alignment, Fit, Layout } from '@rive-app/react-canvas';
import clsx from 'clsx';

import RiveAnimation from '@/components/shared/rive-animation';

import useRiveAnimation from '@/hooks/use-rive-animation';
import useWindowSize from '@/hooks/use-window-size';

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
  const { width } = useWindowSize();
  const isMobile = (width ?? 0) <= 768;

  return (
    <div className="absolute inset-0 h-full w-full">
      <span className="absolute left-0 top-0 -z-10 h-full w-px" ref={wrapperRef} aria-hidden />
      <div
        className={clsx('relative h-full w-full [&_canvas]:!h-full [&_canvas]:!w-full', className, {
          'pointer-events-none': isMobile,
        })}
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
