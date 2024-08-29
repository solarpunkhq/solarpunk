import Image from 'next/image';

import solarPunk from '@/images/mission/solarpunk.png';

function Mission() {
  return (
    <section className="mission relative bg-primary-green pb-[21px] pt-[31px] px-safe lg:py-[25px] sm:py-5">
      <div className="container">
        <span className="inline-block align-middle text-20 font-semibold uppercase tracking-wider lg:max-w-[685px] lg:text-18 lg:leading-[1.8] md:max-w-[597px] sm:text-16 sm:leading-[1.5]">
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
        </span>
      </div>
    </section>
  );
}

export default Mission;
