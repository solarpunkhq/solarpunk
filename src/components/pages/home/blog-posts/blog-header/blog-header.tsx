'use client';

import { useTranslations } from 'next-intl';

function BlogHeader() {
  const t = useTranslations('BlogComponent');
  return (
    <>
      <h2 className="font-title text-52 font-semibold leading-[1.2] tracking-tight text-gray-20 home-lg:text-44 home-md:text-36 home-sm:max-w-[289px] home-sm:text-29">
        {t('heading')}
      </h2>
      <p className="mb-8 mt-[19px] text-25 leading-snug tracking-tighter text-gray-40 home-lg:text-20 home-md:mt-5 home-md:text-18 home-sm:mt-4 home-sm:text-16">
        {t('subtitle')} <mark className="highlight active">{t('highlight')}</mark>.
      </p>
    </>
  );
}

export default BlogHeader;
