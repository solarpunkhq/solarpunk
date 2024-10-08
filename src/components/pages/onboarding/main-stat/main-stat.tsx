'use client';

import AnimatedNumbers from 'react-animated-numbers';

function MainStat({ label, value, unit }: { label: string; value: number; unit: string }) {
  return (
    <div className="space-y-6 text-center">
      <h3 className="font-title text-22 text-gray-30">{label}</h3>
      <p className="flex items-center justify-center text-30 font-bold leading-7 text-gray-20">
        <span className="flex items-center justify-center">
          $
          <AnimatedNumbers
            transitions={(index) => ({
              type: 'spring',
              duration: 1.5 + index * 0.2,
            })}
            animateToNumber={parseInt(value.toFixed(0))}
            includeComma
          />
        </span>
        <span className="ml-1 text-26 font-medium text-gray-40">{unit}</span>
      </p>
    </div>
  );
}

export default MainStat;
