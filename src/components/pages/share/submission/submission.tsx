'use client';

import { Route } from 'next';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { useEffect, useState } from 'react';

import * as L from 'leaflet';

import Button from '@/components/shared/button';
import Map from '@/components/shared/map';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import sectionBg from '@/images/sources/sources.jpg';

console.log(L);

interface PublicInfo {
  total_area: string;
  deployment_type: string;
  finance_option: string;
}

function SubmissionComponent({ submission_id, locale }: { submission_id: string; locale: string }) {
  const t = useTranslations('translations');

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
    return (
      <div className="flex h-full w-full flex-col items-center justify-center p-5">Loading...</div>
    );
  }
  if (error || data === null || data === undefined) {
    return notFound();
  }

  let totalArea = parseFloat(data.total_area);
  if (locale === 'de') {
    totalArea = totalArea * 0.404686;
  }
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
      <div className="flex h-full w-full flex-col items-center justify-center p-5">
        User has not submitted additional details yet.
      </div>
    );
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-5 pt-[3.5rem] md:p-5">
      <Card className="w-full max-w-4xl bg-primary-offwhite">
        <CardHeader>
          <CardTitle className="flex w-full items-center justify-between">
            <div className="flex items-center justify-start gap-2">
              <img
                src="/images/pages/dashboard/lifecycle_icon.svg"
                className="h-10 w-10"
                alt=""
                role="presentation"
              />
              {t('share_title')}
            </div>
            <Button
              theme="green"
              href={('https://cal.com/team/solarpunk/intro?project=' + submission_id) as Route}
              size="home-sm"
              className="invisible hidden md:visible md:flex"
            >
              {t('share_request_intro')}
            </Button>
          </CardTitle>
          <CardDescription className="!text-pretty text-gray-12">
            <div className="flex gap-2">
              <Badge>{t('share_' + deploymentType)}</Badge>
              <Badge>{t('share_' + financeOption)}</Badge>
            </div>
            <p className="mt-2 text-sm">
              <span className="blur-sm">Varun</span>
              {t('share_subtitle_1')}{' '}
              <b>
                {totalAreaStr} {t('area_unit')}
              </b>{' '}
              {t('share_subtitle_2')}
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm md:grid md:gap-4">
          <div className="pointer-events-none h-full w-full blur-sm">
            <Map
              zoom={15}
              lat={lat}
              lng={lng}
              acres={null}
              setAcres={null}
              existingAcres={existing_acres}
              country="US"
              displayOnly={true}
            />
          </div>
          <Button
            theme="green"
            href={('https://cal.com/team/solarpunk/intro?project=' + submission_id) as Route}
            size="home-sm"
            className="visible mt-4 flex w-full md:invisible md:hidden"
          >
            {t('share_request_intro')}
          </Button>
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
