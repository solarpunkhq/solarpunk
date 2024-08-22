import { createControlComponent } from '@react-leaflet/core'
import * as L from 'leaflet'
import '@geoman-io/leaflet-geoman-pro'
import '@geoman-io/leaflet-geoman-pro/dist/leaflet-geoman.css'

interface Props extends L.ControlOptions {
  position: L.ControlPosition
  drawCircle?: boolean
  oneBlock?: boolean
}

const Geoman = L.Control.extend({
  options: {},
  initialize(options: Props) {
    L.setOptions(this, options)
  },

  addTo(map: L.Map) {
    if (!map.pm) return

    map.pm.addControls({
      ...this.options,
    })

    map.pm.setGlobalOptions({
      measurements: { measurement: true, displayFormat: 'metric' },
    })
  },
})

const createGeomanInstance = (props: Props) => {
  return new Geoman(props)
}

export const ExpGeomanControl = createControlComponent(createGeomanInstance)
