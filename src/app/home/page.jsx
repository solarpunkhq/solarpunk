'use client'
import { Step, Stepper } from '@/components/ui/stepper'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { DetailsForm } from './DetailsForm'
import { InReview } from './InReview'
import { LoaderCircle } from 'lucide-react'

const steps = [
  { id: 1, value: 'details', label: 'Details' },
  { id: 2, value: 'inReview', label: 'In Review' },
  { id: 3, value: 'planning', label: 'Planning' },
  { id: 4, value: 'deployment', label: 'Deployment' },
]

export default function HomePage() {
  const router = useRouter()
  const [userName, setUserName] = useState('')
  const [initialStep, setInitialStep] = useState(null)

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const response = await fetch('/api/auth/profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if (!response.ok) {
          throw new Error(errorData.message || 'Something went wrong')
        }

        const profileData = await response.json()
        setInitialStep(profileData.data.onboarding_step)
        setUserName(profileData.data.name)
      } catch (error) {
        router.push('/onboarding')
      }
    }

    getUserProfile()
  }, [])

  return (
    <div className="flex min-h-screen flex-col gap-8 p-12">
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-xl font-bold">Welcome {userName}!</h3>
        <p className="text-xl">
          Please follow the steps to complete onboarding.
        </p>
      </div>
      {userName && (
        <Stepper variant={'line'} initialStep={initialStep} steps={steps}>
          {steps.map((stepProps, index) => {
            return (
              <Step key={stepProps.label} {...stepProps}>
                {stepProps.value === 'details' && <DetailsForm />}

                {stepProps.value === 'inReview' && <InReview />}

                {/* <div className="my-2 flex h-40 items-center justify-center rounded-md border bg-secondary text-primary">
                <h1 className="text-xl">Step {index + 1}</h1>
              </div> */}
              </Step>
            )
          })}
        </Stepper>
      )}
      {!userName && (
        <div className="flex w-full justify-center">
          <LoaderCircle
            size={60}
            className="animate-spin text-center text-black"
          />
        </div>
      )}
    </div>
  )
}
