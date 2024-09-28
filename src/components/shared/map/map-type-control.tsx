'use client';

import * as React from 'react';
//@ts-ignore
import Control from 'react-leaflet-custom-control';

import { Map } from 'lucide-react';

import { Button } from '@/components/ui/button';

function MapTypeControl({ setMapType, mapType }: { setMapType: any; mapType: string }) {
  return (
    <Control prepend={true} position="topleft">
      <Button
        variant="outline"
        role="combobox"
        className="!m-1 !box-border !h-[30px] !w-[30px] !rounded-sm !border-none !bg-white !p-0 !shadow-xl"
        onClick={() => setMapType(mapType === 'hybrid' ? 'roadmap' : 'hybrid')}
      >
        <Map />
      </Button>
    </Control>
  );
}

export default MapTypeControl;
