'use client'
import * as React from 'react'
import { HorizontalStep } from './horizontal-step'
import { useStepper } from './use-stepper'
import { VerticalStep } from './vertical-step'

const Step = React.forwardRef((props, ref) => {
  const {
    children,
    description,
    icon,
    state,
    checkIcon,
    errorIcon,
    index,
    isCompletedStep,
    isCurrentStep,
    isLastStep,
    isKeepError,
    label,
    onClickStep,
  } = props

  const { isVertical, isError, isLoading, clickable } = useStepper()

  const hasVisited = isCurrentStep || isCompletedStep

  const sharedProps = {
    isLastStep,
    isCompletedStep,
    isCurrentStep,
    index,
    isError,
    isLoading,
    clickable,
    label,
    description,
    hasVisited,
    icon,
    isKeepError,
    checkIcon,
    state,
    errorIcon,
    onClickStep,
  }

  const renderStep = () => {
    switch (isVertical) {
      case true:
        return (
          <VerticalStep ref={ref} {...sharedProps}>
            {children}
          </VerticalStep>
        )
      default:
        return <HorizontalStep ref={ref} {...sharedProps} />
    }
  }

  return renderStep()
})

export { Step }
