import { ROUTE } from '@/constants/route';

export const SEO_DATA = {
  notFound: {
    title: 'Page Not Found - Solarpunk',
    description: 'Page Not Found - Solarpunk',
    pathname: '',
  },
  index: {
    de: {
      title: 'Farmen mit Solarpaneelen abdecken',
      description:
        'Entdecken Sie, wie Solarpunk Solarpaneele in landwirtschaftliche Betriebe integriert und durch innovative Agrivoltaik-Lösungen die Energieproduktion und Ernteerträge steigert.​',
      pathname: ROUTE.index as string,
      imagePath: '/images/og-image-de.png',
    },
    en: {
      title: 'Covering farms with solar panels',
      description:
        'Discover how Solarpunk integrates solar panels with farms, boosting energy production and crop yields with innovative agrivoltaics solutions.',
      pathname: ROUTE.index as string,
      imagePath: '/images/og-image-en.jpg',
    },
  },
};

export const SEO_FARMS_DATA = {
  notFound: {
    title: 'Page Not Found - Solarpunk',
    description: 'Page Not Found - Solarpunk',
    pathname: '',
  },
  index: {
    de: {
      title: 'Auf einer Solarpunk einziehen',
      description:
        'Ziehen Sie auf eine Solarpunk Farm ein. Hier finden Sie Informationen zu den Vorteilen und den Anforderungen.',
      pathname: ROUTE.index as string,
      imagePath: '/images/og-image-farm.jpg',
    },
    en: {
      title: 'Move into a Solarpunk Farm',
      description:
        'Move into a Solarpunk Farm. Here you will find information about the benefits and requirements.',
      pathname: ROUTE.index as string,
      imagePath: '/images/og-image-farm.jpg',
    },
  },
};

export const SHARE_METADATA = {
  notFound: {
    title: 'Page Not Found - Solarpunk',
    description: 'Page Not Found - Solarpunk',
    pathname: '',
  },
  index: {
    de: {
      title: 'Wir haben ein Geschäft für Sie!',
      description:
        'Wir haben ein Geschäft für Sie. Interessiert daran, mit dieser Person in Kontakt zu treten?​',
      pathname: ROUTE.index as string,
      imagePath: '/images/og-image-de.png',
    },
    en: {
      title: 'We have business for you!',
      description: 'We have business for you. Interested in connecting to this person?',
      pathname: ROUTE.index as string,
      imagePath: '/images/og-image-en.jpg',
    },
  },
};
