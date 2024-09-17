import { Dispatch, ForwardRefRenderFunction, SetStateAction, useEffect } from 'react';

import { Rive, UseRiveParameters, useRive } from '@rive-app/react-canvas';

import { ClassName } from '@/types/classname';

type RiveAnimationProps = ClassName &
  UseRiveParameters & {
    setRiveInstance: Dispatch<SetStateAction<Rive | null>>;
  };

/* eslint-disable react/function-component-definition */
const RiveAnimation: ForwardRefRenderFunction<Rive | null, RiveAnimationProps> = ({
  className,
  setRiveInstance,
  ...riveParameters
}) => {
  const { rive, RiveComponent } = useRive(riveParameters);

  useEffect(() => {
    setRiveInstance(rive);
  }, [rive, setRiveInstance]);

  return <RiveComponent className={className} />;
};

export default RiveAnimation;
