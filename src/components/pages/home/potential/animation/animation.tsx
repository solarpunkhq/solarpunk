'use client';

import { useEffect } from 'react';

import {
  Alignment,
  Fit,
  Layout, // Rive,
  useRive,
  useStateMachineInput,
} from '@rive-app/react-canvas';
import clsx from 'clsx';

function Animation({ className, slideNumber }: { className: string; slideNumber: number }) {
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
