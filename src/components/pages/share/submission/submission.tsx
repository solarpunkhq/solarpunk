'use client';

import { Route } from 'next';
import { notFound } from 'next/navigation';

import { useEffect, useState } from 'react';

import { sub } from 'date-fns';
import * as L from 'leaflet';
import 'leaflet.gridlayer.googlemutant/dist/Leaflet.GoogleMutant';
import { MapPin, Zap } from 'lucide-react';

import MainStat from '@/components/pages/onboarding/main-stat';
import StatItem from '@/components/pages/onboarding/stat-item';
import Button from '@/components/shared/button';
import Map from '@/components/shared/map';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

console.log(L);

interface PublicInfo {
  total_area: string;
  deployment_type: string;
  finance_option: string;
}

function getDeploymentDescription(deploymentType: string) {
  switch (deploymentType) {
    case 'agrivoltaics':
      return 'a new and unique way of deploying both solar and keep farming arable land.';
    case 'open_space_photovoltaics':
      return 'traditional solar deployment on land that will not be used for agriculture.';
    case 'help_me_decide':
      return 'where we assess their situation and help them decide what works best for their land.';
  }
}

function getFinanceDescription(financeOption: string) {
  switch (financeOption) {
    case 'self_financed':
      return 'where they finance it themselves, without outside capital.';
    case 'loan_self_financed':
      return 'where they finance it themselves, but with a loan.';
    case 'solarpunk_financed':
      return 'where Solarpunk finances it in exchange for a revenue sharing agreement.';
  }
}

function SubmissionComponent({ submission_id, locale }: { submission_id: string; locale: string }) {
  const [data, setData] = useState<PublicInfo | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/get_public_info?submission_id=${submission_id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [submission_id]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error || data === null || data === undefined) {
    return notFound();
  }

  let totalArea = parseFloat(data.total_area);
  const totalAreaStr = totalArea.toFixed(2);

  const deploymentType = data.deployment_type;
  const financeOption = data.finance_option;

  const existing_acres = getFakeAcreData();
  const lat = existing_acres[1][0][0].lat;
  const lng = existing_acres[1][0][0].lng;

  if (
    deploymentType === undefined ||
    deploymentType === null ||
    financeOption === null ||
    financeOption === undefined
  ) {
    return (
      <div className="flex items-center justify-center">
        User has not submitted additional details yet.
      </div>
    );
  }

  return (
    <div className="h-full">
      <h1 className="text-5xl">We have business for you</h1>
      <h2 className="my-2 text-xl">Interested in connecting with this person?</h2>
      <p>
        <span className="blur-sm">Varun</span> want’s to build <b>{totalAreaStr} acres</b> of solar
        and we can connect the two of you immediately.
      </p>
      <div className=" mb-32 mt-8 flex h-full w-full items-center justify-center gap-8">
        <div className="pointer-events-none h-full w-3/4 blur-sm">
          <Map
            zoom={16}
            lat={lat}
            lng={lng}
            acres={null}
            setAcres={null}
            existingAcres={existing_acres}
            country="US"
            displayOnly={true}
          />
        </div>
        <div className="flex h-[70vh] w-1/4 flex-col justify-start self-start">
          <Card className="ml-1 w-full !border-2 !border-gray-70 bg-gray-94 text-gray-20">
            <CardContent className="p-6">
              <div className="space-y-6">
                <MainStat label="Revenue" value={1325000} unit="/yr" blur={true} />
                <Separator className="bg-gray-20" />
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <StatItem
                    icon={MapPin}
                    label="Area"
                    value={parseFloat(totalArea.toFixed(2))}
                    unit="acres"
                    blur={false}
                  />
                  <StatItem icon={Zap} label="Energy" value={57.7} unit="MW/yr" blur={true} />
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="mb-4 mt-8">
            <span>
              <span className="blur-sm">Varun</span> wants to deploy{' '}
            </span>
            <span className="font-semibold">
              {' '}
              {deploymentType.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())}
              {', '}
            </span>
            <span className="">{getDeploymentDescription(deploymentType)}</span>
          </div>
          <div className="">
            <span>
              <span className="blur-sm">Varun</span> wants to finance it{' '}
            </span>
            <span className="font-semibold">
              {' '}
              {financeOption.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())}
              {', '}
            </span>
            <span className="">{getFinanceDescription(financeOption)}</span>
          </div>
          <Button
            theme="black"
            href={('https://cal.com/team/solarpunk/intro?project=' + submission_id) as Route}
            size="home-md"
            className="mt-auto cursor-pointer"
          >
            Request introduction
          </Button>
        </div>
      </div>
    </div>
  );
}

const getFakeAcreData = () => {
  return [
    [
      [
        {
          lat: 54.74850940001306,
          lng: 9.5696496963501,
        },
        {
          lat: 54.7490045267058,
          lng: 9.56986427307129,
        },
        {
          lat: 54.74789048313374,
          lng: 9.576001167297365,
        },
        {
          lat: 54.74573657865581,
          lng: 9.57437038421631,
        },
        {
          lat: 54.74677640891338,
          lng: 9.569435119628906,
        },
        {
          lat: 54.74781621247255,
          lng: 9.570078849792482,
        },
      ],
    ],
    [
      [
        {
          lat: 54.74427581962667,
          lng: 9.579863548278809,
        },
        {
          lat: 54.74650407499794,
          lng: 9.581494331359865,
        },
        {
          lat: 54.74519189500849,
          lng: 9.58531379699707,
        },
      ],
    ],
    [
      [
        {
          lat: 54.74068436474083,
          lng: 9.578275680541994,
        },
        {
          lat: 54.74288805778648,
          lng: 9.579219818115236,
        },
        {
          lat: 54.74264045780503,
          lng: 9.58364009857178,
        },
        {
          lat: 54.74046151270159,
          lng: 9.584283828735353,
        },
        {
          lat: 54.74006532827129,
          lng: 9.580979347229006,
        },
        {
          lat: 54.740907215554,
          lng: 9.580421447753908,
        },
      ],
    ],
  ];
};

export default SubmissionComponent;
