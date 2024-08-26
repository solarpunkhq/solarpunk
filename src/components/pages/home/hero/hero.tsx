import Image from 'next/image';

import SubscribeForm from '@/components/shared/subscribe-form';

import stickerImage from '@/images/hero/sticker.png';

function Hero() {
  return (
    <section className="hero relative pb-[403px] pt-[200px] px-safe lg:pb-[248px] md:pb-[402px] sm:pb-[263px]">
      <div className="container">
        <div className="flex max-w-[726px] flex-col text-white">
          <h1 className="font-title text-[104px] font-medium leading-[0.9] tracking-snug lg:text-[88px] md:text-[64px] sm:text-[44px]">
            Covering farms <br />
            with solar panels
          </h1>
          <p className="mt-3.5 max-w-[480px] text-24 font-normal leading-tight lg:max-w-[430px] lg:text-20 md:max-w-[380px] md:text-18 sm:text-16">
            Accelerate global transition to renewable energy while capitalizing on your acres.
          </p>
          <SubscribeForm className="mt-16 md:mt-12" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 top-14 -z-10 bg-[#228B22] sm:top-[42px]" />
      </div>
      <Image
        className="absolute bottom-14 right-80 z-10 lg:bottom-12 lg:right-8 md:bottom-10 sm:bottom-8 sm:right-5 sm:h-[60px] sm:w-[78px]"
        src={stickerImage}
        width={104}
        height={80}
        alt=""
      />
    </section>
  );
}

export default Hero;
