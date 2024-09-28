'use client';

import React, { ReactNode, useMemo, useRef } from 'react';

import AnimatedIconItem from './animated-icon-item';
import AnimatedTextItem from './animated-text-item';

type ItemType = 'text' | 'solar-animation';

interface AnimatedTextProps {
  children: ReactNode;
}

function AnimatedText({ children }: AnimatedTextProps) {
  const sectionRef = useRef(null);

  const items = useMemo(() => {
    return React.Children.toArray(children).flatMap(
      (
        child,
      ): {
        content: ReactNode;
        type: ItemType;
      }[] => {
        if (typeof child === 'string') {
          return child.split(/\s+/).map((word) => ({ content: word, type: 'text' as ItemType }));
        } else if (React.isValidElement(child)) {
          if (child.type === 'span' && child.props['data-type'] === 'solar-animation') {
            return [{ content: child.props, type: 'solar-animation' as ItemType }];
          }
        }

        return [];
      },
    );
  }, [children]);

  const totalItems = items.length;

  return (
    <div
      className="container relative max-w-[1216px] font-title text-60 font-semibold leading-[1.48] tracking-tighter text-gray-20 home-lg:max-w-[960px] home-lg:text-51 home-md:max-w-[704px] home-md:text-44 home-sm:text-30"
      ref={sectionRef}
    >
      {items.map(({ content, type }, index) => {
        return (
          <React.Fragment key={index}>
            {type === 'solar-animation' ? (
              <AnimatedIconItem
                index={index}
                content={content}
                totalItems={totalItems + 1}
                sectionRef={sectionRef}
              />
            ) : (
              <AnimatedTextItem
                index={index}
                content={content}
                totalItems={totalItems}
                sectionRef={sectionRef}
              />
            )}
            {index < totalItems - 1 && type === 'text' && ' '}
          </React.Fragment>
        );
      })}
      <span className="font-title text-60 font-semibold leading-[1.48] tracking-tighter opacity-45 home-lg:max-w-[960px] home-lg:text-51 home-md:max-w-[704px] home-md:text-44 home-sm:text-30">
        {' '}
        without sacrificing arable land.
      </span>
    </div>
  );
}

export default AnimatedText;
