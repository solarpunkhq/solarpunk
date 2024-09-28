import { Route } from 'next';

import Button from '@/components/shared/button';

type SliderTextContentType = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: Route<string>;
};

function SliderTextContent({ title, description, buttonText, buttonLink }: SliderTextContentType) {
  return (
    <>
      <div>
        <h3 className="mt-8 font-title text-22 font-bold leading-snug tracking-tight text-gray-20 home-xl:mt-[29px] home-lg:mt-[50px] home-lg:text-18 home-md:mt-0 home-sm:text-17">
          {title}
        </h3>
        <p className="fs-20 mt-2 font-medium leading-snug tracking-tighter text-gray-40 home-lg:mt-2.5 home-lg:max-w-[419px] home-md:line-clamp-6 home-sm:mt-[9px] home-sm:text-16">
          {description}
        </p>
      </div>
      <Button
        className="group mt-[26px] self-start home-md:mt-6 home-sm:mt-5 home-sm:gap-0.5"
        size="home-sm"
        theme="black"
        href={buttonLink}
        withArrow
      >
        {buttonText}
      </Button>
    </>
  );
}

export default SliderTextContent;
