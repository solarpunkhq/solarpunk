'use client';

import { Route } from 'next';
import { useTranslations } from 'next-intl';

import Slider from './slider';

function Potential() {
  const t = useTranslations('PotentialComponent');

  const sliderTextContent = [
    {
      title: t('sliderItem1Title'),
      description: t('sliderItem1Description'),
      buttonText: t('sliderButtonText'),
      buttonLink: '/' as Route<string>,
    },
    {
      title: t('sliderItem2Title'),
      description: t('sliderItem2Description'),
      buttonText: t('sliderButtonText'),
      buttonLink: '/' as Route<string>,
    },
    {
      title: t('sliderItem3Title'),
      description: t('sliderItem3Description'),
      buttonText: t('sliderButtonText'),
      buttonLink: '/' as Route<string>,
    },
    {
      title: t('sliderItem4Title'),
      description: t('sliderItem4Description'),
      buttonText: t('sliderButtonText'),
      buttonLink: '/' as Route<string>,
    },
  ];

  return (
    <section className="potential mt-[196px] px-safe home-xl:mt-[139px] home-md:mt-[129px] home-sm:mt-[116px]">
      <div className="container grid grid-cols-[auto_800px] grid-rows-2 justify-between gap-x-24 home-xl:grid-cols-[auto_700px] home-lg:grid-cols-[auto_480px] home-lg:grid-rows-[208px_auto] home-lg:items-end home-lg:gap-x-8 home-md:max-w-lg home-md:grid-cols-[448px] home-md:grid-rows-[auto_auto_auto] home-md:items-center home-md:gap-x-0 home-md:gap-y-11 home-sm:grid-cols-[minmax(320px,_1fr)] home-sm:gap-y-9">
        <div className="col-start-1 row-start-1 flex max-w-[640px] flex-col pb-12 pt-6 home-xl:pb-5 home-xl:pt-0 home-lg:max-w-[450px] home-lg:pb-0 home-md:col-span-full home-md:min-h-[auto]">
          <h2 className="max-w-[540px] font-title text-52 font-semibold leading-[1.2] tracking-tight text-gray-20 home-lg:text-44 home-md:text-36 home-sm:max-w-[289px] home-sm:text-29">
            {t('heading')}
          </h2>
          <p className="mt-[19px] max-w-[540px] text-25 leading-snug tracking-tighter text-gray-40 home-lg:text-20 home-md:mt-5 home-md:text-18 home-sm:mt-4 home-sm:text-16">
            {t('description')}
          </p>
        </div>
        <Slider sliderTextContent={sliderTextContent} />
      </div>
    </section>
  );
}

export default Potential;
