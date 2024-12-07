'use client';

import { useTranslations } from 'next-intl';

import { useState } from 'react';

import { getProjectionsFromAcres, getTotalAreaFromAcreData } from '@/utils/projections';
import { Acre } from '@/utils/types';
import { Radio, RadioGroup } from '@headlessui/react';
import { CheckCircle, CircleAlert, Loader2 } from 'lucide-react';

import Button from '@/components/shared/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { formatNumberAsAmount } from '@/lib/utils';

import Schedule from '../schedule';

function DashboardSidebar({ user_id, acres }: { user_id: number; acres: Acre[] }) {
  const t = useTranslations('translations');

  const [phoneNumber, setPhoneNumber] = useState('');
  const [financeOption, setFinanceOption] = useState('self_financed');
  const [availabilityOption, setAvailabilityOption] = useState('available_now');
  const [deploymentType, setDeploymentType] = useState('agrivoltaics');
  const [aboutLand, setAboutLand] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const totalArea = getTotalAreaFromAcreData(acres);
  const projections = getProjectionsFromAcres(totalArea, 25, 5);

  const submitForm = async () => {
    setLoading(true);
    if (phoneNumber === '') {
      setError(t('dashboard_error_phone_required'));
      setLoading(false);
      return;
    }
    if (financeOption === '') {
      setError(t('dashboard_error_finance_option'));
      setLoading(false);
      return;
    }
    if (deploymentType === '') {
      setError(t('dashboard_error_deployment_type'));
      setLoading(false);
      return;
    }
    if (availabilityOption === '') {
      setError(t('dashboard_error_availability_option'));
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
          availability_option: availabilityOption,
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
    <div className="relative mb-4 mt-4 flex h-[90vh] flex-col overflow-hidden rounded-xl border-2 border-gray-80 bg-gray-98 text-14">
      <div className="flex-1 overflow-y-auto p-4">
        <h1 className="mb-4 font-title text-28 font-bold">{t('dashboard_title')}</h1>
        <div className="mb-4">{t('dashboard_description')}</div>
        <div className="my-4 text-20 font-semibold"> {t('dashboard_personal_details')}</div>
        <div className="ml-1 text-15 font-semibold">{t('dashboard_phone_number')}</div>
        <Input
          placeholder={t('dashboard_phone_number_placeholder')}
          className="!mb-2 !ml-1 !w-[97%] !border-2 !border-gray-70"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <div className="ml-1 mt-2 text-15 font-semibold">{t('dashboard_land_information')}</div>
        <Textarea
          placeholder={t('dashboard_land_information_placeholder')}
          className="!ml-1 !w-[97%] !border-2 !border-gray-70"
          value={aboutLand}
          onChange={(e) => setAboutLand(e.target.value)}
        />
        <div className="my-4 text-20 font-semibold">{t('dashboard_deployment_type')}</div>
        <RadioGroup
          value={deploymentType}
          className="mt-6 flex flex-col gap-2"
          onChange={setDeploymentType}
        >
          <Radio
            key={0}
            value={'agrivoltaics'}
            aria-label={t('dashboard_agrivoltaics_title')}
            aria-description={t('dashboard_agrivoltaics_description')}
            className="group relative flex cursor-pointer rounded-lg border border-gray-50 bg-white p-4 shadow-sm focus:outline-none data-[focus]:border-black data-[focus]:ring-2 data-[focus]:ring-black"
          >
            <span className="flex w-full flex-1">
              <span className="flex w-full flex-col">
                <img
                  src="/images/pages/dashboard/agrivoltaics.jpg"
                  alt="Agrivoltaics"
                  className="mb-2 w-full"
                />
                <span className="text-gray-18 block text-sm font-medium">
                  {t('dashboard_agrivoltaics_title')}
                </span>
                <span className="mt-1 flex items-center text-sm text-gray-30">
                  {t('dashboard_agrivoltaics_description')}
                </span>
                <span className="text-gray-18 mt-6 text-sm font-medium">
                  {t('dashboard_agrivoltaics_breakup')}
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
            aria-label={t('dashboard_photovoltaics_title')}
            aria-description={t('dashboard_photovoltaics_description')}
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
                  {t('dashboard_photovoltaics_title')}
                </span>
                <span className="mt-1 flex items-center text-sm text-gray-30">
                  {t('dashboard_photovoltaics_description')}
                </span>
                <span className="text-gray-18 mt-6 text-sm font-medium">
                  {t('dashboard_photovoltaics_breakup')}
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
            aria-label={t('dashboard_help_me_decide_title')}
            aria-description={t('dashboard_help_me_decide_description')}
            className="group relative flex cursor-pointer rounded-lg border border-gray-50 bg-white p-4 shadow-sm focus:outline-none data-[focus]:border-black data-[focus]:ring-2 data-[focus]:ring-black"
          >
            <span className="flex flex-1">
              <span className="flex flex-col">
                <span className="text-gray-18 block text-sm font-medium">
                  {t('dashboard_help_me_decide_title')}
                </span>
                <span className="mt-1 flex items-center text-sm text-gray-30">
                  {t('dashboard_help_me_decide_description')}
                </span>
                <span className="text-gray-18 mt-6 text-sm font-medium">
                  {t('dashboard_help_me_decide_breakup')}
                </span>
              </span>
            </span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-black"
            />
          </Radio>
        </RadioGroup>
        <div className="my-4 text-20 font-semibold">{t('dashboard_finance_option')}</div>
        <RadioGroup
          value={financeOption}
          className="mt-6 flex flex-col gap-2"
          onChange={setFinanceOption}
        >
          <Radio
            key={0}
            value={'self_financed'}
            aria-label={t('dashboard_self_finance_title')}
            aria-description={t('dashboard_self_finance_description')}
            className="group relative flex cursor-pointer rounded-lg border border-gray-50 bg-white p-4 shadow-sm focus:outline-none data-[focus]:border-black data-[focus]:ring-2 data-[focus]:ring-black"
          >
            <span className="flex flex-1">
              <span className="flex flex-col">
                <span className="block text-sm font-semibold text-gray-8">
                  {t('dashboard_self_finance_title')}
                </span>
                <span className="mt-1 flex items-center text-sm text-gray-30">
                  {t('dashboard_self_finance_description')}
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
            aria-label={t('dashboard_loan_self_financed_title')}
            aria-description={t('dashboard_loan_self_financed_description')}
            className="group relative flex cursor-pointer rounded-lg border border-gray-50 bg-white p-4 shadow-sm focus:outline-none data-[focus]:border-black data-[focus]:ring-2 data-[focus]:ring-black"
          >
            <span className="flex flex-1">
              <span className="flex flex-col">
                <span className="block text-sm font-semibold text-gray-8">
                  {t('dashboard_loan_self_financed_title')}
                </span>
                <span className="mt-1 flex items-center text-sm text-gray-30">
                  {t('dashboard_loan_self_financed_description')}
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
            aria-label={t('dashboard_solarpunk_financed_title')}
            aria-description={t('dashboard_solarpunk_financed_description')}
            className="group relative flex cursor-pointer rounded-lg border border-gray-50 bg-white p-4 shadow-sm focus:outline-none data-[focus]:border-black data-[focus]:ring-2 data-[focus]:ring-black"
          >
            <span className="flex flex-1">
              <span className="flex flex-col">
                <span className="block text-sm font-semibold text-gray-8">
                  {t('dashboard_solarpunk_financed_title')}
                </span>
                <span className="mt-1 flex items-center text-sm text-gray-30">
                  {t('dashboard_solarpunk_financed_description')}
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
        <div className="my-4 text-20 font-semibold">{t('dashboard_availability_option')}</div>
        <RadioGroup
          value={availabilityOption}
          className="mt-6 flex flex-col gap-2"
          onChange={setAvailabilityOption}
        >
          <Radio
            key={0}
            value={'available_now'}
            aria-label={t('dashboard_available_now_title')}
            aria-description={t('dashboard_available_now_description')}
            className="group relative flex cursor-pointer rounded-lg border border-gray-50 bg-white p-4 shadow-sm focus:outline-none data-[focus]:border-black data-[focus]:ring-2 data-[focus]:ring-black"
          >
            <span className="flex flex-1">
              <span className="flex flex-col">
                <span className="block text-sm font-semibold text-gray-8">
                  {t('dashboard_available_now_title')}
                </span>
                <span className="mt-1 flex items-center text-sm text-gray-30">
                  {t('dashboard_available_now_description')}
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
            value={'available_in_6_to_12_months'}
            aria-label={t('dashboard_available_in_6_to_12_months_title')}
            aria-description={t('dashboard_available_in_6_to_12_months_description')}
            className="group relative flex cursor-pointer rounded-lg border border-gray-50 bg-white p-4 shadow-sm focus:outline-none data-[focus]:border-black data-[focus]:ring-2 data-[focus]:ring-black"
          >
            <span className="flex flex-1">
              <span className="flex flex-col">
                <span className="block text-sm font-semibold text-gray-8">
                  {t('dashboard_available_in_6_to_12_months_title')}
                </span>
                <span className="mt-1 flex items-center text-sm text-gray-30">
                  {t('dashboard_available_in_6_to_12_months_description')}
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
            value={'available_in_12_to_24_months'}
            aria-label={t('dashboard_available_in_12_to_24_months_title')}
            aria-description={t('dashboard_available_in_12_to_24_months_description')}
            className="group relative flex cursor-pointer rounded-lg border border-gray-50 bg-white p-4 shadow-sm focus:outline-none data-[focus]:border-black data-[focus]:ring-2 data-[focus]:ring-black"
          >
            <span className="flex flex-1">
              <span className="flex flex-col">
                <span className="block text-sm font-semibold text-gray-8">
                  {t('dashboard_available_in_12_to_24_months_title')}
                </span>
                <span className="mt-1 flex items-center text-sm text-gray-30">
                  {t('dashboard_available_in_12_to_24_months_description')}
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
            key={3}
            value={'available_after_24_months'}
            aria-label={t('dashboard_available_after_24_months_title')}
            aria-description={t('dashboard_available_after_24_months_description')}
            className="group relative flex cursor-pointer rounded-lg border border-gray-50 bg-white p-4 shadow-sm focus:outline-none data-[focus]:border-black data-[focus]:ring-2 data-[focus]:ring-black"
          >
            <span className="flex flex-1">
              <span className="flex flex-col">
                <span className="block text-sm font-semibold text-gray-8">
                  {t('dashboard_available_after_24_months_title')}
                </span>
                <span className="mt-1 flex items-center text-sm text-gray-30">
                  {t('dashboard_available_after_24_months_description')}
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
        <div className="mt-4 text-20 font-semibold">{t('dashboard_summary_title')}</div>
        <div>
          <b>{t('dashboard_area_label')}: </b>
          {formatNumberAsAmount(totalArea.toFixed(2))} Acres
        </div>
        <div>
          <b>{t('dashboard_revenue_label')}: </b>$
          {formatNumberAsAmount(projections.revenue_per_year.toFixed(0))}/yr
        </div>
        <div>
          <b>{t('dashboard_energy_label')}: </b>
          {formatNumberAsAmount(projections.mw_produced.toFixed(1))} MW/yr
        </div>
        <div className="my-2 flex text-gray-40">
          <span>
            <CircleAlert className="inline h-4 w-4" /> {t('dashboard_alert_content')}
          </span>
        </div>
      </div>
      <div className="-mb-[10px] flex flex-col items-center justify-start rounded-b-2xl bg-gray-20 py-4">
        {error && <div className="text-primary-red">{error}</div>}
        <div className="flex gap-2 pb-2">
          <Button size="home-md" theme="black" href="https://cal.com/team/solarpunk/exploration">
            {t('dashboard_contact')}
          </Button>
          <Button
            className="flex items-center justify-center !px-8"
            size="home-md"
            theme="green"
            disabled={phoneNumber.length === 0}
            onClick={submitForm}
          >
            {loading && (
              <div className="px-6">
                <Loader2 className="h-4 w-4 animate-spin" />
              </div>
            )}
            {loading ? '' : t('dashboard_submit')}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DashboardSidebar;
