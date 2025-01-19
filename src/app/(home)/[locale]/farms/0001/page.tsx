'use client';

import { useTranslations } from 'next-intl';

import React from 'react';

import { Bath, CarIcon, Heater, LaptopIcon, PlugZap, UtensilsIcon, WifiIcon } from 'lucide-react';

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

  const amenities = [
    { icon: WifiIcon, text: 'High-speed fiber WiFi' },
    { icon: LaptopIcon, text: 'Coworking included' },
    { icon: Bath, text: 'Hot Tub included' },
    { icon: Heater, text: 'Sauna included' },
    { icon: PlugZap, text: 'Free electric car charging' },
    { icon: CarIcon, text: 'Free parking on premises' },
    { icon: UtensilsIcon, text: 'Fully equipped kitchen' },
  ];

  return (
    <Container>
      <Listing
        title="Solarpunk Farm #0001 – Studio Apartment"
        rent="$999"
        type="Studio Apartment"
        details="2 residents · 1 bedrooms · 1 bed · 1 bath"
        description="Move into the #0001 Solar Punk Farm Studio Apartment, a beautiful new building with
              80m² apartment, large garden, free electric car charging, co-working space, sauna,
              jacuzzi, salt-water in-door swimming pool included. 100% carbon neutral, solar-powered
              and ecofriendly."
        images={images}
        amenities={amenities}
        apply="https://cal.com/team/solarpunk/0001-studio"
      />
    </Container>
  );
}
