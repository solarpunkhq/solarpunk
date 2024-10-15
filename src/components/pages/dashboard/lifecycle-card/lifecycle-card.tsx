'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { Calendar, Leaf } from 'lucide-react';

import CurrentStep from '@/components/pages/dashboard/current-step';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

import sectionBg from '@/images/sources/sources.jpg';

function LifecycleCard({
  current_step,
  startDate,
  endDate,
}: {
  current_step: number;
  startDate: string;
  endDate: string;
}) {
  const getPercentage = (step: number) => {
    if (step === 0) {
      return 10;
    }
    if (step === 1) {
      return 20;
    }
    if (step === 2) {
      return 45;
    }
    if (step === 3) {
      return 100;
    }
  };
  const t = useTranslations('LifecyclePage');

  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-5">
      <Card className="w-full max-w-4xl bg-primary-offwhite">
        <CardHeader>
          <CardTitle className="flex items-center justify-start gap-2">
            <img
              src="/images/pages/dashboard/lifecycle_icon.svg"
              className="h-10 w-10"
              alt=""
              role="presentation"
            />
            {t('title')}
          </CardTitle>
          <CardDescription className="!text-pretty text-gray-40">
            {t('description')}
          </CardDescription>
          <div className="!mt-2 flex w-full flex-col items-center justify-start">
            <div className="flex w-full items-center justify-between">
              <div className="text-14 font-semibold">
                {getPercentage(current_step - 1)}% {t('complete')}
              </div>
              {current_step < 4 ? (
                <div className="text-14 text-gray-40">
                  {t('step')} {current_step + 1} of 4
                </div>
              ) : (
                <div className="text-14 text-gray-40">{t('finished')}</div>
              )}
            </div>
            <Progress value={getPercentage(current_step - 1)} className="bg-white" />
          </div>
          <div className="!mt-4 flex w-3/4 items-center justify-start rounded-md border-[1px] border-gray-80 bg-white p-2 md:w-[30%]">
            <Calendar />
            <div className="ml-2 text-14 font-medium">
              <span>{startDate} - </span>
              <span>{current_step === 4 ? endDate : t('ongoing')}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="grid gap-4">
          <CurrentStep currentStep={current_step - 1} />
        </CardContent>
      </Card>
      <Image
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
        src={sectionBg}
        width={1920}
        height={1104}
        alt="Solarpunk Background"
      />
    </div>
  );
}

export default LifecycleCard;