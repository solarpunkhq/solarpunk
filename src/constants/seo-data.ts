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
    },
    en: {
      title: 'Covering farms with solar panels',
      description:
        'Discover how Solarpunk integrates solar panels with farms, boosting energy production and crop yields with innovative agrivoltaics solutions.',
      pathname: ROUTE.index as string,
    },
  },
};
