'use client';

import { useEffect, useState } from 'react';

import { getProjectionsFromAcres, getTotalAreaFromAcreData } from '@/utils/projections';
import { Acre, LatLng } from '@/utils/types';
import * as L from 'leaflet';
import 'leaflet.gridlayer.googlemutant/dist/Leaflet.GoogleMutant';
import { LogOut } from 'lucide-react';

import Button from '@/components/shared/button';
import Logo from '@/components/shared/logo';
import Map from '@/components/shared/map';

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
  acre_data: Acre[];
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

  const basePath =
    window.location.origin + window.location.pathname.split('/').slice(0, 2).join('/');
  return (
    <div className="w-full text-gray-12 sm:h-screen sm:overflow-hidden">
      <div className="flex h-full w-full flex-col items-center justify-center px-8 md:flex-row md:items-stretch md:justify-start">
        <div className="flex h-full w-full flex-col items-center justify-start">
          <div className="my-3 flex items-center justify-center self-start">
            <div
              className="flex cursor-pointer items-center"
              onClick={() => (window.location.href = `${basePath}/`)}
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
        </div>

        <div className="ml-4 h-full max-h-screen w-full max-w-96">
          <div className="mt-4 flex h-full flex-col">
            <div className="invisible mr-4 mt-2 hidden h-6 w-6 self-end sm:visible sm:block">
              <Button
                size="home-xs"
                className="overflow-hidden"
                onClick={() => (window.location.href = `${basePath}/logout`)}
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
