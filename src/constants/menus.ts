import { ROUTE } from '@/constants/route';

// FIXME: Replace with actual menu items
export const MENUS = {
  header: [
    { label: 'About', href: ROUTE.index },
    { label: 'Blog', href: ROUTE.index },
  ],
  footer: {
    main: [
      {
        heading: 'Company',
        links: [
          { label: 'Home', href: ROUTE.index },
          { label: 'About us', href: ROUTE.index },
          { label: 'Enterprise', href: ROUTE.index },
          { label: 'Pricing', href: ROUTE.index },
        ],
      },
      {
        heading: 'Resources',
        links: [
          { label: 'Blog', href: ROUTE.index },
          { label: 'Documentation', href: ROUTE.index },
          { label: 'Community', href: ROUTE.index },
          { label: 'Support', href: ROUTE.index },
        ],
      },
      {
        heading: 'Legal',
        links: [
          { label: 'Terms of service', href: ROUTE.index },
          { label: 'Privacy policy', href: ROUTE.index },
          { label: 'Cookie policy', href: ROUTE.index },
        ],
      },
    ],
    social: [
      { label: 'X.com (Twitter)', href: ROUTE.index, icon: 'xcom-icon' },
      { label: 'LinkedIn', href: ROUTE.index, icon: 'linkedin-icon' },
      { label: 'GitHub', href: ROUTE.index, icon: 'github-icon' },
      { label: 'YouTube', href: ROUTE.index, icon: 'youtube-icon' },
      { label: 'Discord', href: ROUTE.index, icon: 'discord-icon' },
    ],
  },
};
