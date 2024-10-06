import { ROUTE } from '@/constants/route';

export const MENUS = {
  header: [
    { label: 'What is Agrivoltaics', href: ROUTE.agrivoltaics },
    { label: 'Blog', href: ROUTE.blog } /* 
    { label: 'Jobs', href: ROUTE.index }, */,
  ],
  footer: {
    main: [
      { label: 'Agrivoltaics', href: ROUTE.agrivoltaics },
      { label: 'GitHub', href: ROUTE.github },
      { label: 'X', href: ROUTE.x },
      { label: 'Terms', href: ROUTE.terms },
      { label: 'Privacy', href: ROUTE.privacy },
    ],
  },
};
