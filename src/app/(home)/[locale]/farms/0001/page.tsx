'use client';

import { useTranslations } from 'next-intl';

import React from 'react';

import { CarIcon, LaptopIcon, PlugZap, UtensilsIcon, WifiIcon } from 'lucide-react';

import Container from '@/components/shared/container';
import Listing from '@/components/ui/listing';

export default function Farms() {
  const t = useTranslations('translations');
  const images = [
    {
      src: '',
      alt: 'Cozy living room with ocean view',
    },
    {
      src: '',
      alt: 'Exterior view of the beach house',
    },
    {
      src: '',
      alt: 'Modern kitchen in the cottage',
    },
    {
      src: '',
      alt: 'Bedroom with large windows facing the ocean',
    },
  ];

  const amenities = [
    { icon: WifiIcon, text: 'High-speed fiber WiFi' },
    { icon: LaptopIcon, text: 'Coworking included' },
    { icon: PlugZap, text: 'Free Electric car charging' },
    { icon: CarIcon, text: 'Free parking on premises' },
    { icon: UtensilsIcon, text: 'Fully equipped kitchen' },
  ];

  return (
    <Container>
      <Listing
        title="Solarpunk Farm #0001 – Studio Apartment"
        description="Move into the #0001 Solar Punk Farm Studio Apartment, a beautiful new building with
              80m² apartment, large garden, free electric car charging, co-working space, sauna,
              jacuzzi, salt-water in-door swimming pool included. 100% carbon neutral, solar-powered
              and ecofriendly."
        images={images}
        amenities={amenities}
      />
    </Container>
  );
}
