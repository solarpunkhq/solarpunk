'use client';

import { useLocale, useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';

import { useEffect, useState } from 'react';

import { Link } from '@/i18n/routing';
import { useRouter } from '@/i18n/routing';
import { getProjectionsFromAcres, getTotalAreaFromAcreData } from '@/utils/projections';
import { Acre } from '@/utils/types';
import * as L from 'leaflet';
import 'leaflet.gridlayer.googlemutant/dist/Leaflet.GoogleMutant';
import { CircleAlert, Leaf, Loader2, MapPin, Zap } from 'lucide-react';

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
  const t = useTranslations('OnboardingPage');
  const isGerman = useLocale() === 'de';

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
      const currentSiteURL = window.location.origin;

      const adjustedMagicLink = magic_link.replace(/^https?:\/\/[^\/]+/, currentSiteURL);

      router.push(adjustedMagicLink);
    }
  };

  const basePath =
    window.location.origin + window.location.pathname.split('/').slice(0, 2).join('/');
  return (
    <>
      <div className="w-full text-gray-12 sm:h-screen">
        <div className="h-full w-full flex-col items-center justify-center px-8 md:flex md:flex-row md:items-stretch md:justify-start">
          <div className="w-full flex-col items-center justify-start md:flex md:h-full">
            <div className="my-3 flex items-center justify-center self-start">
              <div
                className="flex cursor-pointer items-center"
                onClick={() => (window.location.href = `${basePath}/`)}
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
          <div className="w-full pb-8 md:ml-4 md:h-full md:max-h-screen md:max-w-96">
            <div className="mt-8 flex h-full max-h-[90vh] flex-col justify-between rounded-xl border-2 border-gray-80 bg-gray-98 p-4 md:mt-16">
              <div>
                <h1 className="font-title text-28 font-bold">{t('title')}</h1>
                <div className="my-2">{t('description')}</div>
              </div>

              <div className="relative mb-4 flex-col overflow-x-auto text-sm">
                <div className="flex h-full flex-col justify-between">
                  <Card className="ml-1 mt-6 w-[97%] !border-2 !border-gray-70 bg-gray-94 text-gray-20">
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        <MainStat
                          label={t('revenue_label')}
                          value={
                            isGerman
                              ? projections.revenue_per_year * 0.93
                              : projections.revenue_per_year
                          }
                          unit={t('revenue_unit')}
                        />
                        <Separator className="bg-gray-20" />
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                          {country === 'US' || country === 'UK' ? (
                            <StatItem
                              icon={MapPin}
                              label={t('area_label')}
                              value={parseFloat(totalArea.toFixed(1))}
                              unit={t('area_unit_acres')}
                            />
                          ) : (
                            <StatItem
                              icon={MapPin}
                              label={t('area_label')}
                              value={parseFloat((totalArea / 2.471).toFixed(1))}
                              unit={t('area_unit_ha')}
                            />
                          )}
                          <StatItem
                            icon={Zap}
                            label={t('energy_label')}
                            value={parseFloat(projections.mw_produced.toFixed(1))}
                            unit={t('energy_unit')}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <div className="my-2 ml-1 flex text-13 text-gray-40">
                    <span>
                      <CircleAlert className="relative -top-px inline h-4 w-4" />{' '}
                      {t('estimates_notice')}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="ml-1 text-base font-semibold">{t('name_label')}</div>
                <Input
                  placeholder={t('name_placeholder')}
                  className="!ml-1 !w-[97%] !border-2 !border-gray-70"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <div className="ml-1 mt-4 text-base font-semibold">{t('email_label')}</div>
                <Input
                  placeholder={t('email_placeholder')}
                  className="!ml-1 !w-[97%] !border-2 !border-gray-70"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="my-2 ml-1 flex text-13 text-gray-40">
                <span>
                  {t('terms_agreement')}{' '}
                  <Link className="underline" href="/terms">
                    {t('terms_link')}
                  </Link>
                  . {t('privacy_policy_text')}{' '}
                  <Link className="underline" href="/privacy">
                    {t('privacy_policy_link')}
                  </Link>
                  .
                </span>
              </div>

              <div className="-mx-[18px] -mb-[18px] flex flex-col items-center justify-center rounded-b-2xl bg-gray-20 pb-4">
                {error && <div className="text-primary-red">{error}</div>}
                <div className="flex gap-2">
                  <Button
                    className="mt-4"
                    size="home-md"
                    theme="black"
                    href="https://cal.com/team/solarpunk/exploration"
                  >
                    {t('contact_us')}
                  </Button>
                  <Button
                    className="mt-4"
                    size="home-md"
                    theme="green"
                    disabled={email.length === 0 || name.length === 0}
                    onClick={() => {
                      submitForm();
                    }}
                  >
                    {loading && (
                      <div className="px-8">
                        <Loader2 className="h-4 w-4 animate-spin" />
                      </div>
                    )}
                    {loading ? t('loading_message') : t('continue_button')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Onboarding;
