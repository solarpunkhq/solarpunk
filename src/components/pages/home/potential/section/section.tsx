import { Route } from 'next';

import Button from '@/components/shared/button';

type SectionType = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: Route<string>;
};

function Section({ title, description, buttonText, buttonLink }: SectionType) {
  return (
    <>
      <h3 className="fs-24 mt-8 font-title tracking-tight xl:mt-[29px] md:mt-0 sm:text-18">
        {title}
      </h3>
      <p className="fs-20 mt-2 font-medium leading-snug tracking-tighter text-gray-40 xl:max-w-[419px] sm:text-16">
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

export default Section;
