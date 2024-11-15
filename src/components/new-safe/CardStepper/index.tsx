import React from 'react'
import { CardContent } from '@mui/material'
import type { TxStepperProps } from './useCardStepper'
import { useCardStepper } from './useCardStepper'

export function CardStepper<StepperData>(props: TxStepperProps<StepperData>) {
  const { activeStep, onSubmit, onBack, stepData, setStep, setStepData } = useCardStepper<StepperData>(props)
  const { steps } = props
  const currentStep = steps[activeStep]

  return (
    <CardContent className="pixel-card !p-12">
      {currentStep.render(stepData, onSubmit, onBack, setStep, setStepData)}
    </CardContent>
  )
}
