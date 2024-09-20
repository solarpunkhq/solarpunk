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
      <h3 className="mt-8 font-title text-22 font-bold leading-snug tracking-tight text-gray-20 xl:mt-[29px] lg:mt-[50px] lg:text-18 md:mt-0 sm:text-17">
        {title}
      </h3>
      <p className="fs-20 mt-2 font-medium leading-snug tracking-tighter text-gray-40 lg:mt-2.5 lg:max-w-[419px] sm:mt-[9px] sm:text-16">
        {description}
      </p>
      <Button
        className="group mt-[26px] self-start md:mt-6 sm:mt-5 sm:gap-0.5"
        size="sm"
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
