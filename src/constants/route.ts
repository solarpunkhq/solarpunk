import type { Route } from 'next';

export const ROUTE: Record<string, URL | Route<string>> = {
  index: '/',
  agrivoltaics: '/blog/agrivoltaics' as Route<string>,
  contactUs: 'https://cal.com/team/solarpunk/exploration',
  terms: '/terms',
  x: 'https://x.com/solarpunkhq',
  github: 'https://github.com/solarpunkhq/solarpunk',
  privacy: '/privacy' as Route<string>,
  slack: 'https://join.slack.com/t/solarpunkhq/shared_invite/zt-2saklkamo-6k8ok_TosgBOxSUO9YaLTg',
  blog: '/blog',
  login: '/login',
};
