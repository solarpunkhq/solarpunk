import { Button } from '@/components/Button'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useStepper } from '@/components/ui/stepper'
import { LoaderCircle } from 'lucide-react'
import { useForm, Controller } from 'react-hook-form'

export function DetailsForm() {
  const { nextStep } = useStepper()

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      acresInfo: '',
      phoneNumber: '',
      financingOption: '',
    },
  })

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/onboarding', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber: data.phoneNumber,
          acresInfo: data.acresInfo,
          financingOption: data.financingOption,
        }),
      })

      if (!response.ok) {
        throw new Error(errorData.message || 'Something went wrong')
      }

      await response.json()
      nextStep()
      reset()
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description:
          'An error occurred. Please try again or contact us at https://cal.com/team/solarpunk',
      })
      reset()
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label>Tell us more about your farm</label>
          <textarea
            {...register('acresInfo', {
              required: {
                value: true,
                message: 'Enter more information about your acres',
              },
            })}
            className="w-full rounded border px-4"
            placeholder="Any additional notes or concerns..."
          />
          {!!errors.acresInfo && (
            <p className="text-start text-red-600">
              {errors.acresInfo.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label>Phone number</label>
          <input
            {...register('phoneNumber', {
              required: {
                value: true,
                message: 'Enter your phone number',
              },
            })}
            className="w-full rounded border px-4"
            placeholder="+1234567890"
            type="tel"
          />
          {!!errors.phoneNumber && (
            <p className="text-start text-red-600">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label>Financing options</label>
          <Controller
            name="financingOption"
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Select financing option',
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <RadioGroup
                  className="flex gap-4"
                  onValueChange={onChange}
                  defaultValue={value}
                  onBlur={onBlur}
                >
                  <div className="flex items-center space-x-2 rounded-md border p-5">
                    <RadioGroupItem
                      value="financing_myself"
                      id="financing_myself"
                    />
                    <Label htmlFor="financing_myself">Financing myself</Label>
                  </div>
                  <div className="flex items-center space-x-2 rounded-md border p-5">
                    <RadioGroupItem
                      value="financing_loan_myself"
                      id="financing_loan_myself"
                    />
                    <Label htmlFor="financing_loan_myself">
                      Financing with a loan for myself
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 rounded-md border p-5">
                    <RadioGroupItem
                      value="financing_solarpunk"
                      id="financing_solarpunk"
                    />
                    <Label htmlFor="financing_solarpunk">
                      Financed by Solarpunk
                    </Label>
                  </div>
                </RadioGroup>
                {!!errors.financingOption && (
                  <p className="text-start text-red-600">
                    {errors.financingOption.message}
                  </p>
                )}
              </>
            )}
          />
        </div>
        <div className="flex justify-center">
          <Button
            className="disabled:opacity-60"
            disabled={isSubmitting}
            size="sm"
            type="submit"
          >
            {isSubmitting ? (
              <LoaderCircle className="animate-spin text-center text-white" />
            ) : (
              'Submit'
            )}
          </Button>
        </div>
      </div>
    </form>
  )
}
