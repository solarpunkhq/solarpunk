'use client';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

import { useEffect, useState } from 'react';

import { getProjectionsFromAcres, getTotalAreaFromAcreData } from '@/utils/projections';
import { Acre } from '@/utils/types';
import * as L from 'leaflet';
import 'leaflet.gridlayer.googlemutant/dist/Leaflet.GoogleMutant';
import { CircleAlert, Leaf, Loader2, MapPin } from 'lucide-react';

import Button from '@/components/shared/button';
import Logo from '@/components/shared/logo';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

import MainStat from '../main-stat';
import StatItem from '../stat-item/stat-item';
import { submit } from './submit';

console.log(L);

const Map = dynamic(() => import('@/components/shared/map'), {
  ssr: false,
});

interface OnboardingProps {
  country: string;
}

function Onboarding({ country }: OnboardingProps) {
  const [acres, setAcres] = useState<Acre[]>([]);
  const [totalArea, setTotalArea] = useState(getTotalAreaFromAcreData(acres));
  const [projections, setProjections] = useState(getProjectionsFromAcres(totalArea, 25, 5));

  useEffect(() => {
    const newTotalArea = getTotalAreaFromAcreData(acres);
    const newProjections = getProjectionsFromAcres(newTotalArea, 25, 5);
    setTotalArea(newTotalArea);
    setProjections(newProjections);
  }, [acres]);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const router = useRouter();

  const searchParams = useSearchParams();

  let lat = parseFloat(searchParams.get('lat') || '');
  let zoom = 15;
  if (Number.isNaN(lat)) {
    lat = 34.0549;
    zoom = 13;
  }
  let lng = parseFloat(searchParams.get('lng') || '');
  if (Number.isNaN(lng)) {
    lng = -118.2426;
  }

  const submitForm = async () => {
    const magic_link = await submit(email, name, acres, setLoading, setError);
    if (magic_link) {
      router.push(magic_link);
    }
  };

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
            zoom={zoom}
            lat={lat}
            lng={lng}
            acres={acres}
            setAcres={setAcres}
            existingAcres={[]}
            country={country}
          />
        </div>
        <div className="ml-4 h-full max-h-screen w-full max-w-96">
          <div className="mt-24 flex flex-col rounded-2xl border-2 border-gray-80 bg-gray-98 p-4">
            <h1 className="mb-4 font-title text-28 font-bold">Mark your land</h1>
            <div className="text-sm relative mb-4 flex-col overflow-x-auto">
              <div className="mb-4">
                Use the tools on the left of the map to select your territory.
              </div>
              <div className="text-base ml-1 mt-4 font-semibold">Name</div>
              <Input
                placeholder="Your name"
                className="!ml-1 !w-[97%] !border-2 !border-gray-70"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <div className="text-base ml-1 mt-4 font-semibold">Email</div>
              <Input
                placeholder="Your email"
                className="!ml-1 !w-[97%] !border-2 !border-gray-70"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Card className="ml-1 mt-6 w-[97%] !border-2 !border-gray-70 bg-gray-94 text-gray-20">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <MainStat label="Revenue" value={projections.revenue_per_year} unit="/yr" />
                    <Separator className="bg-gray-20" />
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <StatItem
                        icon={MapPin}
                        label="Area"
                        value={parseFloat(totalArea.toFixed(1))}
                        unit="acres"
                      />
                      <StatItem
                        icon={Leaf}
                        label="Energy"
                        value={parseFloat(projections.mw_produced.toFixed(1))}
                        unit="MW/yr"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="my-2 ml-1 flex text-13 text-gray-40">
                <span>
                  <CircleAlert className="relative -top-px inline h-4 w-4" /> These figures are
                  estimates and are not guaranteed.
                </span>
              </div>
              <div className="mt-2 flex flex-col items-center justify-center">
                {error && <div className="text-primary-red">{error}</div>}
                <Button
                  className="mt-4"
                  size="home-sm"
                  theme="black"
                  onClick={() => {
                    submitForm();
                  }}
                >
                  {loading && (
                    <div className="px-4">
                      <Loader2 className="h-4 w-4 animate-spin" />
                    </div>
                  )}
                  {loading ? '' : 'Submit'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
