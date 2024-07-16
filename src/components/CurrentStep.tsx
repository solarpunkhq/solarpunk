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
  const redirectToEdit = () => {
    window.location.href = '/dashboard/edit'
  }
  return (
    <div className="mt-16 flex h-full w-full flex-col gap-4 p-4 md:w-1/2 md:p-0">
      <Stepper initialStep={step} steps={steps}>
        {steps.map(({ label }, index) => {
          return <Step key={label} label={label}></Step>
        })}
      </Stepper>
      {step === 0 && <AdditionalDetailsForm email={email} />}
      {step === 1 && (
        <div className="mt-16 flex items-center justify-center">
          We are currently reviewing your application.
        </div>
      )}
      <div className="mt-4 text-center text-sm text-gray-500">
        Want to edit your acres submission?{' '}
        <button onClick={redirectToEdit} className="underline">
          Click here
        </button>
      </div>
    </div>
  )
}
