import Image from 'next/image';

import clsx from 'clsx';

import panelImage from '@/images/farm/panel.jpg';

import IconAnimation from './icon-animation';

const items = [
  {
    text: 'Reduce reliance on fossil fuels and lower greenhouse gas emissions.',
    artboard: 'icon-1',
  },
  {
    text: 'Install solar panels to earn revenue from solar energy and reduce energy costs.',
    artboard: 'icon-2',
  },
  {
    text: 'Benefit from government incentives, grants, and tax credits for renewable energy projects. ',
    artboard: 'icon-3',
  },
];

function Farm() {
  return (
    <section className="farm mb-[220px] mt-[219px] px-safe lg:mb-[157px] lg:mt-40 md:mb-[135px] md:mt-[136px] sm:mb-[106px] sm:mt-[103px]">
      <div className="container flex max-w-[1408px] justify-between lg:gap-x-8 md:max-w-lg md:flex-col md:items-center md:gap-y-11 sm:gap-y-9">
        <div className="flex max-w-xl flex-col">
          <h2 className="fs-64 font-title leading-none text-gray-20 lg:text-52 md:text-48 sm:text-36">
            Your farm is capable of so much more
          </h2>
          <p className="mt-[26px] text-25 leading-snug tracking-tighter text-gray-40 lg:text-20 md:mt-7 md:text-18 sm:mt-4 sm:text-16">
            Solar panels provide partial shade to the crops below, creating a microclimate that
            potentially extends growing seasons.
          </p>
          <ul className="relative mt-auto md:mt-[41px] sm:mt-[38px]">
            {items.map(({ text, artboard }, index) => {
              return (
                <li
                  className={clsx(
                    'flex items-center gap-x-7 border-t pb-[31px] pt-8 lg:gap-x-[23px] lg:py-7 md:py-5',
                    index === items.length - 1 && 'border-b',
                  )}
                  key={index}
                >
                  <div className="shrink-0">
                    <IconAnimation
                      className="h-[56px] w-[56px] md:h-12 md:w-12 sm:h-11 sm:w-11"
                      artboard={artboard}
                    />
                  </div>
                  <p className="fs-20 pr-[74px] tracking-tight lg:pr-1 md:max-w-[368px] sm:pr-0 sm:text-16">
                    {text}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
        <Image
          className="w-[608px] rounded-[10px] lg:w-[482px] md:aspect-[0.709] md:w-[448px] sm:aspect-square"
          src={panelImage}
          width={608}
          height={800}
          alt="solar panel image"
        />
      </div>
    </section>
  );
}

export default Farm;
