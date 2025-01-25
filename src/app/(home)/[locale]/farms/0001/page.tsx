'use client';

import { useTranslations } from 'next-intl';

import React from 'react';

import Container from '@/components/shared/container';
import Listing from '@/components/ui/listing';

export default function Farms() {
  const t = useTranslations('translations');
  const images = [
    {
      src: '/entrance.jpg',
      alt: 'Solar Punk Farm Photos',
    },
    {
      src: '/studio-1.jpg',
      alt: 'Solar Punk Farm Photos',
    },
    {
      src: '/outdoor-1.jpg',
      alt: 'Solar Punk Farm Photos',
    },
    {
      src: '/outdoor-2.jpg',
      alt: 'Solar Punk Farm Photos',
    },
    {
      src: '/studio-2.jpg',
      alt: 'Exterior view of the beach house',
    },
    {
      src: '/outdoor-3.jpg',
      alt: 'Solar Punk Farm Photos',
    },
    {
      src: '/outdoor-4.jpg',
      alt: 'Solar Punk Farm Photos',
    },
    {
      src: '/studio-3.jpg',
      alt: 'Solar Punk Farm Photos',
    },

    {
      src: '/outdoor-5.jpg',
      alt: 'Solar Punk Farm Photos',
    },
    {
      src: '/studio-4.jpg',
      alt: 'Solar Punk Farm Photos',
    },
  ];

  return (
    <Container>
      <Listing
        title="Solarpunk Farm #0001 – Studio Apartment"
        rent="$999"
        squareMeters="70m²"
        type="Studio Apartment"
        details="2 residents · 1 bedrooms · 1 bed · 1 bath"
        description={
          <>
            <p>
              Discover a harmonious blend of modern comfort and eco-conscious living in this
              charming studio apartment, located on a serene remote farm. Surrounded by the peaceful
              rhythms of nature, this is the perfect escape from the chaos of urban life. Here,
              silence reigns, and the absence of light pollution unveils a breathtaking canopy of
              stars, offering a retreat that soothes the soul.
            </p>
            <p>
              This apartment is part of a 100% carbon-neutral property powered entirely by solar
              energy, allowing you to live sustainably without compromising on convenience.
            </p>
            <p>
              Electric vehicle owners will also enjoy free on-site charging stations, further
              supporting an eco-friendly lifestyle. Despite its rural charm, the farm is
              well-connected: a quick 15-minute drive takes you to the nearest city, and a fully
              stocked supermarket is just four minutes away.
            </p>
          </>
        }
        moreDescription={
          <>
            <p>
              Inside, high-speed internet keeps you connected, making this an ideal home for remote
              work or streaming your favorite shows. You’ll also have access to a thoughtfully
              designed coworking space, perfect for staying productive while embracing a slower pace
              of life. For fitness and wellness, enjoy the on-site home gym, a heated indoor
              swimming pool, a sauna, and a relaxing jacuzzi to unwind after a long day.
            </p>
            <p>
              Life on the farm means fresh, locally grown produce at your fingertips, bringing the
              farm-to-table lifestyle to your kitchen. This is more than just a home—it’s a
              sanctuary where sustainability, luxury, and nature coexist in perfect balance. Whether
              you’re seeking a quiet retreat or an inspiring work-from-home environment, this
              apartment offers the best of both worlds.
            </p>
          </>
        }
        images={images}
        apply="https://cal.com/team/solarpunk/0001-studio"
      />
    </Container>
  );
}
