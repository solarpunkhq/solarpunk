import { useEffect } from 'react'
import { useMap } from 'react-leaflet'

export const EnableVertexTool = () => {
  const map = useMap()

  useEffect(() => {
    if (map && map.pm) {
      map.pm.enableDraw('Polygon')
    }
  }, [map])

  return null
}
