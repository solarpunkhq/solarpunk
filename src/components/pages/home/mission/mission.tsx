import Image from 'next/image';

import solarPunk from '@/images/mission/solarpunk.png';

function Mission() {
  return (
    <section className="mission relative bg-secondary-green pb-[21px] pt-[24px] px-safe lg:pb-[17px] lg:pt-[19px] md:pb-[12px] md:pt-[15px] sm:py-4">
      <div className="container">
        <p className="inline-block align-middle text-20 font-semibold uppercase tracking-wider lg:leading-[1.8] sm:leading-normal">
          Our mission is to 100× the deployment of&nbsp;solar panels by&nbsp;2033 and create{' '}
          <span className="whitespace-nowrap">
            a
            <Image
              className="relative bottom-px mx-4 inline-block w-[170px] lg:bottom-0.5 lg:mx-2 lg:w-[151px] md:mr-[11px] sm:bottom-px sm:mx-1 sm:w-[104px]"
              src={solarPunk}
              width={170}
              height={32}
              alt="solarpunk"
              quality={90}
              priority
            />
          </span>
          Future by 2077.
        </p>
      </div>
    </section>
  );
}

export default Mission;
