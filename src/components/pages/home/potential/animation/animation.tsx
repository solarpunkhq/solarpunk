'use client';

import { useEffect } from 'react';

import { Alignment, Fit, Layout, useRive, useStateMachineInput } from '@rive-app/react-canvas';
import clsx from 'clsx';

function Animation({
  className,
  slideNumber,
  isPlaying,
}: {
  className: string;
  slideNumber: number;
  isPlaying: boolean;
}) {
  const riveAnimationProps = {
    src: '/animations/pages/home/potential/slider.riv',
    autoplay: true,
    stateMachines: 'SM',
    layout: new Layout({
      fit: Fit['Cover'],
      alignment: Alignment['Center'],
    }),
  };

  const { rive, RiveComponent } = useRive(riveAnimationProps);

  const slideInput = useStateMachineInput(rive, 'SM', 'slide');

  useEffect(() => {
    if (isPlaying) {
      rive?.play();
    } else {
      rive?.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (slideInput) {
      slideInput.value = slideNumber;
    }
  }, [slideNumber, slideInput]);

  return (
    <>
      <div className={clsx(className)}>
        <div className="relative h-full w-full [&_canvas]:!h-full [&_canvas]:!w-full">
          <RiveComponent />
        </div>
      </div>
    </>
  );
}

export default Animation;
