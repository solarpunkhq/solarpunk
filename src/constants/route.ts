import type { Route } from 'next';

export const ROUTE: Record<string, URL | Route<string>> = {
  index: '/' as Route<string>,
  agrivoltaics: '/blog/agrivoltaics' as Route<string>,
  contactUs: 'https://cal.com/team/solarpunk/exploration' as Route<string>,
  terms: '/terms' as Route<string>,
  x: 'https://x.com/solarpunkhq' as Route<string>,
  github: 'https://github.com/solarpunkhq/solarpunk' as Route<string>,
  privacy: '/privacy' as Route<string>,
  slack:
    'https://join.slack.com/t/solarpunkhq/shared_invite/zt-2saklkamo-6k8ok_TosgBOxSUO9YaLTg' as Route<string>,
  blog: '/blog' as Route<string>,
  login: '/login' as Route<string>,
  logout: '/logout' as Route<string>,
};
