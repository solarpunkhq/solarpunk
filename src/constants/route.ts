import type { Route } from 'next';

export const ROUTE: Record<string, URL | Route<string>> = {
  index: '/',
  agrivoltaics: '/blog/posts/agrivoltaics' as Route<string>,
  contactUs: 'https://cal.com/team/solarpunk/exploration',
  terms: '/terms',
  privacy: '/privacy',
  blog: '/blog',
};
