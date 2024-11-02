import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { routing } from './routing';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
