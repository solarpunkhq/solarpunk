'use client';

import AnimatedNumbers from 'react-animated-numbers';

function StatItem({
  icon: Icon,
  label,
  value,
  unit,
  blur = false,
}: {
  icon: any;
  label: string;
  value: number;
  unit: string;
  blur?: boolean;
}) {
  return (
    <div className="flex items-center space-x-4">
      <div>
        <div className="mb-2 flex items-center">
          <Icon className="-ml-1 h-6  w-6 rounded-full bg-gray-30 p-1 text-primary-green" />
          <h3 className="ml-1 text-sm font-semibold text-gray-30">{label}</h3>
        </div>
        <p className="flex items-center text-20 font-bold text-gray-20">
          <AnimatedNumbers
            transitions={(index) => ({
              type: 'spring',
              duration: 1.5 + index * 0.2,
            })}
            animateToNumber={value}
            className={blur ? 'blur' : ''}
            includeComma
          />
          <span className="ml-1 mt-[2px] text-16 font-medium text-gray-40">{unit}</span>
        </p>
      </div>
    </div>
  );
}

export default StatItem;
