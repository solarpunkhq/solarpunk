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
    'flex aspect-[0.7625] w-[608px] shrink-0 items-center justify-center overflow-hidden rounded-[10px] lg:w-[482px] md:aspect-[0.709] md:w-[448px] sm:aspect-square sm:w-full sm:max-w-[448px]',
  videoClassName:
    'w-full object-cover object-center md:scale-110 sm:translate-y-[48px] sm:scale-100',
};

function Farm() {
  return (
    <section className="farm mb-[220px] mt-[221px] px-safe lg:mb-[157px] lg:mt-40 md:mb-[135px] md:mt-[134px] sm:mb-[104px] sm:mt-[103px]">
      <div className="container flex max-w-[1408px] justify-between lg:gap-x-8 md:max-w-lg md:flex-col md:items-center md:gap-y-11 sm:gap-y-10">
        <div className="flex max-w-xl flex-col">
          <h2 className="font-title text-60 font-bold leading-[1.1] tracking-snug text-gray-20 lg:text-48 md:text-45 sm:text-33">
            Your farm is capable of so much more
          </h2>
          <p className="mt-5 text-25 leading-snug tracking-tighter text-gray-40 lg:mt-[26px] lg:text-20 md:text-18 sm:mt-4 sm:text-16">
            Solar panels provide partial shade to the crops below, creating a microclimate that
            potentially extends growing seasons.
          </p>
          <ul className="relative mt-auto md:mt-[41px] sm:mt-10">
            {items.map(({ text, artboard }, index) => {
              return (
                <li
                  className={clsx(
                    'flex items-center gap-x-7 border-t pb-[31px] pt-8 text-gray-12 lg:gap-x-[23px] lg:py-7 md:py-5 sm:pb-[19px]',
                    index === items.length - 1 && 'border-b border-gray-12',
                  )}
                  key={index}
                >
                  <div className="shrink-0">
                    <IconAnimation
                      className="h-14 w-14 md:h-12 md:w-12 sm:h-11 sm:w-11"
                      artboard={artboard}
                    />
                  </div>
                  <p className="fs-20 pr-[74px] tracking-tight lg:pr-1 md:max-w-[368px] sm:pr-0 sm:text-16">
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
