'use client';

import { useTranslations } from 'next-intl';

import AnimatedText from './animated-text';

function Become() {
  const t = useTranslations('translations');

  return (
    <section className="become mt-40 px-safe home-lg:mt-[122px] home-md:mt-[93px] home-sm:mt-[74px]">
      <AnimatedText>
        {t('become_heading')}
        <span data-type="solar-animation" />
      </AnimatedText>
    </section>
  );
}

export default Become;
