import Image from 'next/image';

import clsx from 'clsx';

import Link from '@/components/shared/link';

import { ClassName } from '@/types/classname';

import { ROUTE } from '@/constants/route';

import logo from '@/svgs/logo.svg';

type LogoProps = ClassName & {
  isPriorityLoading?: boolean;
};

function Logo({ className, isPriorityLoading = false }: LogoProps) {
  return (
    <Link className="group mt-1.5 flex items-center gap-x-0.5" href={ROUTE.index}>
      <svg
        className="-translate-y-0.5"
        viewBox="-2 -2 34 36"
        width="24"
        height="26"
        preserveAspectRatio="xMinYMid meet"
      >
        <rect
          className="h-8 w-0 origin-[bottom_left] fill-[#000] transition-all duration-300 group-hover:w-8"
          clipPath="url(#:R35djta:-clip)"
        />
        <use href="#:R35djta:-path" className="stroke-[#000]" fill="none" strokeWidth="2" />
        <defs>
          <path
            id=":R35djta:-path"
            d="M8.54425 13.6155L8.56512 4.61882L16.5437 9.23302L16.5179 18.3934L16.5071 18.3872L16.4818 27.3813L8.50757 22.8396L8.52898 13.6067L8.54425 13.6155ZM16.5437 9.23302L16.5651 0L24.5436 4.61425L24.5178 13.7746L16.5437 9.23302Z M0.529235 18.2254L0.507812 27.4584L8.48198 32L8.50776 22.8396L0.529235 18.2254Z"
          />
          <clipPath id=":R35djta:-clip">
            <use href="#:R35djta:-path" />
          </clipPath>
        </defs>
      </svg>
      <Image
        className={clsx(className)}
        src={logo}
        width={89}
        height={19}
        alt=""
        priority={isPriorityLoading}
      />
      <span className="sr-only">Solarpunk</span>
    </Link>
  );
}

export default Logo;
