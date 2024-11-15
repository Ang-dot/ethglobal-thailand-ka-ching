'use client'

import React from "react";

const ProgressSteps = ({ currentStep }) => {
  const steps = [
    { number: 1, label: 'Set Up The Basics' },
    { number: 2, label: 'Signers & Confirmation' },
    { number: 3, label: 'Review' },
  ]

  return (
    <div className="max-w-3xl mx-auto mb-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div className="flex items-center gap-x-4">
              <span
                className={`h-8 w-8 rounded-full ${
                  currentStep >= step.number ? 'bg-[#909B0E]' : 'bg-gray-300'
                } text-white flex items-center justify-center`}
              >
                {currentStep > step.number ? '✓' : step.number}
              </span>
              <span className={`${currentStep >= step.number ? 'text-[#909B0E] font-medium' : 'text-gray-500'}`}>
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && <div className="hidden sm:block flex-1 mx-4 border-t-2 border-gray-300"></div>}

            {index < steps.length - 1 && (
              <div className="block sm:hidden ml-4 border-l-2 border-gray-300 h-6 sm:h-10"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default ProgressSteps
