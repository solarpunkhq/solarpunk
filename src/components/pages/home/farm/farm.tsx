import Image from 'next/image';

import clsx from 'clsx';

import panelImage from '@/images/farm/panel.jpg';

import { IconWrapper } from './icon-wrapper';
import CerealsIcon from './icons/cereals-icon';
import LeafsIcon from './icons/leafs-icon';
import SlotIcon from './icons/slot-icon';

const items = [
  {
    text: 'Reduce reliance on fossil fuels and lower greenhouse gas emissions.',
    icon: CerealsIcon,
  },
  {
    text: 'Install solar panels to earn revenue from solar energy and reduce energy costs.',
    icon: LeafsIcon,
  },
  {
    text: 'Benefit from government incentives, grants, and tax credits for renewable energy projects. ',
    icon: SlotIcon,
  },
];

function Farm() {
  return (
    <section className="farm mb-[220px] mt-[219px] px-safe lg:mb-[157px] lg:mt-40 md:mb-[138px] md:mt-[133px] sm:mb-[104px] sm:mt-[103px]">
      <div className="container flex max-w-[1408px] justify-between lg:gap-x-8 md:max-w-lg md:flex-col md:items-center md:gap-y-10 sm:gap-y-9">
        <div className="flex max-w-xl flex-col">
          <h2 className="fs-64 font-title leading-none text-gray-20 lg:text-52 md:text-48 sm:text-36">
            Your farm is capable of so much more
          </h2>
          <p className="mt-[26px] text-25 leading-snug tracking-tighter text-gray-40 lg:text-20 md:mt-7 md:text-18 sm:mt-4 sm:text-16">
            Solar panels provide partial shade to the crops below, creating a microclimate that
            potentially extends growing seasons.
          </p>
          <ul className="relative mb-0.5 mt-auto md:mt-11 sm:mt-[38px]">
            {items.map(({ text, icon: Icon }, index) => {
              return (
                <li
                  className={clsx(
                    'flex items-center gap-x-7 border-t py-8 lg:gap-x-[23px] lg:py-7 md:py-5',
                    index === items.length - 1 && 'border-b',
                  )}
                  key={index}
                >
                  <div className="shrink-0">
                    <IconWrapper className="w-[56px] lg:h-12 lg:w-12 sm:h-11 sm:w-11">
                      <Icon />
                    </IconWrapper>
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
