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

    let areaUnit = 'acres'
    let areaCalculation = (value) => Math.round((value / 4046.86) * 100) / 100

    if (this.options.country && this.options.country !== 'US') {
      areaUnit = 'ha'
      areaCalculation = (value) => Math.round((value / 10000) * 100) / 100
    }

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
                unit: areaUnit,
                calculation: areaCalculation,
              },
            ],
          },
        },
      })
    })
    map.on('pm:create', (e) => {
      e.layer.on('pm:enable', (x) => {
        applyMeasurementOptions(x.layer)
      })
    })
    map.on('pm:union pm:difference', (e) => {
      //@ts-ignore
      applyMeasurementOptions(e.resultLayer)
    })
    map.on('pm:split', (e) => {
      //@ts-ignore
      e.layers.getLayers().forEach((layer) => {
        applyMeasurementOptions(layer)
      })
    })
    map.on('pm:cut', (e) => {
      applyMeasurementOptions(e.layer)
    })

    function applyMeasurementOptions(layer) {
      layer.pm.setOptions({
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
                unit: areaUnit,
                calculation: areaCalculation,
              },
            ],
          },
        },
      })
      layer.pm.addMeasurementTooltipToLayer(layer)
      layer.closeTooltip()
    }
  },
})

const createGeomanInstance = (props: Props) => {
  return new Geoman(props)
}

export const GeomanControl = createControlComponent(createGeomanInstance)