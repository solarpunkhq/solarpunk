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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Textarea } from '@/components/ui/textarea'
import { useStepper } from '@/components/stepper'

const formSchema = z.object({
  phone: z.string().min(7).max(20),
  financeOption: z.enum(['self', 'loan', 'solarpunk']),
  about: z.string().max(1000),
})

export const DetailsForm = ({ email }: { email: string }) => {
  const { nextStep } = useStepper()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: '',
      financeOption: 'self',
      about: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try{

      console.log(values)
      const res = await fetch('/api/onboarding/details', {
        method: 'POST',
        body: JSON.stringify(values),
      })
      if (res.ok){
        nextStep()
      }
    }catch(e){
      console.log(e)
    }
  }

  return (
    <div className='mt-8'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="about"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tell About your farm</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a bit more about your farm"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="financeOption"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Finance Option</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="self" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Self Finance
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="loan" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Finance through loan
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="solarpunk" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {' '}
                        Financed by Solarpunk{' '}
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}
