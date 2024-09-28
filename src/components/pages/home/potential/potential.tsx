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
    <section className="potential mt-[196px] px-safe home-xl:mt-[139px] home-md:mt-[129px] home-sm:mt-[116px]">
      <div className="container grid grid-cols-[auto_800px] grid-rows-2 justify-between gap-x-24 home-xl:grid-cols-[auto_700px] home-lg:grid-cols-[auto_480px] home-lg:grid-rows-[208px_auto] home-lg:items-end home-lg:gap-x-8 home-md:max-w-lg home-md:grid-cols-[448px] home-md:grid-rows-[auto_auto_auto] home-md:items-center home-md:gap-x-0 home-md:gap-y-11 home-sm:grid-cols-[minmax(320px,_1fr)] home-sm:gap-y-9">
        <div className="col-start-1 row-start-1 flex max-w-[640px] flex-col pb-12 pt-6 home-xl:pb-5 home-xl:pt-0 home-lg:max-w-[450px] home-lg:pb-0 home-md:col-span-full home-md:min-h-[auto]">
          <h2 className="max-w-[540px] font-title text-52 font-semibold leading-[1.2] tracking-tight text-gray-20 home-lg:text-44 home-md:text-36 home-sm:max-w-[289px] home-sm:text-29">
            Discover your farm&apos;s full potential
          </h2>
          <p className="mt-[19px] max-w-[540px] text-25 leading-snug tracking-tighter text-gray-40 home-lg:text-20 home-md:mt-5 home-md:text-18 home-sm:mt-4 home-sm:text-16">
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
