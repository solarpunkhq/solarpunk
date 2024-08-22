import Hero from '@/components/pages/home/hero';

import { getMetadata } from '@/lib/get-metadata';

import { SEO_DATA } from '@/constants/seo-data';

function Home() {
  return <Hero />;
}

export default Home;

export const metadata = getMetadata(SEO_DATA.index);
