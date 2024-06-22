import { Acre } from '@/utils/types'
import { Layer } from 'leaflet'
import { useEffect } from 'react'
import { useMap } from 'react-leaflet'

const Events = ({
  acres,
  setAcres,
}: {
  acres: Acre[]
  setAcres: (acres: Acre[]) => void
}) => {
  const map = useMap()

  // any since geoman types
  const layerToAcre = (layer: any) => {
    const acre: Acre = {
      latlngs: layer._latlngs,
      area: layer.pm.measurements.area / 1000000,
    }
    return acre
  }

  const updateAcres = () => {
    const layers = map.pm.getGeomanLayers()
    const acres = layers.map((layer) => {
      return layerToAcre(layer)
    })
    setAcres(acres)
  }

  useEffect(() => {
    if (map) {
      map.on('pm:create', (e) => {
        console.log('Layer created:', e)
        updateAcres()

        e.layer.on('pm:union', () => {
          console.log('Layer union', e)
          updateAcres()
        })

        e.layer.on('pm:edit', () => {
          console.log('Layer edited', e)
          updateAcres()
        })

        e.layer.on('pm:update', () => {
          console.log('Layer updated', e)
          updateAcres()
        })

        e.layer.on('pm:remove', (e) => {
          console.log('Layer removed:', e)
          updateAcres()
        })
      })
    }
  }, [map])

  return null
}

export default Events
