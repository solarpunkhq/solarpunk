import { useEffect } from 'react'
import { useMap } from 'react-leaflet'
import * as L from 'leaflet'
import { Acre } from '@/utils/types'

export const PreDrawnAcres = ({ acres }) => {
  const map = useMap()
  useEffect(() => {
    if (map && map.pm) {
      if (acres.length > 0) {
        for (const acre of acres) {
          L.polygon(acre, { pmIgnore: false }).addTo(map)
        }
      }
    }
  }, [map])

  return null
}
