import { useEffect } from 'react'
import { useMap } from 'react-leaflet'

export const EventsHandler = ({
  handleLayerCreateEvent,
}: {
  handleLayerCreateEvent: any
}) => {
  const map = useMap()

  useEffect(() => {
    if (map) {
      map.on('pm:create', handleLayerCreateEvent)
    }
  }, [map])

  return null
}
