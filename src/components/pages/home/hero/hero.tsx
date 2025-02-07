'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

import HlsVideo from '@/components/shared/hls-video';
import SearchForm from '@/components/shared/search-form';

import stickerImage from '@/images/hero/sticker.png';

const videoProps = {
  src: {
    mp4: '/videos/pages/home/hero/hero.mp4?updated=20240919122356',
    m3u8: '/videos/pages/home/hero/hero.m3u8?updated=20240919120548',
  },
  videoClassName: 'absolute inset-0 h-full w-full object-cover object-center ',
};

function Hero() {
  const t = useTranslations('translations');

  return (
    <section className="hero relative bg-hero-bg bg-cover bg-center pb-9 pt-[158px] px-safe home-lg:pb-[47px] home-md:pb-[39px] home-sm:pb-8">
      <div className="container ">
        <div className="relative z-20 flex max-w-[726px] flex-col text-white">
          <h1 className="font-title text-96 font-semibold leading-[0.96] tracking-snug home-lg:text-81 home-md:text-60 home-sm:text-41">
            {t('hero_heading')} <br />
            {t('hero_heading_line_break')}
          </h1>
          <p className="mt-3.5 max-w-[480px] text-24 font-normal leading-tight home-lg:max-w-[430px] home-lg:text-20 home-md:max-w-[380px] home-md:text-18 home-sm:max-w-[360px] home-sm:text-16">
            {t('hero_subtext')}
          </p>
          <SearchForm className="mt-[66px] home-md:mt-[50px]" />
        </div>
        <Image
          className="relative z-20 ml-auto mr-32 mt-[267px] rounded-lg shadow-mission-sticker home-lg:mr-0 home-lg:mt-[120px] home-md:mt-[280px] home-sm:mt-[180px] home-sm:h-[60px] home-sm:w-[78px]"
          src={stickerImage}
          width={104}
          height={80}
          alt=""
          quality={90}
          priority
        />
        <HlsVideo {...videoProps} />
      </div>
      <div className="hero-noise absolute bottom-0 left-0 right-0 top-0 -z-10 bg-[url('/images/pages/home/sources/noise.png')] bg-repeat opacity-10" />
      <span className="hero-shadow absolute bottom-0 left-0 right-0 top-0 hidden bg-hero-sm home-sm:block" />
    </section>
  );
}

export default Hero;
