'use client';

import { useTranslations } from 'next-intl';

import React from 'react';

import {
  Bath,
  Beef,
  Bitcoin,
  CarIcon,
  Carrot,
  CigaretteOff,
  Heater,
  LaptopIcon,
  PlugZap,
  Sprout,
  ThermometerSun,
  UtensilsIcon,
  WifiIcon,
} from 'lucide-react';

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
    { icon: WifiIcon, text: 'high-speed fiber WiFi' },
    { icon: LaptopIcon, text: 'coworking space included' },
    { icon: Carrot, text: 'homegrown vegetables' },
    { icon: Beef, text: 'local-grown beef' },
    { icon: Sprout, text: 'heated greenhouse' },
    { icon: ThermometerSun, text: 'cedar hot tub included' },
    { icon: Heater, text: 'sauna included' },
    { icon: Bitcoin, text: 'bitcoin-mined heating system' },
    { icon: PlugZap, text: 'electric car charging included' },
    { icon: CarIcon, text: 'parking on premises included' },
    { icon: UtensilsIcon, text: 'fully equipped kitchen' },
    { icon: CigaretteOff, text: 'no smoking' },
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
