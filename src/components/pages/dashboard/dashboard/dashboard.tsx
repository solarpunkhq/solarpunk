'use client';

import { useEffect, useState } from 'react';

import { getProjectionsFromAcres, getTotalAreaFromAcreData } from '@/utils/projections';
import * as L from 'leaflet';
import 'leaflet.gridlayer.googlemutant/dist/Leaflet.GoogleMutant';
import { LogOut } from 'lucide-react';

import Button from '@/components/shared/button';
import Logo from '@/components/shared/logo';
import Map from '@/components/shared/map';

import { formatNumberAsAmount } from '@/lib/utils';

import Sidebar from '../sidebar';

console.log(L);

function Dashboard({
  user_id,
  existing_acres,
  acre_data,
  country,
}: {
  user_id: number;
  existing_acres: any[];
  acre_data: any[];
  country: string;
}) {
  const lat = existing_acres[0][0][0].lat;
  const lng = existing_acres[0][0][0].lng;

  const [acres, setAcres] = useState(acre_data);

  const [totalArea, setTotalArea] = useState(getTotalAreaFromAcreData(acres));
  const [projections, setProjections] = useState(getProjectionsFromAcres(totalArea, 25, 5));

  useEffect(() => {
    const newTotalArea = getTotalAreaFromAcreData(acres);
    const newProjections = getProjectionsFromAcres(newTotalArea, 25, 5);
    setTotalArea(newTotalArea);
    setProjections(newProjections);
  }, [acres]);

  return (
    <div className="w-full text-gray-12 sm:h-screen sm:overflow-hidden">
      <div className="flex h-full w-full flex-col items-center justify-center px-8 md:flex-row md:items-stretch md:justify-start">
        <div className="flex h-full w-full flex-col items-center justify-start">
          <div className="my-8 ml-4 flex items-center justify-center self-start">
            <div
              className="flex cursor-pointer items-center"
              onClick={() => (window.location.href = '/')}
            >
              <Logo className="h-8" />
            </div>
          </div>
          <Map
            zoom={16}
            lat={lat}
            lng={lng}
            acres={acres}
            setAcres={setAcres}
            existingAcres={existing_acres}
            country={country}
          />
          <div className="text-sm mt-2 rounded-md bg-gray-94 p-6 text-center sm:w-1/2">
            <span className="font-semibold">
              ${formatNumberAsAmount(projections.revenue_per_year.toFixed(0))} Est. Yearly Revenue
            </span>
            {' | '}
            <span className="text-gray-30">
              {' '}
              {formatNumberAsAmount(totalArea.toFixed(2))} Acres
            </span>
          </div>
        </div>

        <div className="ml-4 h-full max-h-screen w-full max-w-96">
          <div className="mt-4 flex h-full flex-col">
            <div className="invisible mr-4 mt-4 hidden h-6 w-6 self-end sm:visible sm:block">
              <Button
                size="home-xs"
                className="overflow-hidden"
                onClick={() => (window.location.href = '/logout')}
              >
                <LogOut className="h-6 w-6" />
              </Button>
            </div>

            <Sidebar user_id={user_id} acres={acres} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
