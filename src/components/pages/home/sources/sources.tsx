'use client';

import { Route } from 'next';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { LazyMotion, domAnimation, m } from 'framer-motion';

import { UseIsCardInView } from '@/hooks/use-is-card-in-view';

import bgBlurCard1Mobile from '@/images/sources/bg-blur-1-card-sm.png';
import bgBlurCard1 from '@/images/sources/bg-blur-1-card.png';
import bgBlurCard2 from '@/images/sources/bg-blur-2-card.png';
import bgBlurCard3 from '@/images/sources/bg-blur-3-card.png';
import sectionBg from '@/images/sources/sources.jpg';

import CardContent from './card-content';

const cards = [
  {
    title: 'card1Title',
    subtitle: 'card1Subtitle',
    type: 'card1Type',
    year: 'card1Year',
    description: 'card1Description',
    text: 'card1Text',
    buttonText: 'card1ButtonText',
    buttonUrl:
      'https://www.fastcompany.com/90861486/agrivoltaics-crops-under-solar-panels-good-for-panels' as Route<string>,
    blurImg: bgBlurCard1,
    blurImgMobile: bgBlurCard1Mobile,
  },
  {
    title: 'card2Title',
    subtitle: 'card2Subtitle',
    type: 'card2Type',
    year: 'card2Year',
    description: 'card2Description',
    text: 'card2Text',
    buttonText: 'card2ButtonText',
    buttonUrl:
      'https://www.weforum.org/agenda/2022/07/agrivoltaic-farming-solar-energy/' as Route<string>,
    blurImg: bgBlurCard2,
  },
  {
    title: 'card3Title',
    subtitle: 'card3Subtitle',
    type: 'card3Type',
    year: 'card3Year',
    description: 'card3Description',
    text: 'card3Text',
    buttonText: 'card3ButtonText',
    buttonUrl:
      'https://joint-research-centre.ec.europa.eu/jrc-news-and-updates/agrivoltaics-alone-could-surpass-eu-photovoltaic-2030-goals-2023-10-12_en' as Route<string>,
    blurImg: bgBlurCard3,
  },
];

const variants = {
  hidden: {
    opacity: 0,
    scale: 1.05,
    y: -60,
    backdropFilter: 'blur(0px)',
    WebkitBackdropFilter: 'blur(0px)',
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    backdropFilter: 'blur(32px)',
    WebkitBackdropFilter: 'blur(32px)',
    transition: {
      opacity: { duration: 1, ease: 'linear', delay: i * 0.2 },
      y: { duration: 1, ease: [0.35, 0.01, 0, 1], delay: i * 0.2 },
      scale: { duration: 1, ease: [0.35, 0.01, 0, 1], delay: i * 0.2 },
    },
  }),
};

const contentVariants = {
  hidden: { opacity: 0, delay: 0.5 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { duration: 1, delay: i * 0.25 },
  }),
};

function Sources() {
  const t = useTranslations('SourcesComponent');

  return (
    <LazyMotion features={domAnimation}>
      <section className="sources relative px-safe">
        <ul className="container grid max-w-[1376px] grid-cols-3 gap-[30px] py-60 text-white home-lg:gap-6 home-lg:pb-44 home-lg:pt-[168px] home-md:max-w-[706px] home-md:py-[88px] home-sm:gap-5 home-sm:py-16">
          {cards.map((item, index) => {
            const { ref, inView } = UseIsCardInView({ threshold: 0.4 });

            return (
              <m.li
                key={index}
                custom={index}
                ref={ref}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={variants}
                className="relative overflow-hidden rounded-xl bg-[url('/images/pages/home/sources/noise.png')] bg-center bg-repeat p-8 shadow-sources-card home-lg:p-6 home-md:col-span-full"
              >
                <m.div
                  custom={index}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  variants={contentVariants}
                  className="flex flex-col home-md:min-h-[252px] home-md:flex-row home-sm:flex-col"
                >
                  <CardContent
                    {...{
                      ...item,
                      title: t(item.title),
                      subtitle: t(item.subtitle),
                      type: t(item.type),
                      year: Number(t(item.year)),
                      description: t(item.description),
                      text: t(item.text),
                      buttonText: t(item.buttonText),
                    }}
                  />
                </m.div>
              </m.li>
            );
          })}
        </ul>
        <Image
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
          src={sectionBg}
          width={1920}
          height={1104}
          alt=""
        />
        <div className="absolute inset-0 -z-10 bg-[url('/images/pages/home/sources/noise.png')] bg-repeat opacity-10" />
      </section>
    </LazyMotion>
  );
}

export default Sources;
