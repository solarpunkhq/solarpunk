import { Route } from 'next';
import Image, { StaticImageData } from 'next/image';

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
}: CardProps) {
  return (
    <>
      <div className="z-10 md:basis-1/2 md:pr-6 md:text-center sm:pr-0 sm:text-start">
        <p className="text-14 leading-snug tracking-tight">
          <span className="mr-2">{type}</span>|<span className="ml-2">{year}</span>
        </p>
        <h2 className="relative mt-[62px] pt-[34px] text-center font-title text-40 font-bold uppercase leading-tight tracking-wide before:absolute before:left-1/2 before:top-0 before:h-1.5 before:w-[152px] before:-translate-x-1/2 before:bg-white lg:mt-[53px] lg:pt-8 lg:text-34 md:mt-[42px] md:text-31 sm:mt-7 sm:pt-7 sm:tracking-normal">
          {title}
        </h2>
        <h3 className="relative mt-1.5 pb-[34px] text-center font-title text-23 font-semibold  uppercase after:absolute after:bottom-0 after:left-1/2 after:h-1.5 after:w-[152px] after:-translate-x-1/2 after:bg-white lg:mt-1 lg:pb-[29px] lg:text-19 md:pb-7 md:text-18 sm:pb-[25px]">
          {subtitle}
        </h3>
      </div>
      <div className="z-10 mt-[70px] flex flex-col border-t border-white/30 lg:mt-[60px] lg:min-h-[314px] md:mt-0 md:min-h-[auto] md:basis-1/2 md:border-l md:border-t-0 md:pl-7 sm:mt-9 sm:border-l-0 sm:border-t sm:pl-0 sm:pt-[19px]">
        <p className="fs-20 mt-8 font-medium lg:mt-[29px] md:mt-0">{description}</p>
        <p className="fs-16 mt-2.5 leading-snug tracking-tight text-white/85">{text}</p>
        <Button
          className="group mt-6 self-start lg:mt-auto sm:mt-[18px]"
          size="sm"
          theme="green"
          href={buttonUrl}
          withArrow
        >
          {buttonText}
        </Button>
      </div>
      <span className="border-linear pointer-events-none absolute inset-0 rounded-xl bg-sources-card-border opacity-[0.47]" />
      <Image
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
        src={blurImg}
        width={612}
        height={750}
        alt=""
      />
    </>
  );
}

export default CardContent;
