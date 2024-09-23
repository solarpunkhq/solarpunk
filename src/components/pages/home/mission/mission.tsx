import Image from 'next/image';

import solarPunk from '@/images/mission/solarpunk.png';

function Mission() {
  return (
    <section className="mission relative bg-secondary-green pb-[21px] pt-[31px] px-safe lg:pb-[17px] lg:pt-[19px] md:pb-[12px] md:pt-[15px] sm:py-4">
      <div className="container">
        <p className="inline-block align-middle text-20 font-semibold uppercase tracking-wider lg:max-w-[685px] lg:text-18 lg:leading-[1.8] md:max-w-[597px] sm:text-16 sm:leading-normal">
          Our mission is to 100x the deployment of solar panels by&nbsp;2033 and create a
          <Image
            className="relative bottom-1 mx-4 inline-block w-[170px] lg:bottom-0.5 lg:mx-2 lg:w-[151px] md:mr-[11px] sm:bottom-px sm:mx-1 sm:w-[104px]"
            src={solarPunk}
            width={170}
            height={32}
            alt="solarpunk"
            quality={90}
            priority
          />
          Future by 2077.
        </p>
      </div>
    </section>
  );
}

export default Mission;