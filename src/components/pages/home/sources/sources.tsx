'use client';

import { Route } from 'next';
import Image from 'next/image';

import { useRef } from 'react';

import { LazyMotion, domAnimation, m, useInView } from 'framer-motion';

import bg from '@/images/sources/sources.jpg';

import CardContent from './card-content';

const cards = [
  {
    title: 'HARVESTING',
    subtitle: 'SYNERGY',
    type: 'Report',
    year: 2019,
    description:
      'Growing crops under solar panels makes food — and creates healthier solar panels.',
    text: 'Agrivoltaics, putting agriculture under solar installations, is a good way to maximize land use. It also makes the solar panels last longer.',
    buttonText: 'Go to source',
    buttonUrl: '/' as Route<string>,
  },
  {
    title: 'AGRIVOLTAIC',
    subtitle: 'FARMING',
    type: 'Report',
    year: 2019,
    description: `Can crops grow better under solar panels? Here's all you need to know about 'agrivoltaic farming'.`,
    buttonText: 'Go to source',
    text: 'Agrivoltaic farming is the practice of growing crops underneath solar panels. Scientific studies show some crops thrive when grown in this way.',
    buttonUrl: '/' as Route<string>,
  },
  {
    title: 'SHADED',
    subtitle: 'SUCCESS',
    type: 'Report',
    year: 2019,
    text: 'A study shows that growing peppers and tomatoes under PV modules boosts U.S. dryland harvests.',
    buttonText: 'Go to source',
    description:
      'How food crops thrive and flourish in the beneficial shade provided by solar energy panels.',
    buttonUrl: '/' as Route<string>,
  },
];

const variants = {
  hidden: {
    opacity: 0,
    y: -20,
    backdropFilter: 'blur(0px)',
    WebkitBackdropFilter: 'blur(0px)',
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    backdropFilter: 'blur(64px)',
    WebkitBackdropFilter: 'blur(64px)',
    transition: {
      delay: i * 0.1,
      duration: 0.8,
    },
  }),
};

function Sources() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-200px 0px' });

  return (
    <LazyMotion features={domAnimation}>
      <section className="sources relative px-safe" ref={ref}>
        <ul className="container grid max-w-[1376px] grid-cols-3 gap-[30px] py-60 text-white lg:gap-6 lg:pb-[176px] lg:pt-[168px] md:max-w-[706px] md:py-[88px] sm:gap-5 sm:py-16">
          {cards.map((item, index) => {
            return (
              <m.li
                key={index}
                custom={index}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={variants}
                className="relative flex flex-col overflow-hidden rounded-xl bg-[url('/images/pages/home/sources/noise.png')] bg-center bg-repeat p-8 shadow-sources-card lg:p-6 md:col-span-full md:min-h-[300px] md:flex-row sm:flex-col"
              >
                <CardContent {...item} />
              </m.li>
            );
          })}
        </ul>
        <Image
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
          src={bg}
          width={1920}
          height={1104}
          alt=""
        />
      </section>
    </LazyMotion>
  );
}

export default Sources;
