import { ReactNode } from 'react';

import { LazyMotion, domAnimation, m } from 'framer-motion';

import { UseGetTextOpacity } from '@/hooks/use-get-animation';

interface ItemProps {
  content: ReactNode;
  index: number;
  totalItems: number;
  className?: string;
  sectionRef: React.RefObject<HTMLDivElement>;
}

function AnimatedTextItem({ content, index, totalItems, sectionRef }: ItemProps) {
  return (
    <LazyMotion features={domAnimation}>
      <m.span
        className="relative transition-opacity duration-500"
        style={{
          opacity: UseGetTextOpacity(index, totalItems, sectionRef),
        }}
      >
        {content}
      </m.span>
    </LazyMotion>
  );
}

export default AnimatedTextItem;
