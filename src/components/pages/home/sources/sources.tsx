import { Route } from 'next';
import Image from 'next/image';

import bg from '@/images/sources/sources.jpg';

import Card from './card';

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

function Sources() {
  return (
    <section className="sources relative px-safe">
      <ul className="container grid max-w-[1376px] grid-cols-3 gap-[30px] py-60 text-white lg:gap-6 lg:pb-44 lg:pt-[168px] md:max-w-[706px] md:py-[88px] sm:gap-5 sm:py-16">
        {cards.map((item, index) => {
          return <Card {...item} key={index} />;
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
  );
}

export default Sources;
