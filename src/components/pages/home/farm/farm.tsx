import clsx from 'clsx';

import HlsVideo from '@/components/shared/hls-video';

import IconAnimation from './icon-animation';

const items = [
  {
    text: 'Reduce reliance on fossil fuels and lower greenhouse gas emissions.',
    artboard: 'icon-1',
  },
  {
    text: 'Install solar panels to earn revenue from solar energy and reduce energy costs.',
    artboard: 'icon-2',
  },
  {
    text: 'Benefit from government incentives, grants, and tax credits for renewable energy projects. ',
    artboard: 'icon-3',
  },
];

{
  /*       
Video optimization parameters:
  mp4: -pix_fmt yuv420p -vf "scale=1220:-2" -movflags faststart -vcodec libx264 -g 60 -crf 20
  m3u8: -codec: copy -start_number 0 -hls_time 2 -hls_list_size 0 -f hls output.m3u8
*/
}
const videoProps = {
  src: {
    mp4: '/videos/pages/home/farm/card.mp4?updated=20240919135945',
    m3u8: '/videos/pages/home/farm/card.m3u8?updated=20240919135945',
  },
  videoWrapperClassName:
    'flex aspect-[0.7625] w-[608px] shrink-0 items-center justify-center overflow-hidden rounded-[10px] home-lg:w-[482px] home-md:aspect-[0.709] home-md:w-[448px] home-sm:aspect-square home-sm:w-full home-sm:max-w-[448px]',
  videoClassName:
    'w-full object-cover object-center home-md:scale-110 home-sm:translate-y-[48px] home-sm:scale-100',
};

function Farm() {
  return (
    <section className="farm mb-[220px] mt-[221px] px-safe home-lg:mb-[157px] home-lg:mt-40 home-md:mb-[135px] home-md:mt-[134px] home-sm:mb-[104px] home-sm:mt-[103px]">
      <div className="container flex max-w-[1408px] justify-between home-lg:gap-x-8 home-md:max-w-lg home-md:flex-col home-md:items-center home-md:gap-y-11 home-sm:gap-y-10">
        <div className="flex max-w-xl flex-col">
          <h2 className="font-title text-60 font-bold leading-[1.1] tracking-snug text-gray-20 home-lg:text-48 home-md:text-45 home-sm:text-33">
            Your farm is capable of so much more
          </h2>
          <p className="mt-5 text-25 leading-snug tracking-tighter text-gray-40 home-lg:mt-[26px] home-lg:text-20 home-md:text-18 home-sm:mt-4 home-sm:text-16">
            Solar panels provide partial shade to the crops below, creating a microclimate that
            potentially extends growing seasons.
          </p>
          <ul className="relative mt-auto home-md:mt-[41px] home-sm:mt-10">
            {items.map(({ text, artboard }, index) => {
              return (
                <li
                  className={clsx(
                    'flex items-center gap-x-7 border-t pb-[31px] pt-8 text-gray-12 home-lg:gap-x-[23px] home-lg:py-7 home-md:py-5 home-sm:pb-[19px]',
                    index === items.length - 1 && 'border-b border-gray-12',
                  )}
                  key={index}
                >
                  <div className="shrink-0">
                    <IconAnimation
                      className="h-14 w-14 home-md:h-12 home-md:w-12 home-sm:h-11 home-sm:w-11"
                      artboard={artboard}
                    />
                  </div>
                  <p className="fs-20 pr-[74px] tracking-tight home-lg:pr-1 home-md:max-w-[368px] home-sm:pr-0 home-sm:text-16">
                    {text}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
        <HlsVideo {...videoProps} />
      </div>
    </section>
  );
}

export default Farm;
