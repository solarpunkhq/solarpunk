'use client'

import Control from 'react-leaflet-custom-control'
import * as React from 'react'
import { Check, ChevronsUpDown, Map } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

export default function MapTypeControl({ setMapType, mapType }) {
  return (
    <Control prepend={true} position="topleft">
      <Button
        variant="outline"
        role="combobox"
        onClick={() => setMapType(mapType === 'hybrid' ? 'roadmap' : 'hybrid')}
        className="!m-1 !box-border !h-[30px] !w-[30px] !rounded-none !bg-clip-padding !p-0"
      >
        <Map />
      </Button>
    </Control>
  )
}
