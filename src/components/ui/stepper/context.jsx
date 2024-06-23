'use client'
import * as React from 'react'

const StepperContext = React.createContext({
  steps: [],
  activeStep: 0,
  initialStep: 0,
  nextStep: () => {},
  prevStep: () => {},
  resetSteps: () => {},
  setStep: () => {},
})

const StepperProvider = ({ value, children }) => {
  const isError = value.state === 'error'
  const isLoading = value.state === 'loading'

  const [activeStep, setActiveStep] = React.useState(value.initialStep)

  const nextStep = () => {
    setActiveStep((prev) => prev + 1)
  }

  const prevStep = () => {
    setActiveStep((prev) => prev - 1)
  }

  const resetSteps = () => {
    setActiveStep(value.initialStep)
  }

  const setStep = (step) => {
    setActiveStep(step)
  }

  return (
    <StepperContext.Provider
      value={{
        ...value,
        isError,
        isLoading,
        activeStep,
        nextStep,
        prevStep,
        resetSteps,
        setStep,
      }}
    >
      {children}
    </StepperContext.Provider>
  )
}

export { StepperContext, StepperProvider }
