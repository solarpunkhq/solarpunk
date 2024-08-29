import Image from 'next/image';

import SubscribeForm from '@/components/shared/subscribe-form';

import stickerImage from '@/images/hero/sticker.png';

function Hero() {
  return (
    <section className="hero relative pb-14 pt-[200px] px-safe lg:pb-[47px] md:pb-[39px] sm:pb-8">
      <div className="container">
        <div className="flex max-w-[726px] flex-col text-white">
          <h1 className="font-title text-[104px] font-medium leading-[0.9] tracking-snug lg:text-[88px] md:text-[64px] sm:text-[44px]">
            Covering farms <br />
            with solar panels
          </h1>
          <p className="mt-3.5 max-w-[480px] text-24 font-normal leading-tight lg:max-w-[430px] lg:text-20 md:max-w-[380px] md:text-18 sm:text-16">
            Accelerate global transition to renewable energy while capitalizing on your acres.
          </p>
          <SubscribeForm className="mt-16 md:mt-[50px]" />
        </div>
        <Image
          className="z-10 ml-auto mr-[128px] mt-[267px] rounded-lg shadow-mission-sticker lg:mr-0 lg:mt-[120px] md:mt-[280px] sm:mt-[169px] sm:h-[60px] sm:w-[78px]"
          src={stickerImage}
          width={104}
          height={80}
          alt=""
          quality={90}
          priority
        />
        <div className="absolute bottom-0 left-0 right-0 top-14 -z-10 bg-[#228B22] sm:top-[42px]" />
      </div>
    </section>
  );
}

export default Hero;
