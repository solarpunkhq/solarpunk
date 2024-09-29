'use client';

import { LogOut } from 'lucide-react';

import Button from '@/components/shared/button';
import Logo from '@/components/shared/logo';
import { Step, type StepItem, Stepper } from '@/components/shared/stepper';

const steps = [
  { label: 'Details' },
  { label: 'In Review' },
  { label: 'Planning' },
  { label: 'Deployment' },
] satisfies StepItem[];

function CurrentStep({ step }: { step: number }) {
  return (
    <div className="flex h-full w-full flex-col items-start justify-start gap-4 p-4 md:p-0">
      <div className="mt-8 flex w-full items-center justify-between">
        <div
          className="ml-4 mt-2 flex cursor-pointer items-center"
          onClick={() => (window.location.href = '/')}
        >
          <Logo className="h-8" />
        </div>
        <div className="mr-8 h-6 w-6">
          <Button
            size="home-sm"
            className="overflow-hidden"
            onClick={() => (window.location.href = '/logout')}
          >
            <LogOut className="h-6 w-6" />
          </Button>
        </div>
      </div>
      <div className="flex h-full flex-col items-center justify-center self-center md:w-1/2">
        <Stepper initialStep={step} steps={steps}>
          {steps.map(({ label }, index) => {
            return <Step key={label} label={label} />;
          })}
        </Stepper>
        {step === 1 && (
          <div className="mt-8 flex items-center justify-center">
            We are currently reviewing your application.
          </div>
        )}
      </div>
    </div>
  );
}

export default CurrentStep;
