import Farm from '@/components/pages/home/farm';
import Hero from '@/components/pages/home/hero';
import Mission from '@/components/pages/home/mission';
import PaperWork from '@/components/pages/home/paperwork';
import Sources from '@/components/pages/home/sources';

import { getMetadata } from '@/lib/get-metadata';

import { SEO_DATA } from '@/constants/seo-data';

function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <PaperWork />
      <Farm />
      <Sources />
    </>
  );
}

export default Home;

export const metadata = getMetadata(SEO_DATA.index);
