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

    if (!this.options.country || this.options.country === 'US') {
      map.on('pm:drawstart', (e) => {
        map.pm.Draw[e.shape].setOptions({
          units: {
            metric: {
              distance: [
                {
                  unit: 'm',
                  calculation: (value) => Math.round(value * 100) / 100,
                },
              ],
              area: [
                {
                  unit: 'acres',
                  calculation: (value) =>
                    Math.round((value / 4046.86) * 100) / 100,
                },
              ],
            },
          },
        })
      })
    } else {
      map.on('pm:drawstart', (e) => {
        map.pm.Draw[e.shape].setOptions({
          units: {
            metric: {
              distance: [
                {
                  unit: 'm',
                  calculation: (value) => Math.round(value * 100) / 100,
                },
              ],
              area: [
                {
                  unit: 'ha',
                  calculation: (value) =>
                    Math.round((value / 10000) * 100) / 100,
                },
              ],
            },
          },
        })
      })
    }
  },
})

const createGeomanInstance = (props: Props) => {
  return new Geoman(props)
}

export const GeomanControl = createControlComponent(createGeomanInstance)
