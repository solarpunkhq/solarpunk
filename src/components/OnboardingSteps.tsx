"use client"
import { DetailsForm } from "@/components/DetailsForm";
import { Step, type StepItem, Stepper, useStepper } from "@/components/stepper";
import { Button } from "@/components/ui/button";

const steps = [
	{ label: 'Details' },
  { label: 'In Review' },
  { label: 'Planning' },
  { label: 'Deployment' },
] satisfies StepItem[];

export default function OnboardingSteps({currentStep ,email }:{currentStep:number ,email:string}) {
	return (
		<div className="flex h-full lg:w-1/2 justify-center flex-col gap-4">
			<Stepper initialStep={currentStep} steps={steps}>
				{steps.map((stepProps, stepidx) => {
					return (
						<Step key={stepProps.label} {...stepProps} >
							{stepidx === 0 && <DetailsForm email={email} />}
              {stepidx === 1 && (
                <div className="mt-16 flex items-center justify-center">
                  We are currently reviewing your application.
                </div>
              )}
						</Step>
					);
				})}
				<Footer />
			</Stepper>
		</div>
	);
}

const Footer = () => {
	const {
		nextStep,
		prevStep,
		resetSteps,
		hasCompletedAllSteps,
		isLastStep,
		isOptionalStep,
		isDisabledStep,
	} = useStepper();
	return (
		<>
			{/* {hasCompletedAllSteps && (
				<div className="h-40 flex items-center justify-center my-2 border bg-secondary text-primary rounded-md">
					<h1 className="text-xl">Woohoo! All steps completed! 🎉</h1>
				</div>
			)} */}
			{/* <div className="w-full flex justify-end gap-2">
				{hasCompletedAllSteps ? (
					<Button size="sm" onClick={resetSteps}>
						Reset
					</Button>
				) : (
					<>
						<Button
							disabled={isDisabledStep}
							onClick={prevStep}
							size="sm"
							variant="secondary"
						>
							Prev
						</Button>
						<Button size="sm" onClick={nextStep}>
							{isLastStep ? "Finish" : isOptionalStep ? "Skip" : "Next"}
						</Button>
					</>
				)}
			</div> */}
		</>
	);
};