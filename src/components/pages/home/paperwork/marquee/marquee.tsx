'use client';

import { useTranslations } from 'next-intl';

import { useInView } from 'react-intersection-observer';

import clsx from 'clsx';

import PixelArrowIcon from '@/svgs/icons/pixel-arrow.inline.svg';

const arrowsQty = new Array(4).fill(null);

function Marquee() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-300px 0px',
  });

  const t = useTranslations('translations');

  return (
    <div
      className="mt-8 rounded-xl bg-gray-20 py-[38px] home-lg:py-[35px] home-md:mt-6 home-md:py-[34px] home-sm:mt-5 home-sm:py-6"
      ref={ref}
    >
      <div className="ml-[-86px] flex items-center justify-center gap-[30px] home-lg:ml-0 home-sm:gap-4">
        <p
          className={clsx(
            'first-title fs-28 font-medium uppercase leading-none tracking-tight home-sm:text-15 home-sm:tracking-tighter',
            inView && 'animate-first-title',
          )}
        >
          {t('paperwork_marquee_lessPaperwork')}
        </p>
        <div className="flex gap-[18px] home-sm:hidden">
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
            'hidden w-3 fill-gray-40 home-sm:block',
            inView && 'single-arrow-animation',
          )}
        />
        <p
          className={clsx(
            'second-title fs-28 font-medium uppercase leading-none tracking-tight home-sm:text-15 home-sm:tracking-tighter',
            inView && 'animate-second-title',
          )}
        >
          {t('paperwork_marquee_moreAction')}
        </p>
      </div>
    </div>
  );
}

export default Marquee;
