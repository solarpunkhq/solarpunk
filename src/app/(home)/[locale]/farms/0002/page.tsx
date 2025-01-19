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
  Dog,
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
        title="Solarpunk Farm #0002 – 1 Bedroom Apartment"
        type="1 Bedroom Apartment"
        rent="$1699"
        details="2 residents · 1 bedroom · 1 bed · 1 bath"
        description="Move into the #0002 Solar Punk Farm 1 Bedroom Apartment, a beautiful new building with
              120m² apartment, large garden, free electric car charging, co-working space, sauna,
              jacuzzi, salt-water in-door swimming pool included. 100% carbon neutral, solar-powered
              and ecofriendly."
        images={images}
        amenities={amenities}
        apply="https://cal.com/team/solarpunk/0002-studio"
      />
    </Container>
  );
}
