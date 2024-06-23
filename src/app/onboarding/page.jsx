'use client'
import dynamic from 'next/dynamic'
import { Button } from '@/components/Button'
import { useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import { CircleCheck, LoaderCircle, Mail } from 'lucide-react'
import { useToast } from '@/components/ui/use-toast'

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { createClient } from '@/lib/supabase/client'
import { emailRegex, nameRegex } from '@/lib/form-validations'

const Map = dynamic(() => import('../../components/Map'), {
  ssr: false,
})

function formatCurrency(amount) {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(amount)

  return `${formatted}/yr`
}

function calculatePriceBasedOnArea(areaSqm) {
  if (areaSqm > 200000) {
    return 250000
  }

  if (areaSqm > 150000) {
    return 200000
  }

  if (areaSqm > 100000) {
    return 150000
  }

  if (areaSqm > 50000) {
    return 100000
  }

  if (areaSqm > 0) {
    return 50000
  }
}

function calculateTotalPrice(areas) {
  return areas.reduce((total, area) => {
    return total + calculatePriceBasedOnArea(area.areaSqm)
  }, 0)
}

export default function Contact() {
  const supabase = createClient()
  const router = useRouter()
  const { toast } = useToast()

  const [isPostSignUpDialogOpen, setIsPostSignUpDialogOpen] = useState(false)
  const [outlinedAreas, setOutlinedAreas] = useState([])

  useEffect(() => {
    supabase.auth.getSession().then((data) => {
      if (data.data.session) {
        router.push('/home')
      }
    })
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      name: '',
    },
  })

  const onSubmit = async (data) => {
    try {
      if (outlinedAreas.length === 0) {
        return toast({
          title: 'No acres was chosen',
          description: 'Please mark your acres on the map on the left',
        })
      }

      setIsPostSignUpDialogOpen(true)

      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          name: data.name,
          areas: outlinedAreas,
        }),
      })

      if (!response.ok) {
        throw new Error(errorData.message || 'Something went wrong')
      }

      await response.json()

      reset()
      setOutlinedAreas([])
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description:
          'An error occurred. Please try again or contact us at https://cal.com/team/solarpunk',
      })
      reset()
      setOutlinedAreas([])
      setIsPostSignUpDialogOpen(false)
    }
  }

  const handleDialogClose = () => {
    router.push('mailto:')
    setIsPostSignUpDialogOpen(false)
  }

  return (
    <>
      <div className="mb-[200px] mt-12 ">
        <div className="flex px-8">
          <Map setOutlinedAreas={setOutlinedAreas} />
          <aside className="rounded-r-4xl w-full max-w-96 border border-l-0 bg-white p-8">
            <div className="text-center">
              <h1 className="font-display text-5xl">Mark your acres</h1>
              <h2 className="underline">
                Use the map to outline your territory
              </h2>
              <div className="relative overflow-x-auto">
                <table className="mt-4 w-full border text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
                  <thead className="bg-gray-50 text-xs uppercase text-gray-700 ">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Area
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Revenue/yr
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {outlinedAreas.map((area, index) => (
                      <tr className="border-b bg-white" key={index + area}>
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 "
                        >
                          Area {'0' + (index + 1)}
                        </th>
                        <td className="px-6 py-4">
                          {formatCurrency(
                            calculatePriceBasedOnArea(area.areaSqm)
                          )}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-gray-50">
                      <th
                        scope="row"
                        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 "
                      >
                        Total Estimated
                      </th>
                      <td className="px-6 py-4">
                        {formatCurrency(calculateTotalPrice(outlinedAreas))}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col">
                  <input
                    {...register('name', {
                      required: {
                        value: true,
                        message: 'Enter your name',
                      },
                      pattern: {
                        value: nameRegex,
                        message:
                          "Name can't contain numbers or special characters.",
                      },
                    })}
                    className="mt-4 w-full rounded border px-4"
                    placeholder="Full name"
                  />
                  {!!errors.name && (
                    <p className="text-start text-red-600">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col">
                  <input
                    {...register('email', {
                      required: {
                        value: true,
                        message: 'Enter an email address',
                      },
                      pattern: {
                        value: emailRegex,
                        message: 'Please enter a valid email.',
                      },
                    })}
                    className="mt-4 w-full rounded border px-4"
                    placeholder="Email"
                  />
                  {!!errors.email && (
                    <p className="text-start text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="mx-auto mt-4 disabled:opacity-60"
                  disabled={isSubmitting}
                >
                  Submit Info
                </Button>
              </form>
            </div>
          </aside>
        </div>
      </div>
      <Dialog
        open={isPostSignUpDialogOpen}
        onOpenChange={setIsPostSignUpDialogOpen}
      >
        {isSubmitting ? (
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex justify-center">
                Hold on tight while we process your information
              </DialogTitle>
              <DialogDescription className="flex justify-center">
                <LoaderCircle className="animate-spin text-black" />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        ) : (
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                <div className="flex flex-col items-center gap-2">
                  <CircleCheck size={50} />
                  <h3 className="text-xl">
                    Thank you for submitting your acres!
                  </h3>
                </div>
              </DialogTitle>
              <DialogDescription className="text-center text-lg">
                We will be in touch with you within the next 24 hours
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button className="mx-auto" onClick={handleDialogClose}>
                <div className="flex items-center gap-2">
                  <Mail size={20} />
                  <span>Check my email</span>
                </div>
              </Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </>
  )
}
