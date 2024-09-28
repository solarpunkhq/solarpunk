import { Route } from 'next';
import Image, { StaticImageData } from 'next/image';

import clsx from 'clsx';

import Button from '@/components/shared/button';

interface CardProps {
  title: string;
  subtitle: string;
  type: string;
  year: number;
  description: string;
  text: string;
  buttonText: string;
  buttonUrl: Route<string>;
  blurImg: StaticImageData;
  blurImgMobile?: StaticImageData;
}

function CardContent({
  title,
  subtitle,
  type,
  year,
  description,
  text,
  buttonText,
  buttonUrl,
  blurImg,
  blurImgMobile,
}: CardProps) {
  return (
    <>
      <div className="z-10 home-md:basis-1/2 home-md:pr-6 home-md:text-center home-sm:pr-0 home-sm:text-start">
        <p className="text-14 leading-snug tracking-tight">
          <span className="mr-2">{type}</span>|<span className="ml-2">{year}</span>
        </p>
        <h2 className="relative mt-[62px] pt-[34px] text-center font-title text-40 font-bold uppercase leading-tight tracking-wide [text-shadow:_0_4px_34px_rgb(0_0_0_/_25%)] before:absolute before:left-1/2 before:top-0 before:h-1.5 before:w-[152px] before:-translate-x-1/2 before:bg-white home-lg:mt-[53px] home-lg:pt-8 home-lg:text-34 home-md:mt-[42px] home-md:text-31 home-sm:mt-7 home-sm:pt-7 home-sm:tracking-normal">
          {title}
        </h2>
        <h3 className="relative mt-1.5 pb-[34px] text-center font-title text-23 font-semibold uppercase  [text-shadow:_0_4px_34px_rgb(0_0_0_/_25%)] after:absolute after:bottom-0 after:left-1/2 after:h-1.5 after:w-[152px] after:-translate-x-1/2 after:bg-white home-lg:mt-1 home-lg:pb-[29px] home-lg:text-19 home-md:pb-7 home-md:text-18 home-sm:pb-[25px]">
          {subtitle}
        </h3>
      </div>
      <div className="z-10 mt-[70px] flex flex-col border-t border-white/30 home-lg:mt-[60px] home-lg:min-h-[314px] home-md:mt-0 home-md:min-h-[auto] home-md:basis-1/2 home-md:border-l home-md:border-t-0 home-md:pl-7 home-sm:mt-9 home-sm:border-l-0 home-sm:border-t home-sm:pl-0 home-sm:pt-[19px]">
        <p className="fs-20 mt-8 font-medium home-lg:mt-[29px] home-md:mt-0">{description}</p>
        <p className="fs-16 mt-2.5 leading-snug tracking-tight text-white/85">{text}</p>
        <Button
          className="group mt-6 self-start home-lg:mt-auto home-sm:mt-[18px]"
          size="home-sm"
          theme="green"
          href={buttonUrl}
          withArrow
        >
          {buttonText}
        </Button>
      </div>
      <span className="border-linear pointer-events-none absolute inset-0 rounded-xl bg-sources-card-border opacity-[0.47]" />
      <Image
        className={clsx(
          'absolute inset-0 -z-10 h-full w-full object-cover object-center',
          blurImgMobile && 'home-sm:hidden',
        )}
        src={blurImg}
        width={612}
        height={750}
        alt=""
      />
      {blurImgMobile && (
        <Image
          className="absolute inset-0 -z-10 hidden h-full w-full object-cover object-center home-sm:block"
          src={blurImgMobile}
          width={320}
          height={500}
          alt=""
        />
      )}
    </>
  );
}

export default CardContent;
