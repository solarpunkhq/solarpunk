import { ROUTE } from '@/constants/route';

export const MENUS = {
  header: [
    { label: 'What is Agrivoltaics', href: ROUTE.agrivoltaics },
    { label: 'Blog', href: ROUTE.blog } /* 
    { label: 'Jobs', href: ROUTE.index }, */,
  ],
  footer: {
    main: [
      { label: 'What is Agrivoltaics', href: ROUTE.agrivoltaics },
      { label: 'Terms', href: ROUTE.terms },
      { label: 'Privacy Policy', href: ROUTE.privacy },
    ],
  },
};
