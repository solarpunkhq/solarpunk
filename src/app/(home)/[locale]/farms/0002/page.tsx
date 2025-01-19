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
      src: '/1br-1.jpg',
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
      src: '/1br-2.jpg',
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
      src: '/1br-3.jpg',
      alt: 'Solar Punk Farm Photos',
    },

    {
      src: '/outdoor-5.jpg',
      alt: 'Solar Punk Farm Photos',
    },
    {
      src: '/1br-4.jpg',
      alt: 'Solar Punk Farm Photos',
    },
    {
      src: '/1br-5.jpg',
      alt: 'Solar Punk Farm Photos',
    },
    {
      src: '/1br-6.jpg',
      alt: 'Solar Punk Farm Photos',
    },
    {
      src: '/1br-7.jpg',
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
        title="Solarpunk Farm #0002 – 1 Bedroom Apartment"
        type="1 Bedroom Apartment"
        details="2 residents · 1 bedroom · 1 bed · 1 bath"
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
