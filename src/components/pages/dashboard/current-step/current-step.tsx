'use client';

import { useTranslations } from 'next-intl';

import { Check } from 'lucide-react';

import { Badge } from '@/components/ui/badge';

function CurrentStep({ currentStep }: { currentStep: number }) {
  const t = useTranslations('LifecyclePage');

  const steps: Step[] = [
    {
      title: t('details_title'),
      subtitle: t('details_subtitle'),
    },
    {
      title: t('in_review_title'),
      subtitle: t('in_review_subtitle'),
    },
    {
      title: t('planning_title'),
      subtitle: t('planning_subtitle'),
    },
    {
      title: t('deployment_title'),
      subtitle: t('deployment_subtitle'),
    },
  ];

  interface Step {
    title: string;
    subtitle: string;
    completedDate?: string;
  }

  return (
    <div className="w-full">
      <ol className="relative">
        {steps.map((step, index) => (
          <li key={index} className="relative mb-6 ml-6 flex items-start">
            <div className="absolute -left-4 flex flex-col items-center">
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full ${
                  index <= currentStep
                    ? 'bg-primary-green'
                    : 'border-2 border-dashed border-gray-60 bg-primary-offwhite !ring-0'
                }`}
              >
                {index <= currentStep ? <Check className="h-5 w-5 text-black" /> : null}
              </span>
              {index !== steps.length - 1 && <span className="h-20 w-px bg-gray-40" />}
            </div>
            <div className="ml-8">
              <div className="mb-1 flex items-center">
                <h3 className="mr-2 text-base font-semibold text-gray-8">{step.title}</h3>
                {/* <Badge variant={step.completedDate ? 'default' : 'secondary'}>
                  {step.completedDate || 'Pending'}
                </Badge> */}
              </div>
              <p className="mb-4 text-sm font-normal text-gray-30">{step.subtitle}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default CurrentStep;
