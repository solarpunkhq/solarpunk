import { createControlComponent } from '@react-leaflet/core'
import { ControlOptions } from 'leaflet'
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch'
import 'leaflet-geosearch/dist/geosearch.css'

const createGeoSearchInstance = (props: ControlOptions) => {
  const provider = new OpenStreetMapProvider()
  // @ts-ignore
  const searchControl = new GeoSearchControl({
    provider,
    style: 'bar',
    ...props,
  })
  return searchControl
}

export const GeomanSearchControl = createControlComponent(
  createGeoSearchInstance
)
