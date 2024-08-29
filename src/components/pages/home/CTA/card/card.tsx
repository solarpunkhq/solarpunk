import { ReactNode } from 'react';

import clsx from 'clsx';

function Card({
  children,
  className = 'sm:min-h-[490px]',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        'relative flex aspect-[1.192] w-full max-w-[752px] flex-col justify-between overflow-hidden rounded-2xl p-8 xl:aspect-[0.784] lg:p-7 md:aspect-[1.436] sm:aspect-auto  sm:p-6',
        className,
      )}
    >
      {children}
    </div>
  );
}

export default Card;
