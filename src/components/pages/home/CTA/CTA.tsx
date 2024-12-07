'use client';

import { Route } from 'next';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import Button from '@/components/shared/button';

import { ROUTE } from '@/constants/route';

import fieldImage from '@/images/cta/field-with-flower.jpg';
import greyBgImage from '@/images/cta/gray-bg-blured.jpg';

import Card from './card';

function CTA() {
  const t = useTranslations('translations');

  return (
    <section className="cta mt-[230px] px-safe home-xl:mt-[168px] home-lg:mt-[155px] home-md:mt-[136px] home-sm:mt-[104px]">
      <div className="container home-xl:max-w-5xl">
        <div className="flex items-center justify-between gap-8 home-md:flex-col home-md:gap-6 home-sm:gap-6">
          <Card secondaryBg="bg-cta-card-bg home-sm:bg-cta-card-bg-sm">
            <h2 className="font-title text-44 font-semibold leading-[1.2] tracking-tight text-white home-xl:text-40 home-lg:text-37 home-md:max-w-[500px] home-md:text-29 home-sm:text-26">
              {t('card1Title')}
            </h2>
            <div className="flex items-end justify-between gap-3.5 home-xl:flex-col home-xl:items-start home-md:flex-row home-md:items-end home-sm:flex-col home-sm:items-start home-sm:gap-y-5">
              <p className="fs-20 max-w-[480px] font-medium leading-snug tracking-tighter text-white home-xl:max-w-[404px] home-md:max-w-[452px] home-sm:text-16">
                {t('card1Description')}
              </p>
              <Button
                className="group shrink-0 gap-0.5 home-lg:gap-0 home-sm:gap-0"
                size="home-md"
                theme="green"
                href={'/' as Route}
                withArrow
              >
                {t('card1ButtonText')}
              </Button>
              <Image
                className="absolute inset-0 -z-10 h-full w-full translate-x-[13px] scale-[1.135] object-cover object-center home-lg:translate-x-[59px] home-lg:translate-y-[-11px] home-lg:scale-[1.44] home-md:translate-x-[-25px] home-md:translate-y-[-27px] home-md:scale-[1.213] home-sm:translate-x-[61px] home-sm:translate-y-[-55px] home-sm:scale-[1.75]"
                src={fieldImage}
                width={854}
                height={854}
                alt=""
              />
            </div>
          </Card>
          <Card className="home-sm:min-h-[383px] home-sm:justify-start home-sm:gap-y-2">
            <h2 className="max-w-[430px] font-title text-60 font-semibold leading-[1.16] tracking-tight text-gray-20 home-xl:max-w-[392px] home-xl:text-52 home-md:max-w-[352px] home-md:text-45 home-sm:text-30">
              {t('card2Title')}
            </h2>
            <div className="flex items-end justify-between gap-3.5 home-xl:flex-col home-xl:items-start home-md:flex-row home-md:items-end home-sm:flex-col home-sm:items-start home-sm:gap-y-5">
              <p className="fs-20 max-w-[327px] font-medium leading-snug tracking-tighter text-gray-50 home-xl:max-w-[299px] home-md:max-w-[372px] home-md:text-20 home-sm:max-w-[245px] home-sm:text-16">
                {t('card2Description')}
              </p>
              <Button
                className="group shrink-0 gap-0.5 home-lg:gap-0 home-sm:gap-0"
                size="home-md"
                theme="white"
                href={ROUTE.contactUs}
                withArrow
              >
                {t('card2ButtonText')}
              </Button>
            </div>
            <Image
              className="absolute inset-0 -z-10 h-full w-full translate-x-[19px] scale-[1.15] object-cover object-center home-lg:translate-x-[34px] home-md:translate-x-[13px] home-md:scale-[1.23] home-sm:translate-y-[-22px] home-sm:scale-x-[1.33] home-sm:scale-y-[1.33]"
              src={greyBgImage}
              width={865}
              height={750}
              alt=""
            />
          </Card>
        </div>
      </div>
    </section>
  );
}

export default CTA;
