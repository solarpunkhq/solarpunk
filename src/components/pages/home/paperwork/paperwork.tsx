'use client';

import { useInView } from 'react-intersection-observer';

import clsx from 'clsx';

import ArrowIcon from '@/svgs/icons/down-arrow.inline.svg';
import PixelArrowIcon from '@/svgs/icons/pixel-arrow.inline.svg';

import { Animation } from './animation';
import Card from './card';

const arrowsQty = new Array(4).fill(null);

const animations = {
  microclimate: {
    src: '/animations/pages/home/paperwork/microclimate.riv',
    className:
      'absolute inset-0 left-1/2 h-full w-full -translate-x-1/2 lg:aspect-[1.27] lg:w-auto md:h-auto md:w-full sm:h-full sm:w-auto',
  },
  dual: {
    src: '/animations/pages/home/paperwork/dual.riv',
    className:
      'absolute inset-0 left-1/2 h-full w-full -translate-x-1/2 top-1/2 -translate-y-1/2 xl:scale-[0.9] xl:-translate-y-[48%] lg:-translate-y-1/2 lg:scale-[0.9] lg:aspect-[1.27] lg:w-auto md:h-auto md:-translate-x-[47%] md:scale-[0.95] md:w-full sm:h-full sm:w-auto sm:scale-100 2xs:-translate-y-[57%] 2xs:-translate-x-1/2 2xs:scale-[0.7]',
  },
};

const items = [
  {
    text: 'Reduces heat stress',
  },
  {
    text: 'Reduces evaporation',
  },
];

function Paperwork() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-300px 0px',
  });

  return (
    <section className="paperwork mt-36 px-safe lg:mt-[119px] md:mt-[88px] sm:mt-20">
      <div className="container">
        <h2 className="max-w-[1128px] font-title text-60 font-semibold leading-dense tracking-tighter text-gray-20 lg:text-51 md:inline md:text-45 sm:block sm:text-33">
          We&apos;re here to support your solar ambitions.
        </h2>
        <p className="max-w-[1148px] font-title text-60 font-semibold leading-dense tracking-tighter text-gray-60 lg:text-51 md:ml-2 md:inline md:text-45 sm:ml-0 sm:block sm:text-33">
          From initial sketches to the growing pains of success, we&apos;ve got you covered.
        </p>
        <div className="mt-12 flex items-center justify-between gap-8 lg:mt-[50px] md:mt-[37px] md:flex-col md:gap-6 sm:mt-[41px] sm:gap-5">
          <Card className="bg-[url('/images/pages/home/paperwork/bg-microclimate.jpg')] bg-cover bg-center bg-repeat">
            <ul className="fs-20 z-10 -ml-1.5 flex gap-x-8 gap-y-1 font-semibold lg:ml-0 lg:flex-col md:flex-row md:gap-x-[34px] sm:flex-col">
              {items.map(({ text }, index) => {
                return (
                  <li
                    className="flex items-center gap-2.5 leading-snug text-gray-20 lg:gap-3 md:gap-2.5"
                    key={index}
                  >
                    <ArrowIcon className="w-3.5 fill-gray-20" />
                    <span>{text}</span>
                  </li>
                );
              })}
            </ul>
            <p className="fs-24 z-10 leading-normal tracking-tight text-gray-50 xl:text-22 sm:text-18">
              <span className="font-medium text-gray-20">Microclimate Creation.</span>{' '}
              <span>
                Solar panels provide partial shade to the crops below, creating a microclimate that
                potentially extends growing seasons.
              </span>
            </p>
            <Animation {...animations.microclimate} />
          </Card>
          <Card className="bg-[url('/images/pages/home/paperwork/bg-dual.jpg')] bg-cover bg-center bg-repeat">
            <p className="z-10 flex flex-col gap-1.5 lg:gap-1 sm:gap-0.5">
              <span className="fs-20 font-semibold text-gray-50">Up to</span>
              <span className="fs-40 font-medium leading-dense text-gray-20">
                160% Crop + Solar
              </span>
              <span className="fs-20 font-semibold text-gray-50">
                comparing to 100% Crop yields
              </span>
            </p>
            <p className="fs-24 z-10 leading-normal tracking-tight text-gray-50 xl:text-22 sm:text-18">
              <span className="font-medium text-gray-20">Dual Use.</span>{' '}
              <span>
                By installing solar panels above the crops, the same land can produce both food and
                energy, utilizing resourcecs to their fullest potential.
              </span>
            </p>
            <Animation {...animations.dual} />
          </Card>
        </div>
        <div
          className="mt-8 rounded-xl bg-gray-20 py-[38px] lg:py-[35px] md:mt-6 md:py-[34px] sm:mt-5 sm:py-[18px]"
          ref={ref}
        >
          <div className="ml-[-86px] flex items-center justify-center gap-[30px] lg:ml-0 sm:flex-col sm:gap-[9px]">
            <p
              className={clsx(
                'first-title fs-28 uppercase leading-none tracking-tight sm:text-16',
                inView && 'animate-first-title',
              )}
            >
              Less paperwork
            </p>
            <div className="flex gap-[18px] sm:hidden">
              {arrowsQty.map((_, index) => {
                return (
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={clsx(inView && 'arrow')}
                    key={index}
                  >
                    <g clipPath="url(#clip0_3164_48264)">
                      <rect
                        x="0.333333"
                        y="0.333333"
                        width="3.33333"
                        height="3.33333"
                        stroke="#2E3038"
                        className="column1"
                      />
                      <rect
                        x="4.33333"
                        y="4.33333"
                        width="3.33333"
                        height="3.33333"
                        stroke="#2E3038"
                        strokeWidth="0.666667"
                        className="column1"
                      />
                      <rect
                        x="8.33138"
                        y="8.33333"
                        width="3.33333"
                        height="3.33333"
                        stroke="#2E3038"
                        strokeWidth="0.666667"
                        className="column1"
                      />
                      <rect
                        x="4.33333"
                        y="12.3333"
                        width="3.33333"
                        height="3.33333"
                        stroke="#2E3038"
                        strokeWidth="0.666667"
                        className="column1"
                      />
                      <rect
                        x="0.333333"
                        y="16.3333"
                        width="3.33333"
                        height="3.33333"
                        stroke="#2E3038"
                        strokeWidth="0.666667"
                        className="column1"
                      />
                      <rect
                        x="12.3353"
                        y="8.33333"
                        width="3.33333"
                        height="3.33333"
                        stroke="#2E3038"
                        strokeWidth="0.666667"
                        className="column2"
                      />
                      <rect
                        x="8.33138"
                        y="4.33333"
                        width="3.33333"
                        height="3.33333"
                        stroke="#2E3038"
                        strokeWidth="0.666667"
                        className="column2"
                      />
                      <rect
                        x="4.33333"
                        y="16.3333"
                        width="3.33333"
                        height="3.33333"
                        stroke="#2E3038"
                        strokeWidth="0.666667"
                        className="column2"
                      />
                      <rect
                        x="4.33333"
                        y="0.333333"
                        width="3.33333"
                        height="3.33333"
                        stroke="#2E3038"
                        strokeWidth="0.666667"
                        className="column2"
                      />
                      <rect
                        x="8.33138"
                        y="12.3333"
                        width="3.33333"
                        height="3.33333"
                        stroke="#2E3038"
                        strokeWidth="0.666667"
                        className="column2"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3164_48264">
                        <rect width="16" height="20" />
                      </clipPath>
                    </defs>
                  </svg>
                );
              })}
            </div>
            <PixelArrowIcon
              className={clsx(
                'hidden w-3 rotate-90 fill-gray-40 sm:block',
                inView && 'single-arrow-animation',
              )}
            />
            <p
              className={clsx(
                'second-title fs-28 uppercase leading-none tracking-tight sm:text-16',
                inView && 'animate-second-title',
              )}
            >
              More action
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Paperwork;
