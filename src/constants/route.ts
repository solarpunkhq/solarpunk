import type { Route } from 'next';

export const ROUTE: Record<string, URL | Route<string>> = {
  index: '/',
  agrivoltaics: '/blog/posts/agrivoltaics',
  contactUs: 'https://cal.com/team/solarpunk/exploration',
  blog: '/blog',
};
