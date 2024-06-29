'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from './ui/textarea'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useStepper } from './stepper'
import { useRouter } from 'next/navigation'

const formSchema = z.object({
  phone_number: z.string().min(10, {
    message: 'Phone number must be atleast 10 characters.',
  }),
  about_farm: z.string().optional(),
  finance_option: z.enum(
    ['self_financed', 'loan_self_financed', 'solarpunk_financed'],
    {
      message: 'Please select a finance option.',
    }
  ),
})

export function AdditionalDetailsForm({ email }: { email: string }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const router = useRouter()

  const { nextStep } = useStepper()

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch('/api/submit_additional_details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          ...values,
        }),
      })

      if (response.ok) {
        const data = await response.json()
        console.log('Response data:', data)
        nextStep()
        router.refresh()
      } else {
        console.error('Error:', response.statusText)
        // Handle error response
      }
    } catch (error) {
      console.error('Fetch error:', error)
      // Handle network or other errors
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="md:space-y-8">
        <FormField
          control={form.control}
          name="phone_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone number</FormLabel>
              <FormControl>
                <Input placeholder="(555) 555-1234" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="about_farm"
          render={({ field }) => (
            <FormItem className="mt-4 md:mt-4">
              <FormLabel>Tell us more about your farm</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Some details about your farm"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="finance_option"
          render={({ field }) => (
            <FormItem className="mt-4 space-y-3 md:mt-4">
              <FormLabel>Preferred Finance Option</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="self_financed" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Financing Myself
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="loan_self_financed" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Financing with a loan for myself
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="solarpunk_financed" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Financed by Solarpunk
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-4 flex items-center justify-center">
          <Button type="submit" className="mt-4">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  )
}
