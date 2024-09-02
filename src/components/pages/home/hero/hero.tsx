import Image from 'next/image';

import PauseableVideo from '@/components/shared/pauseable-video/pauseable-video';
import SubscribeForm from '@/components/shared/subscribe-form';

import stickerImage from '@/images/hero/sticker.png';

function Hero() {
  return (
    <section className="hero relative pb-14 pt-[200px] px-safe lg:pb-[47px] md:pb-[39px] sm:pb-8">
      <div className="container">
        <div className="flex max-w-[726px] flex-col text-white">
          <h1 className="font-title text-[104px] font-medium leading-[0.9] tracking-snug lg:text-[88px] md:text-64 sm:text-44">
            Covering farms <br />
            with solar panels
          </h1>
          <p className="mt-3.5 max-w-[480px] text-24 font-normal leading-tight lg:max-w-[430px] lg:text-20 md:max-w-[380px] md:text-18 sm:text-16">
            Accelerate global transition to renewable energy while capitalizing on your acres.
          </p>
          <SubscribeForm className="mt-16 md:mt-[50px]" />
        </div>
        <Image
          className="z-10 ml-auto mr-32 mt-[267px] rounded-lg shadow-mission-sticker lg:mr-0 lg:mt-[120px] md:mt-[280px] sm:mt-[169px] sm:h-[60px] sm:w-[78px]"
          src={stickerImage}
          width={104}
          height={80}
          alt=""
          quality={90}
          priority
        />
        {/*       
          // Video optimization parameters:
          //   mp4: -pix_fmt yuv420p -vf "scale=1920:-2" -movflags faststart -vcodec libx264 -crf 20
          //   webm: -c:v libvpx-vp9 -crf 20 -vf scale=1920:-2 -deadline best -an 
        */}
        <PauseableVideo
          videoClassName="-z-10 h-full w-full object-cover object-center"
          width={1920}
          height={1438}
        >
          <source src="/videos/pages/home/hero/hero.mp4" type="video/mp4" />
          <source src="/videos/pages/home/hero/hero.webm" type="video/webm" />
        </PauseableVideo>
      </div>
    </section>
  );
}

export default Hero;
