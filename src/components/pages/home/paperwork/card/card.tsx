import { ReactNode } from 'react';

import clsx from 'clsx';

function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={clsx(
        'relative flex aspect-[1.27] w-full max-w-[752px] flex-col justify-between overflow-hidden rounded-2xl p-8 [transform:translateZ(0)] home-lg:aspect-[0.784] home-lg:p-7 home-md:aspect-[1.43] home-sm:aspect-auto home-sm:min-h-[490px] home-sm:p-6',
        className,
      )}
    >
      {children}
    </div>
  );
}

export default Card;
