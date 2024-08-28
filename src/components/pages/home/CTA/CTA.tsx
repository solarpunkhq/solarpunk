import Image from 'next/image';

import Button from '@/components/shared/button';

import fieldImage from '@/images/cta/field-with-panel.jpg';
import greyBgImage from '@/images/cta/gray-bg.jpg';

import Card from './card';

function CTA() {
  return (
    <section className="cta mt-[240px] px-safe lg:mt-[168px] md:mt-[135px] sm:mt-[104px]">
      <div className="container">
        <div className="flex items-center justify-between gap-8 md:flex-col md:gap-6 sm:gap-6">
          <Card>
            <h2 className="fs-48 font-title font-normal leading-[1.1] tracking-[-0.025em] text-white lg:text-40 md:max-w-[500px] md:text-32 sm:text-28">
              Deploy solar installations with Solarpunk in weeks, not&nbsp;years
            </h2>
            <div className=" flex items-end justify-between gap-3.5 lg:flex-col lg:items-start md:flex-row md:items-end sm:flex-col sm:items-start sm:gap-y-5">
              <p className="fs-20 max-w-[480px] font-medium leading-snug tracking-tighter text-white lg:max-w-[404px] md:max-w-[452px] sm:text-16">
                We will help you understand what type of Agrivoltaic project is right for you and
                what type of regulatory hurdles you will face.
              </p>
              <Button className="group shrink-0" size="md" theme="green" href="/" withArrow>
                Get started
              </Button>
              <Image
                className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
                src={fieldImage}
                alt="field with panel"
              />
            </div>
          </Card>
          <Card className="sm:min-h-[383px] sm:justify-start sm:gap-y-2">
            <h2 className="fs-64 max-w-[416px] font-title leading-[1.1] tracking-tight lg:max-w-[392px] lg:text-56 md:max-w-[352px] md:text-48 sm:text-32">
              Not interested in agrivoltaics?
            </h2>

            <div className=" flex items-end justify-between gap-3.5 lg:flex-col lg:items-start md:flex-row md:items-end sm:flex-col sm:items-start sm:gap-y-5">
              <p className="fs-20 max-w-[327px] font-medium leading-snug tracking-tighter text-gray-50 lg:max-w-[299px] md:max-w-[372px] md:text-20 sm:max-w-[245px] sm:text-16">
                We also help with open space solar deployment without agriculture.
              </p>
              <Button className="group shrink-0" size="md" theme="white" href="/" withArrow>
                Contact us
              </Button>
            </div>
            <Image
              className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
              src={greyBgImage}
              alt="gray bg"
            />
          </Card>
        </div>
      </div>
    </section>
  );
}

export default CTA;
