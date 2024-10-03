import Image from 'next/image';

import solarPunk from '@/images/mission/solarpunk.png';

function Mission() {
  return (
    <section className="mission relative bg-secondary-green pb-[21px] pt-[24px] px-safe home-lg:pb-[17px] home-lg:pt-[19px] home-md:pb-[12px] home-md:pt-[15px] home-sm:py-4">
      <div className="container">
        <p className="inline-block align-middle text-20 font-semibold uppercase tracking-wider home-lg:max-w-[685px] home-lg:text-18 home-lg:leading-[1.8] home-md:max-w-[597px] home-sm:text-15 home-sm:leading-normal">
          Our mission is to 100x the deployment of&nbsp;solar panels and create{' '}
          <span className="whitespace-nowrap">
            a
            <Image
              className="relative bottom-px mx-4 inline-block w-[170px] home-lg:bottom-0.5 home-lg:mx-2 home-lg:w-[151px] home-md:mr-[11px] home-sm:bottom-px home-sm:mx-1 home-sm:w-[104px]"
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
