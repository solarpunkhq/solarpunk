import { ROUTE } from '@/constants/route';

export const MENUS = {
  header: [
    { label: 'What is Agrivoltaics', href: ROUTE.agrivoltaics },
    { label: 'Blog', href: ROUTE.blog } /* 
    { label: 'Jobs', href: ROUTE.index }, */,
  ],
  footer: {
    main: [
      { label: 'GitHub', href: ROUTE.github },
      { label: 'X', href: ROUTE.x },
      { label: 'Slack', href: ROUTE.slack },
      { label: 'Terms', href: ROUTE.terms },
      { label: 'Privacy', href: ROUTE.privacy },
    ],
  },
};
