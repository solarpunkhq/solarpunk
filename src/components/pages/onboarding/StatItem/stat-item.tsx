'use client';

import AnimatedNumbers from 'react-animated-numbers';

function StatItem({
  icon: Icon,
  label,
  value,
  unit,
}: {
  icon: any;
  label: string;
  value: number;
  unit: string;
}) {
  return (
    <div className="flex items-center space-x-4">
      <div>
        <div className="flex items-center">
          <Icon className="h-4 w-4 text-gray-30" />
          <h3 className="text-sm ml-1 font-semibold text-gray-30">{label}</h3>
        </div>
        <p className="flex items-center text-20 font-bold text-gray-20">
          <AnimatedNumbers
            transitions={(index) => ({
              type: 'spring',
              duration: 1.5 + index * 0.2,
            })}
            animateToNumber={value}
            includeComma
          />
          <span className="ml-1 text-16 font-medium text-gray-40">{unit}</span>
        </p>
      </div>
    </div>
  );
}

export default StatItem;
