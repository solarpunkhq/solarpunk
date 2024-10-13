import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'de'],
  defaultLocale: 'en',
  domains: [
    {
      domain: 'solarpunkhq.com',
      defaultLocale: 'en',
      locales: ['en'],
    },
    {
      domain: 'solarpunk.sh',
      defaultLocale: 'de',
    },
  ],
  localePrefix: 'never',
});
