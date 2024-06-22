'use client'

import { Step, Stepper, useStepper, type StepItem } from '@/components/stepper'
import { AdditionalDetailsForm } from './AdditionalDetailsForm'

const steps = [
  { label: 'Details' },
  { label: 'In Review' },
  { label: 'Planning' },
  { label: 'Deployment' },
] satisfies StepItem[]

export default function CurrentStep({
  step,
  email,
}: {
  step: number
  email: string
}) {
  return (
    <div className="mt-16 flex h-full w-1/2 flex-col gap-4">
      <Stepper initialStep={step} steps={steps}>
        {steps.map(({ label }, index) => {
          return (
            <Step key={label} label={label}>
              {step === 0 && <AdditionalDetailsForm email={email} />}
              {step === 1 && (
                <div className="mt-16 flex items-center justify-center">
                  We are currently reviewing your application.
                </div>
              )}
            </Step>
          )
        })}
      </Stepper>
    </div>
  )
}
