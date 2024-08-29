import { Route } from 'next';
import Link from 'next/link';

import ArrowIcon from '@/svgs/icons/button-arrow.inline.svg';
import PixelArrowIcon from '@/svgs/icons/pixel-arrow.inline.svg';

import Card from './card';
import CardContent from './card-content';

const arrowsQty = new Array(4).fill(1);

const links = [
  {
    text: 'Reduces heat stress',
    to: '/' as Route<string>,
  },
  {
    text: 'Reduces evaporation',
    to: '/' as Route<string>,
  },
];

function Paperwork() {
  return (
    <section className="paperwork mt-36 px-safe lg:mt-[121px] md:mt-[88px] sm:mt-20">
      <div className="container">
        <p className="fs-64 max-w-[1120px] font-title font-normal leading-[1.05] tracking-[-0.045em] text-gray-20 md:inline sm:block">
          We&apos;re here to support your solar ambitions.
        </p>
        <p className="fs-64 max-w-[1120px] font-title font-normal leading-[1.05] tracking-[-0.045em] text-gray-60 md:ml-2 md:inline sm:ml-0 sm:block">
          From initial sketches to the growing pains of success, we&apos;ve got you covered.
        </p>

        <div className="mt-12 flex items-center justify-between gap-8 lg:mt-11 md:mt-[38px] md:flex-col md:gap-6 sm:gap-5">
          <Card>
            <div className="fs-20 flex gap-x-8 gap-y-1 font-semibold lg:flex-col md:flex-row sm:flex-col">
              {links.map(({ text, to }, index) => {
                return (
                  <Link
                    className="group flex items-center gap-1.5 leading-snug"
                    href={to}
                    key={index}
                  >
                    <ArrowIcon className="w-5 rotate-90 transition-all duration-100 group-hover:rotate-[90]" />
                    <span>{text}</span>
                  </Link>
                );
              })}
            </div>
            <CardContent
              title="Microclimate Creation."
              subtitle="Solar panels provide partial shade to the crops below, creating a microclimate
                  that potentially extends growing seasons."
            />
          </Card>
          <Card>
            <p className="flex flex-col gap-1.5 lg:gap-1 sm:gap-0.5">
              <span className="fs-20 font-semibold text-gray-50">Up to</span>
              <span className="fs-40 font-medium leading-dense">160% Crop + Solar</span>
              <span className="fs-20 font-semibold text-gray-50">
                comparing to 100% Crop yields
              </span>
            </p>
            <CardContent
              title="Dual Use."
              subtitle="By installing solar panels above the crops, the same land can produce both food
                  and energy, utilizing resourcecs to their fullest potential."
            />
          </Card>
        </div>
        <div className="mt-8 rounded-xl bg-gray-20 py-[38px] lg:py-[35px] md:mt-6 md:py-[34px] sm:mt-5 sm:py-[18px]">
          <div className="ml-[-86px] flex items-center justify-center gap-[30px] lg:ml-0 sm:flex-col sm:gap-[9px]">
            <p className="fs-28 uppercase leading-none tracking-tight text-gray-40 sm:text-16">
              Less paperwork
            </p>
            <div className="flex gap-[18px] sm:hidden">
              {arrowsQty.map((_, index) => {
                return <PixelArrowIcon className="arrow w-4" key={index} />;
              })}
            </div>
            <PixelArrowIcon className="single-arrow hidden w-3 rotate-90 fill-white sm:block" />
            <p className="fs-28 uppercase leading-none tracking-tighter text-white sm:text-16">
              More action
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Paperwork;
