import { ReactNode } from 'react';

function Card({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex aspect-[1.27] w-full max-w-[752px] flex-col justify-between rounded-2xl bg-primary-green p-8 lg:aspect-[0.784] lg:p-7 md:aspect-[1.43] sm:aspect-auto sm:min-h-[490px] sm:p-6">
      {children}
    </div>
  );
}

export default Card;
