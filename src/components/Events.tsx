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

  const calculateRevenueForAcre = (area) => {
    const revenuePerAcre = 14000 // Assuming average conditions
    const revenue = Math.floor(area * revenuePerAcre)

    return revenue
  }

  const layerToAcre = (layer: any) => {
    const acre: Acre = {
      latlngs: layer._latlngs,
      area: (layer.pm.measurements.area / 1000000) * 247.105,
      revenue: calculateRevenueForAcre(
        (layer.pm.measurements.area / 1000000) * 247.105
      ),
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

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (map) {
        updateAcres()
      }
    }, 1000)
    return () => clearInterval(intervalId)
  }, [map])

  return null
}

export default Events
