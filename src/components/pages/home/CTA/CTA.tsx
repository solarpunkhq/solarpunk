import Image from 'next/image';

import Button from '@/components/shared/button';

import fieldImage from '@/images/cta/field-with-flower.jpg';
import greyBgImage from '@/images/cta/gray-bg-blured.jpg';

import Card from './card';

function CTA() {
  return (
    <section className="cta mt-[230px] px-safe xl:mt-[168px] lg:mt-[155px] md:mt-[136px] sm:mt-[104px]">
      <div className="container xl:max-w-5xl">
        <div className="flex items-center justify-between gap-8 md:flex-col md:gap-6 sm:gap-6">
          <Card secondaryBg="bg-cta-card-bg sm:bg-cta-card-bg-sm">
            <h2 className="font-title text-44 font-semibold leading-[1.2] tracking-tight text-white xl:text-40 lg:text-37 md:max-w-[500px] md:text-29 sm:text-26">
              Deploy solar installations with Solarpunk in weeks, not&nbsp;years
            </h2>
            <div className=" flex items-end justify-between gap-3.5 xl:flex-col xl:items-start md:flex-row md:items-end sm:flex-col sm:items-start sm:gap-y-5">
              <p className="fs-20 max-w-[480px] font-medium leading-snug tracking-tighter text-white xl:max-w-[404px] md:max-w-[452px] sm:text-16">
                We will help you understand what type of Agrivoltaic project is right for you and
                what type of regulatory hurdles you will face.
              </p>
              <Button
                className="group shrink-0 gap-0.5 lg:gap-0 sm:gap-0"
                size="md"
                theme="green"
                href="/"
                withArrow
              >
                Get started
              </Button>
              <Image
                className="absolute inset-0 -z-10 h-full w-full translate-x-[13px] scale-[1.135] object-cover object-center lg:translate-x-[59px] lg:translate-y-[-11px] lg:scale-[1.44] md:translate-x-[-25px] md:translate-y-[-27px] md:scale-[1.213] sm:translate-x-[61px] sm:translate-y-[-55px] sm:scale-[1.75]"
                src={fieldImage}
                width={854}
                height={854}
                alt=""
              />
            </div>
          </Card>
          <Card className="sm:min-h-[383px] sm:justify-start sm:gap-y-2">
            <h2 className="max-w-[430px] font-title text-60 font-semibold leading-[1.16] tracking-tight text-gray-20 xl:max-w-[392px] xl:text-52 md:max-w-[352px] md:text-45 sm:text-30">
              Not interested in agrivoltaics?
            </h2>
            <div className=" flex items-end justify-between gap-3.5 xl:flex-col xl:items-start md:flex-row md:items-end sm:flex-col sm:items-start sm:gap-y-5">
              <p className="fs-20 max-w-[327px] font-medium leading-snug tracking-tighter text-gray-50 xl:max-w-[299px] md:max-w-[372px] md:text-20 sm:max-w-[245px] sm:text-16">
                We also help with open space solar deployment without agriculture.
              </p>
              <Button
                className="group shrink-0 gap-0.5 lg:gap-0 sm:gap-0"
                size="md"
                theme="white"
                href="/"
                withArrow
              >
                Contact us
              </Button>
            </div>
            <Image
              className="absolute inset-0 -z-10 h-full w-full translate-x-[19px] scale-[1.15] object-cover object-center lg:translate-x-[34px] md:translate-x-[13px] md:scale-[1.23] sm:translate-y-[-22px] sm:scale-x-[1.33] sm:scale-y-[1.33]"
              src={greyBgImage}
              width={865}
              height={750}
              alt=""
            />
          </Card>
        </div>
      </div>
    </section>
  );
}

export default CTA;
