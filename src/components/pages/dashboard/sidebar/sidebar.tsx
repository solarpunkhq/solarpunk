'use client';

import { useState } from 'react';

import { getProjectionsFromAcres, getTotalAreaFromAcreData } from '@/utils/projections';
import { Radio, RadioGroup } from '@headlessui/react';
import { CheckCircle, CircleAlert, Loader2 } from 'lucide-react';

import Button from '@/components/shared/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { formatNumberAsAmount } from '@/lib/utils';

import Schedule from '../schedule';

function DashboardSidebar({ user_id, acres }: { user_id: number; acres: any[] }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [financeOption, setFinanceOption] = useState('self_financed');
  const [deploymentType, setDeploymentType] = useState('agrivoltaics');
  const [aboutLand, setAboutLand] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const totalArea = getTotalAreaFromAcreData(acres);
  const projections = getProjectionsFromAcres(totalArea, 25, 5);

  const submitForm = async () => {
    setLoading(true);
    if (phoneNumber === '') {
      setError('Phone number is required');
      setLoading(false);
      return;
    }
    if (financeOption === '') {
      setError('Finance option is required');
      setLoading(false);
      return;
    }
    if (deploymentType === '') {
      setError('Deployment type is required');
      setLoading(false);
      return;
    }
    console.log(acres);
    try {
      const response = await fetch('/api/submit_additional_details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id,
          phone_number: phoneNumber,
          about_farm: aboutLand,
          finance_option: financeOption,
          deployment_type: deploymentType,
          acres,
          total_revenue: projections.total_revenue,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        window.location.reload();
        setLoading(false);
      } else {
        console.error('Error:', response.statusText);
        setLoading(false);
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setLoading(false);
    }
  };

  return (
    <div className="relative mb-4 mt-4 flex h-[90vh] flex-col overflow-hidden rounded-xl border-2 border-gray-80 bg-gray-98 p-4 text-14">
      <div className="flex-1 overflow-y-auto">
        <h1 className="mb-4 font-title text-28 font-bold">Your Acres</h1>
        <div className="mb-4">
          Please submit additional information about your land. This information will help us
          process your application faster.
        </div>
        <Schedule />
        <div className="my-4 text-20 font-semibold">Personal Details</div>
        <div className="ml-1 text-15 font-semibold">Phone Number</div>
        <Input
          placeholder="Your phone number"
          className="!mb-2 !ml-1 !w-[97%] !border-2 !border-gray-70"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <div className="ml-1 mt-2 text-15 font-semibold">Land Information</div>
        <Textarea
          placeholder="Any additional details about your land you want us to know"
          className="!ml-1 !w-[97%] !border-2 !border-gray-70"
          value={aboutLand}
          onChange={(e) => setAboutLand(e.target.value)}
        />
        <div className="my-4 text-20 font-semibold">Deployment Type</div>
        <RadioGroup
          value={deploymentType}
          className="mt-6 flex flex-col gap-2"
          onChange={setDeploymentType}
        >
          <Radio
            key={0}
            value={'agrivoltaics'}
            aria-label="Agrivoltaics"
            aria-description="New and unique way of deploying both solar and keep farming arable land"
            className="group relative flex cursor-pointer rounded-lg border border-gray-50 bg-white p-4 shadow-sm focus:outline-none data-[focus]:border-black data-[focus]:ring-2 data-[focus]:ring-black"
          >
            <span className="flex w-full flex-1">
              <span className="flex w-full flex-col">
                <img
                  src="/images/pages/dashboard/agrivoltaics.jpg"
                  alt="Agrivoltaics"
                  className="mb-2 w-full"
                />
                <span className="text-gray-18 block text-sm font-medium">Agrivoltaics</span>
                <span className="mt-1 flex items-center text-sm text-gray-30">
                  New and unique way of deploying both solar and keep farming arable land
                </span>
                <span className="text-gray-18 mt-6 text-sm font-medium">
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
            key={1}
            value={'open_space_photovoltaics'}
            aria-label="Open Space Photovoltaics"
            aria-description="Traditional solar deployment on acres that will not be used for agriculture"
            className="group relative flex cursor-pointer rounded-lg border border-gray-50 bg-white p-4 shadow-sm focus:outline-none data-[focus]:border-black data-[focus]:ring-2 data-[focus]:ring-black"
          >
            <span className="flex w-full flex-1">
              <span className="flex w-full flex-col ">
                <img
                  src="/images/pages/dashboard/photovoltaics.jpg"
                  alt="Photovoltaics"
                  className="mb-2 w-full"
                />
                <span className="text-gray-18 block text-sm font-medium">
                  Open Space Photovoltaics
                </span>
                <span className="mt-1 flex items-center text-sm text-gray-30">
                  Traditional solar deployment on acres that will not be used for agriculture
                </span>
                <span className="text-gray-18 mt-6 text-sm font-medium">
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
            key={2}
            value={'help_me_decide'}
            aria-label="Help me decide"
            aria-description="We will assess your situation and figure out what would work best for your acres"
            className="group relative flex cursor-pointer rounded-lg border border-gray-50 bg-white p-4 shadow-sm focus:outline-none data-[focus]:border-black data-[focus]:ring-2 data-[focus]:ring-black"
          >
            <span className="flex flex-1">
              <span className="flex flex-col">
                <span className="text-gray-18 block text-sm font-medium">Help me decide</span>
                <span className="mt-1 flex items-center text-sm text-gray-30">
                  We will assess your situation and figure out what would work best for your acres
                </span>
                <span className="text-gray-18 mt-6 text-sm font-medium">
                  We&apos;ll decide the ideal deployment type
                </span>
              </span>
            </span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-black"
            />
          </Radio>
        </RadioGroup>
        <div className="my-4 text-20 font-semibold">Finance Option</div>
        <RadioGroup
          value={financeOption}
          className="mt-6 flex flex-col gap-2"
          onChange={setFinanceOption}
        >
          <Radio
            key={0}
            value={'self_financed'}
            aria-label="Financing myself"
            aria-description="I will finance the project myself without outside capital"
            className="group relative flex cursor-pointer rounded-lg border border-gray-50 bg-white p-4 shadow-sm focus:outline-none data-[focus]:border-black data-[focus]:ring-2 data-[focus]:ring-black"
          >
            <span className="flex flex-1">
              <span className="flex flex-col">
                <span className="block text-sm font-semibold text-gray-8">Financing myself</span>
                <span className="mt-1 flex items-center text-sm text-gray-30">
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
            className="group relative flex cursor-pointer rounded-lg border border-gray-50 bg-white p-4 shadow-sm focus:outline-none data-[focus]:border-black data-[focus]:ring-2 data-[focus]:ring-black"
          >
            <span className="flex flex-1">
              <span className="flex flex-col">
                <span className="block text-sm font-semibold text-gray-8">Financed by loan</span>
                <span className="mt-1 flex items-center text-sm text-gray-30">
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
            className="group relative flex cursor-pointer rounded-lg border border-gray-50 bg-white p-4 shadow-sm focus:outline-none data-[focus]:border-black data-[focus]:ring-2 data-[focus]:ring-black"
          >
            <span className="flex flex-1">
              <span className="flex flex-col">
                <span className="block text-sm font-semibold text-gray-8">
                  Financed by Solarpunk
                </span>
                <span className="mt-1 flex items-center text-sm text-gray-30">
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
        <div className="mt-4 text-20 font-semibold">Summary</div>
        <div>
          <b>Area: </b>
          {formatNumberAsAmount(totalArea.toFixed(2))} Acres
        </div>
        <div>
          <b>Est. Revenue: </b>${formatNumberAsAmount(projections.revenue_per_year.toFixed(0))}/yr
        </div>
        <div>
          <b>Est. Energy Production: </b>
          {formatNumberAsAmount(projections.mw_produced.toFixed(1))} MW/yr
        </div>
        <div className="my-2 flex text-gray-40">
          <span>
            <CircleAlert className="inline h-4 w-4" /> If you want to make any changes to your land
            selection, please do so now using the map to the left before submitting the form.
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pt-4">
        {error && <div className="text-primary-red">{error}</div>}
        <Button
          className="flex w-full items-center justify-center rounded-md px-6 py-2"
          theme="black"
          onClick={submitForm}
        >
          {loading && (
            <div className="px-4 py-1">
              <Loader2 className="h-4 w-4 animate-spin" />
            </div>
          )}
          {loading ? '' : 'Submit'}
        </Button>
      </div>
    </div>
  );
}

export default DashboardSidebar;
