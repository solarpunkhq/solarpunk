import type { Route } from 'next';

export const ROUTE: Record<string, URL | Route<string>> = {
  index: '/',
  agrivoltaics: '/blog/agrivoltaics' as Route<string>,
  contactUs: 'https://cal.com/team/solarpunk/exploration',
  terms: '/terms',
  privacy: '/privacy' as Route<string>,
  blog: '/blog',
  login: '/login',
};
