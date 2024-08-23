'use client'

import { useState } from 'react'
import { Button } from '../ui/button'
import Schedule from './Schedule'
import { Radio, RadioGroup } from '@headlessui/react'
import { CheckCircle } from 'lucide-react'

export default function DashboardSidebar() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [financeOption, setFinanceOption] = useState('')
  const [deploymentType, setDeploymentType] = useState(
    'open_space_photovoltaics'
  )
  const [aboutLand, setAboutLand] = useState('')
  const [loading, setLoading] = useState(false)
  return (
    <div className="relative mb-4 flex-col overflow-x-auto text-sm">
      <div className="mb-4">
        Please submit additional information about your land. This information
        will help us process your application faster.
      </div>
      <Schedule />
      <div className="my-4 text-2xl font-bold">Deployment Type</div>
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
          className="group relative flex cursor-pointer rounded-lg border border-gray-300 bg-white p-4 shadow-sm focus:outline-none data-[focus]:border-indigo-600 data-[focus]:ring-2 data-[focus]:ring-indigo-600"
        >
          <span className="flex flex-1">
            <span className="flex flex-col">
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
          <CheckCircle
            aria-hidden="true"
            className="h-5 w-5 text-indigo-600 [.group:not([data-checked])_&]:invisible"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-600"
          />
        </Radio>
        <Radio
          key={1}
          value={'agrivoltaics'}
          aria-label="Agrivoltaics"
          aria-description="New and unique way of deploying both solar and keep farming arable land"
          className="group relative flex cursor-pointer rounded-lg border border-gray-300 bg-white p-4 shadow-sm focus:outline-none data-[focus]:border-indigo-600 data-[focus]:ring-2 data-[focus]:ring-indigo-600"
        >
          <span className="flex flex-1">
            <span className="flex flex-col">
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
          <CheckCircle
            aria-hidden="true"
            className="h-5 w-5 text-indigo-600 [.group:not([data-checked])_&]:invisible"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-600"
          />
        </Radio>
        <Radio
          key={1}
          value={'help_me_decide'}
          aria-label="Help me decide"
          aria-description="We will assess your situation and figure out what would work best for your acres"
          className="group relative flex cursor-pointer rounded-lg border border-gray-300 bg-white p-4 shadow-sm focus:outline-none data-[focus]:border-indigo-600 data-[focus]:ring-2 data-[focus]:ring-indigo-600"
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
          <CheckCircle
            aria-hidden="true"
            className="h-5 w-5 text-indigo-600 [.group:not([data-checked])_&]:invisible"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-600"
          />
        </Radio>
      </RadioGroup>
      <Button className="mx-auto mt-4 !px-5 !py-3">Submit</Button>
    </div>
  )
}
