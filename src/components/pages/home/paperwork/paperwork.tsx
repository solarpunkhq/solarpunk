'use client';

import { useTranslations } from 'next-intl';

import ArrowIcon from '@/svgs/icons/down-arrow.inline.svg';

import { Animation } from './animation';
import Card from './card';
import Marquee from './marquee';

const animations = {
  microclimate: {
    src: '/animations/pages/home/paperwork/microclimate.riv',
    className:
      'absolute inset-0 left-1/2 h-full w-full -translate-x-1/2 home-lg:aspect-[1.27] home-lg:w-auto home-md:h-auto home-md:w-full home-sm:h-full home-sm:w-auto',
  },
  dual: {
    src: '/animations/pages/home/paperwork/dual.riv',
    className:
      'absolute inset-0 left-1/2 h-full w-full -translate-x-1/2 top-1/2 -translate-y-1/2 home-xl:scale-[0.9] home-xl:-translate-y-[48%] home-lg:-translate-y-1/2 home-lg:scale-[0.9] home-lg:aspect-[1.27] home-lg:w-auto home-md:h-auto home-md:-translate-x-[47%] home-md:scale-[0.95] home-md:w-full home-sm:h-full home-sm:w-auto home-sm:scale-100 home-2xs:-translate-y-[57%] home-2xs:-translate-x-1/2 home-2xs:scale-[0.7]',
  },
};

const items = [{ text: 'listItem1' }, { text: 'listItem2' }];

function Paperwork() {
  const t = useTranslations('PaperworkComponent');
  return (
    <section className="paperwork mt-36 px-safe home-lg:mt-[119px] home-md:mt-[88px] home-sm:mt-20">
      <div className="container">
        <h2 className="max-w-[1128px] font-title text-60 font-semibold leading-dense tracking-tighter text-gray-20 home-lg:text-51 home-md:inline home-md:text-45 home-sm:block home-sm:text-33">
          {t('heading')}
        </h2>
        <p className="max-w-[1148px] font-title text-60 font-semibold leading-dense tracking-tighter text-gray-60 home-lg:text-51 home-md:ml-2 home-md:inline home-md:text-45 home-sm:ml-0 home-sm:block home-sm:text-33">
          {t('subheading')}
        </p>
        <div className="mt-12 flex items-center justify-between gap-8 home-lg:mt-[50px] home-md:mt-[37px] home-md:flex-col home-md:gap-6 home-sm:mt-[41px] home-sm:gap-5">
          <Card className="bg-[url('/images/pages/home/paperwork/bg-microclimate.jpg')] bg-cover bg-center bg-repeat">
            <ul className="fs-20 z-10 -ml-1.5 flex gap-x-8 gap-y-1 font-semibold home-2xl:flex-col home-lg:ml-0 home-md:flex-row home-md:gap-x-[34px] home-sm:flex-col">
              {items.map(({ text }, index) => (
                <li
                  className="flex items-center gap-2.5 leading-snug text-gray-20 home-lg:gap-3 home-md:gap-2.5"
                  key={index}
                >
                  <ArrowIcon className="w-3.5 fill-gray-20" />
                  <span>{t(text)}</span>
                </li>
              ))}
            </ul>
            <p className="fs-24 z-10 leading-normal tracking-tight text-gray-50 home-xl:text-22 home-sm:text-18">
              <span className="font-medium text-gray-20">{t('microclimateTitle')}</span>{' '}
              <span>{t('microclimateDescription')}</span>
            </p>
            <Animation {...animations.microclimate} />
          </Card>
          <Card className="bg-[url('/images/pages/home/paperwork/bg-dual.jpg')] bg-cover bg-center bg-repeat">
            <p className="z-10 flex flex-col gap-1.5 home-lg:gap-1 home-sm:gap-0.5">
              <span className="fs-20 font-semibold text-gray-50">{t('upTo')}</span>
              <span className="fs-40 font-medium leading-dense text-gray-20">
                {t('cropAndSolar')}
              </span>
              <span className="fs-20 font-semibold text-gray-50">{t('comparedToCropsOnly')}</span>
            </p>
            <p className="fs-24 z-10 leading-normal tracking-tight text-gray-50 home-xl:text-22 home-sm:text-18">
              <span className="font-medium text-gray-20">{t('dualUseTitle')}</span>{' '}
              <span>{t('dualUseDescription')}</span>
            </p>
            <Animation {...animations.dual} />
          </Card>
        </div>
        <Marquee />
      </div>
    </section>
  );
}

export default Paperwork;
