import { Route } from 'next';

import Slider from './slider';

const sliderTextContent = [
  {
    title: 'Exploration',
    description:
      'We will help you understand what type of Agrivoltaic project is right for you and what type of regulatory hurdles you will face. While we primarily focus on agrivoltaics, we also offer solar deployments for any non-agricultural land except residential roofs.',
    buttonText: 'Learn more',
    buttonLink: '/' as Route<string>,
  },
  {
    title: 'Planning',
    description:
      "We'll turn the research results into a plan and get the necessary permits to start your project. We help you with the paperwork and the planning.",
    buttonText: 'Learn more',
    buttonLink: '/' as Route<string>,
  },
  {
    title: 'Financing',
    description:
      'We partner with dept firms who can help you finance your project and who have years of experience in the energy sector.',
    buttonText: 'Learn more',
    buttonLink: '/' as Route<string>,
  },
  {
    title: 'Deployment',
    description:
      'Solarpunk works with a dedicated team of engineers and electricians to deploy your project. We take care of the entire process and optimise for speed to get your project up and running faster than the traditional way of photovoltaics.',
    buttonText: 'Learn more',
    buttonLink: '/' as Route<string>,
  },
];

function Potential() {
  return (
    <section className="potential mt-[196px] px-safe xl:mt-[139px] md:mt-[129px] sm:mt-[116px]">
      <div className="container grid grid-cols-[auto_800px] grid-rows-2 justify-between gap-x-24 xl:grid-cols-[auto_700px] lg:grid-cols-[auto_480px] lg:grid-rows-[208px_auto] lg:items-end lg:gap-x-8 md:max-w-lg md:grid-cols-[448px] md:grid-rows-[auto_auto_auto] md:items-center md:gap-x-0 md:gap-y-11 sm:grid-cols-[minmax(320px,_1fr)] sm:gap-y-9">
        <div className="col-start-1 row-start-1 flex max-w-[640px] flex-col pb-12 pt-6 xl:pb-5 xl:pt-0 lg:max-w-[450px] lg:pb-0 md:col-span-full md:min-h-[auto]">
          <h2 className="max-w-[540px] font-title text-52 font-semibold leading-[1.2] tracking-tight text-gray-20 lg:text-44 md:text-36 sm:max-w-[289px] sm:text-29">
            Discover your farm&apos;s full potential
          </h2>
          <p className="mt-[19px] max-w-[540px] text-25 leading-snug tracking-tighter text-gray-40 lg:text-20 md:mt-5 md:text-18 sm:mt-4 sm:text-16">
            Transform your fields with solar technology, fostering a thriving environment that
            supports longer and healthier crop cycles.
          </p>
        </div>
        <Slider sliderTextContent={sliderTextContent} />
      </div>
    </section>
  );
}

export default Potential;
