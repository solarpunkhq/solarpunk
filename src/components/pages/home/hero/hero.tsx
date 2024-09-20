import Image from 'next/image';

import HlsVideo from '@/components/shared/hls-video';
import SearchForm from '@/components/shared/search-form';

import stickerImage from '@/images/hero/sticker.png';

{
  /*       
Video optimization parameters:
  mp4: -pix_fmt yuv420p -vf "scale=1920:-2" -movflags faststart -vcodec libx264 -g 60 -crf 20
  m3u8: -codec: copy -start_number 0 -hls_time 2 -hls_list_size 0 -f hls output.m3u8
*/
}
const videoProps = {
  src: {
    mp4: '/videos/pages/home/hero/hero.mp4?updated=20240919122356',
    m3u8: '/videos/pages/home/hero/hero.m3u8?updated=20240919120548',
  },
  videoClassName:
    'absolute inset-0 h-full w-full object-cover object-center lg:object-[25%_50%] md:object-[39%_50%] sm:object-center',
};

function Hero() {
  return (
    <section className="hero relative mt-14 bg-hero-bg pb-14 pt-36 px-safe lg:pb-[47px] md:pb-[39px] sm:mt-[42px] sm:pb-8 sm:pt-[158px]">
      <div className="container ">
        <div className="relative z-20 flex max-w-[726px] flex-col text-white">
          <h1 className="font-title text-96 font-semibold leading-[0.96] tracking-snug lg:text-81 md:text-60 sm:text-41">
            Covering farms <br />
            with solar panels
          </h1>
          <p className="mt-3.5 max-w-[480px] text-24 font-normal leading-tight lg:max-w-[430px] lg:text-20 md:max-w-[380px] md:text-18 sm:max-w-[360px] sm:text-16">
            Accelerate global transition to renewable energy while capitalizing on your acres.
          </p>
          <SearchForm className="mt-[66px] md:mt-[50px]" />
        </div>
        <Image
          className="relative z-20 ml-auto mr-32 mt-[267px] rounded-lg shadow-mission-sticker lg:mr-0 lg:mt-[120px] md:mt-[280px] sm:mt-[180px] sm:h-[60px] sm:w-[78px]"
          src={stickerImage}
          width={104}
          height={80}
          alt=""
          quality={90}
          priority
        />
        <HlsVideo {...videoProps} />
      </div>
      <div className="hero-noise absolute bottom-0 left-0 right-0 top-0 -z-10 bg-[url('/images/pages/home/sources/noise.png')] bg-repeat opacity-10" />
      <span className="hero-shadow absolute bottom-0 left-0 right-0 top-0 -z-10 hidden bg-hero-sm sm:block" />
    </section>
  );
}

export default Hero;
