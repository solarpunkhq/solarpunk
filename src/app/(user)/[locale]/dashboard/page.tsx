import { redirect, useSearchParams } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';

import Dashboard from '@/components/pages/dashboard/dashboard';
import LifecycleCard from '@/components/pages/dashboard/lifecycle-card';
import Header from '@/components/shared/header';

import { prisma } from '@/lib/prisma';

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

  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };

  const startDate = new Date(created_timestamp).toLocaleDateString('en-US', options);

  let endDate = '';
  if (step_3_timestamp !== null) {
    endDate = new Date(step_3_timestamp).toLocaleDateString('en-US', options);
  }

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
        <Header isLoggedIn={true} />
        <LifecycleCard current_step={current_step} startDate={startDate} endDate={endDate} />
      </>
    );
  }
}
