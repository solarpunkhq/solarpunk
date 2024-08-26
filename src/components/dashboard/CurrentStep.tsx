'use client'

import { Step, Stepper, useStepper, type StepItem } from '@/components/stepper'
import { AdditionalDetailsForm } from '../AdditionalDetailsForm'
import { Logo } from '../Logo'
import { Button } from '../ui/button'
import { LogOut } from 'lucide-react'

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
    <div className="flex h-full w-full flex-col items-start justify-start gap-4 p-4 md:p-0">
      <div className="mt-4 flex w-full items-center justify-between">
        <div
          className="ml-4 flex cursor-pointer items-center"
          onClick={() => (window.location.href = '/')}
        >
          <Logo filled={true} className="h-8" />
        </div>
        <div className="mr-4 h-6 w-6">
          <Button
            variant="ghost"
            size="icon"
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
            return <Step key={label} label={label}></Step>
          })}
        </Stepper>
        {step === 1 && (
          <div className="mt-8 flex items-center justify-center">
            We are currently reviewing your application.
          </div>
        )}
      </div>
    </div>
  )
}
