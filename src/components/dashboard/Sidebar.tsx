'use client'

import { useState } from 'react'
import { Button } from '../ui/button'
import Schedule from './Schedule'
import { Radio, RadioGroup } from '@headlessui/react'
import { CheckCircle, CircleAlert, Loader2 } from 'lucide-react'
import { Textarea } from '../ui/textarea'
import { Input } from '../ui/input'

export default function DashboardSidebar({ email }: { email: string }) {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [financeOption, setFinanceOption] = useState('self_financed')
  const [deploymentType, setDeploymentType] = useState(
    'open_space_photovoltaics'
  )
  const [aboutLand, setAboutLand] = useState('')

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const submitForm = async () => {
    setLoading(true)
    if (phoneNumber === '') {
      setError('Phone number is required')
      setLoading(false)
      return
    }
    if (financeOption === '') {
      setError('Finance option is required')
      setLoading(false)
      return
    }
    if (deploymentType === '') {
      setError('Deployment type is required')
      setLoading(false)
      return
    }
    try {
      const response = await fetch('/api/submit_additional_details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          phone_number: phoneNumber,
          about_farm: aboutLand,
          finance_option: financeOption,
          deployment_type: deploymentType,
        }),
      })

      if (response.ok) {
        const data = await response.json()
        alert('updated')
        setLoading(false)
      } else {
        console.error('Error:', response.statusText)
        setLoading(false)
      }
    } catch (error) {
      console.error('Fetch error:', error)
      setLoading(false)
    }
  }

  return (
    <div className="relative mb-4 flex-col overflow-x-auto text-sm">
      <div className="mb-4">
        Please submit additional information about your land. This information
        will help us process your application faster.
      </div>
      <Schedule />
      <div className="my-4 text-2xl font-semibold">Personal Details</div>
      <div className="ml-1 text-sm font-semibold">Phone Number</div>
      <Input
        placeholder="Your phone number"
        className="!mb-2 !ml-1 !w-[97%] !border-gray-300"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <div className="ml-1 mt-2 text-sm font-semibold">Land Information</div>
      <Textarea
        placeholder="Any additional details about your land you want us to know"
        className="!ml-1 !w-[97%] !border-gray-300"
        value={aboutLand}
        onChange={(e) => setAboutLand(e.target.value)}
      />
      <div className="my-4 text-2xl font-semibold">Deployment Type</div>
      <RadioGroup
        value={deploymentType}
        onChange={setDeploymentType}
        className="mt-6 flex flex-col gap-2"
      >
        <Radio
          key={0}
          value={'open_space_photovoltaics'}
          aria-label="Open Space Photovoltaics"
          aria-description="Traditional solar deployment on acres that will not be used for agriculture"
          className="group relative flex cursor-pointer rounded-lg border border-gray-300 bg-white p-4 shadow-sm focus:outline-none data-[focus]:border-black data-[focus]:ring-2 data-[focus]:ring-black"
        >
          <span className="flex w-full flex-1">
            <span className="flex w-full flex-col ">
              <img
                src="/photovoltaics.jpg"
                alt="Photovoltaics"
                className="mb-2 w-full"
              />
              <span className="block text-sm font-medium text-gray-900">
                Open Space Photovoltaics
              </span>
              <span className="mt-1 flex items-center text-sm text-gray-500">
                Traditional solar deployment on acres that will not be used for
                agriculture
              </span>
              <span className="mt-6 text-sm font-medium text-gray-900">
                100% solar, 0% agriculture: 100% yield
              </span>
            </span>
          </span>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-black"
          />
        </Radio>
        <Radio
          key={1}
          value={'agrivoltaics'}
          aria-label="Agrivoltaics"
          aria-description="New and unique way of deploying both solar and keep farming arable land"
          className="group relative flex cursor-pointer rounded-lg border border-gray-300 bg-white p-4 shadow-sm focus:outline-none data-[focus]:border-black data-[focus]:ring-2 data-[focus]:ring-black"
        >
          <span className="flex w-full flex-1">
            <span className="flex w-full flex-col">
              <img
                src="/agrivoltaics.jpg"
                alt="Agrivoltaics"
                className="mb-2 w-full"
              />
              <span className="block text-sm font-medium text-gray-900">
                Agrivoltaics
              </span>
              <span className="mt-1 flex items-center text-sm text-gray-500">
                New and unique way of deploying both solar and keep farming
                arable land
              </span>
              <span className="mt-6 text-sm font-medium text-gray-900">
                80% solar, 80% agriculture: 160% yield
              </span>
            </span>
          </span>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-black"
          />
        </Radio>
        <Radio
          key={2}
          value={'help_me_decide'}
          aria-label="Help me decide"
          aria-description="We will assess your situation and figure out what would work best for your acres"
          className="group relative flex cursor-pointer rounded-lg border border-gray-300 bg-white p-4 shadow-sm focus:outline-none data-[focus]:border-black data-[focus]:ring-2 data-[focus]:ring-black"
        >
          <span className="flex flex-1">
            <span className="flex flex-col">
              <span className="block text-sm font-medium text-gray-900">
                Help me decide
              </span>
              <span className="mt-1 flex items-center text-sm text-gray-500">
                We will assess your situation and figure out what would work
                best for your acres
              </span>
              <span className="mt-6 text-sm font-medium text-gray-900">
                We'll decide the ideal deployment type
              </span>
            </span>
          </span>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-black"
          />
        </Radio>
      </RadioGroup>
      <div className="my-4 text-2xl font-semibold">Finance Option</div>
      <RadioGroup
        value={financeOption}
        onChange={setFinanceOption}
        className="mt-6 flex flex-col gap-2"
      >
        <Radio
          key={0}
          value={'self_financed'}
          aria-label="Financing myself"
          aria-description="I will finance the project myself without outside capital"
          className="group relative flex cursor-pointer rounded-lg border border-gray-300 bg-white p-4 shadow-sm focus:outline-none data-[focus]:border-black data-[focus]:ring-2 data-[focus]:ring-black"
        >
          <span className="flex flex-1">
            <span className="flex flex-col">
              <span className="block text-sm font-medium text-gray-900">
                Financing myself
              </span>
              <span className="mt-1 flex items-center text-sm text-gray-500">
                I will finance the project myself without outside capital
              </span>
            </span>
          </span>
          <CheckCircle
            aria-hidden="true"
            className="h-5 w-5 text-black [.group:not([data-checked])_&]:invisible"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-black"
          />
        </Radio>
        <Radio
          key={1}
          value={'loan_self_financed'}
          aria-label="Financed by loan"
          aria-description="$19,999 down payment, 3% APR, 72 months"
          className="group relative flex cursor-pointer rounded-lg border border-gray-300 bg-white p-4 shadow-sm focus:outline-none data-[focus]:border-black data-[focus]:ring-2 data-[focus]:ring-black"
        >
          <span className="flex flex-1">
            <span className="flex flex-col">
              <span className="block text-sm font-medium text-gray-900">
                Financed by loan
              </span>
              <span className="mt-1 flex items-center text-sm text-gray-500">
                $19,999 down payment, 3% APR, 72 month loan
              </span>
            </span>
          </span>
          <CheckCircle
            aria-hidden="true"
            className="h-5 w-5 text-black [.group:not([data-checked])_&]:invisible"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-black"
          />
        </Radio>
        <Radio
          key={2}
          value={'solarpunk_financed'}
          aria-label="Financed by Solarpunk"
          aria-description="0% risk, paid fully upfront by Solarpunk. 50% revenue share"
          className="group relative flex cursor-pointer rounded-lg border border-gray-300 bg-white p-4 shadow-sm focus:outline-none data-[focus]:border-black data-[focus]:ring-2 data-[focus]:ring-black"
        >
          <span className="flex flex-1">
            <span className="flex flex-col">
              <span className="block text-sm font-medium text-gray-900">
                Financed by Solarpunk
              </span>
              <span className="mt-1 flex items-center text-sm text-gray-500">
                0% risk, paid fully upfront by Solarpunk. 50% revenue share
              </span>
            </span>
          </span>
          <CheckCircle
            aria-hidden="true"
            className="h-5 w-5 text-black [.group:not([data-checked])_&]:invisible"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-black"
          />
        </Radio>
      </RadioGroup>
      <div className="mt-4 text-2xl font-semibold">Summary</div>
      <div>
        <b>Est. Revenue: </b>$500,000/yr
      </div>
      <div>
        <b>Area: </b>100 Acres
      </div>
      <div className="my-2 flex text-gray-500">
        <span>
          <CircleAlert className="inline h-4 w-4" /> If you want to make any
          changes to your land selection, please do so now using the map to the
          left before submitting the form.
        </span>
      </div>
      <div className="flex flex-col items-center justify-center">
        {error && <div className=" text-red-500">{error}</div>}
        <Button className="mt-4" disabled={loading} onClick={submitForm}>
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {loading ? 'Please wait' : 'Submit'}
        </Button>
      </div>
    </div>
  )
}
