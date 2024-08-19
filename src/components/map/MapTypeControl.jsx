'use client'

import Control from 'react-leaflet-custom-control'
import * as React from 'react'
import { Check, ChevronsUpDown, Map } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

const mapTypes = [
  {
    value: 'hybrid',
    label: 'Default Map',
  },
  {
    value: 'roadmap',
    label: 'Road Map',
  },
  {
    value: 'satellite',
    label: 'Satellite Map',
  },
  {
    value: 'terrain',
    label: 'Terrain Map',
  },
]

export default function MapTypeControl({ setMapType }) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('')

  return (
    <Control prepend={true} position="topleft">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="!m-1 !box-border !h-[30px] !w-[30px] !rounded-none !bg-clip-padding !p-0"
          >
            <Map />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandList>
              <CommandEmpty>No map type found.</CommandEmpty>
              <CommandGroup>
                {mapTypes.map((mapType) => (
                  <CommandItem
                    key={mapType.value}
                    value={mapType.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? '' : currentValue)
                      setMapType(currentValue)
                      setOpen(false)
                    }}
                  >
                    <Check
                      className={cn(
                        'mr-2 h-4 w-4',
                        value === mapType.value ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                    {mapType.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </Control>
  )
}
