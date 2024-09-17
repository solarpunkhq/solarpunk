'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { Alignment, Fit, Layout, useStateMachineInput } from '@rive-app/react-canvas';
import clsx from 'clsx';

import RiveAnimation from '@/components/shared/rive-animation';

import useRiveAnimation from '@/hooks/use-rive-animation';

function mergeRefs<T>(...inputRefs: React.Ref<T>[]) {
  return function mergedRefs(ref: T | null) {
    for (const inputRef of inputRefs) {
      if (typeof inputRef === 'function') {
        inputRef(ref);
      } else if (inputRef) {
        (inputRef as React.MutableRefObject<T | null>).current = ref;
      }
    }
  };
}

function IconAnimation({ className, artboard }: { className: string; artboard: string }) {
  const { riveInstance, wrapperRef, animationRef, isIntersecting, setRiveInstance } =
    useRiveAnimation({});

  const { ref: stateMachineRef, inView } = useInView({
    threshold: 1,
  });

  const icon = useStateMachineInput(riveInstance, 'SM', 'icon');

  const riveAnimationProps = {
    src: '/animations/pages/home/farm/icon.riv',
    autoplay: false,
    stateMachines: 'SM',
    artboard,
    layout: new Layout({
      fit: Fit['Fill'],
      alignment: Alignment['TopCenter'],
    }),
    onLoad: () => {
      riveInstance?.resizeDrawingSurfaceToCanvas();
    },
  };

  useEffect(() => {
    if (inView) {
      icon?.fire();
    }
  }, [icon, inView]);

  return (
    <>
      <div className={clsx(className)} ref={wrapperRef}>
        <span
          className="absolute left-0 top-0 -z-10 h-full w-px"
          ref={mergeRefs(stateMachineRef, wrapperRef)}
          aria-hidden
        />
        <div
          className="relative h-full w-full [&_canvas]:!h-full [&_canvas]:!w-full"
          ref={animationRef}
        >
          {isIntersecting ? (
            <RiveAnimation setRiveInstance={setRiveInstance} {...riveAnimationProps} />
          ) : null}
        </div>
      </div>
    </>
  );
}

export default IconAnimation;
