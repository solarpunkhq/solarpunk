import Image from 'next/image';
import { redirect, useSearchParams } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';
import { Calendar, Leaf } from 'lucide-react';

import CurrentStep from '@/components/pages/dashboard/current-step';
import Dashboard from '@/components/pages/dashboard/dashboard';
import Header from '@/components/shared/header';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

import { prisma } from '@/lib/prisma';

import sectionBg from '@/images/sources/sources.jpg';

export default async function DashboardPage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  const { user } = data;

  if (user === null || user === undefined) {
    redirect('/login');
  }

  const userData = await prisma.user.findUnique({
    where: {
      email: user.email,
    },
    select: {
      current_step: true,
      id: true,
      country: true,
      created_timestamp: true,
      step_3_timestamp: true,
    },
  });

  if (!userData) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-primary-red">
        An error occurred.
      </div>
    );
  }
  const { current_step, id, country, created_timestamp, step_3_timestamp } = userData;

  const acreData = await prisma.acre.findMany({
    where: {
      userId: id,
    },
  });
  const existingAcres = acreData.map((acre) => {
    return acre.latlngs;
  });

  if (current_step === null) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-primary-red">
        An error occurred.
      </div>
    );
  }

  if (current_step === -1) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-primary-red">
        Your application has been rejected.
      </div>
    );
  }

  const startDate = new Date(created_timestamp).toISOString().split('T')[0];
  let endDate = '';
  if (step_3_timestamp !== null) {
    endDate = new Date(step_3_timestamp).toISOString().split('T')[0];
  }

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

  if (current_step === 0) {
    return (
      <div className="h-full w-full">
        <div className="flex h-full w-full flex-col items-center justify-start">
          <Dashboard
            user_id={id}
            existing_acres={existingAcres}
            acre_data={acreData}
            country={country}
          />
        </div>
      </div>
    );
  } else {
    return (
      <>
        <Header />
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
                Solarpunk Project Lifecycle
              </CardTitle>
              <CardDescription className="!text-pretty text-gray-40">
                This is the current status of your project. We will send you an email when your
                project is ready to move to the next step.
              </CardDescription>
              <div className="!mt-2 flex w-full flex-col items-center justify-start">
                <div className="flex w-full items-center justify-between">
                  <div className="text-14 font-semibold">
                    {getPercentage(current_step - 1)}% complete
                  </div>
                  {current_step < 4 ? (
                    <div className="text-14 text-gray-40">Step {current_step + 1} of 4</div>
                  ) : (
                    <div className="text-14 text-gray-40">Finished</div>
                  )}
                </div>
                <Progress value={getPercentage(current_step - 1)} className="bg-white" />
              </div>
              <div className="!mt-4 flex w-1/4 items-center justify-start rounded-md border-[1px] border-gray-80 bg-white p-2">
                <Calendar />
                <div className="ml-2 text-14 font-medium">
                  <span>{startDate} - </span>
                  <span>{current_step === 3 ? endDate : 'Ongoing'}</span>
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
      </>
    );
  }
}
