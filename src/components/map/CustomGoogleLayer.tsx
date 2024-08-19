import * as React from 'react'
import * as L from 'leaflet'
import {
  createLayerComponent,
  updateGridLayer,
  LeafletContextInterface,
  LayerProps,
} from '@react-leaflet/core'
import 'leaflet.gridlayer.googlemutant/dist/Leaflet.GoogleMutant'
import { Loader, LoaderOptions } from '@googlemaps/js-api-loader'

interface IGoogleMapsAddLayer {
  name: 'BicyclingLayer' | 'TrafficLayer' | 'TransitLayer'
  options?: any
}

interface IProps extends L.gridLayer.GoogleMutantOptions {
  zIndex?: number
  useGoogMapsLoader?: boolean
  googleMapsLoaderConf?: LoaderOptions
  googleMapsAddLayers?: IGoogleMapsAddLayer[]
  apiKey?: string
}

let googleMapsScriptLoaded = false

const waitForGoogleMutant = (
  maxRetries = 30,
  interval = 200
): Promise<void> => {
  return new Promise((resolve, reject) => {
    let retries = 0
    const check = () => {
      if (L.gridLayer.googleMutant) {
        resolve()
      } else if (retries >= maxRetries) {
        reject(
          new Error('L.gridLayer.googleMutant not available after max retries')
        )
      } else {
        console.log('Waiting for L.gridLayer.googleMutant...')
        retries++
        setTimeout(check, interval)
      }
    }
    check()
  })
}

const createLeafletElement = async (
  props: IProps,
  context: LeafletContextInterface
) => {
  const {
    apiKey = '',
    useGoogMapsLoader = true,
    googleMapsLoaderConf = {},
    googleMapsAddLayers,
    ...googleMutantProps
  } = props

  if (useGoogMapsLoader && !googleMapsScriptLoaded) {
    const loader = new Loader({ apiKey, ...googleMapsLoaderConf })
    await loader.load()
    googleMapsScriptLoaded = true
  }

  try {
    await waitForGoogleMutant()
    const instance = L.gridLayer.googleMutant(googleMutantProps)
    if (googleMapsAddLayers) {
      googleMapsAddLayers.forEach((layer) => {
        console.log('Adding Google layer:', instance)
        ;(instance as L.gridLayer.GoogleMutant).addGoogleLayer(
          layer.name,
          layer.options
        )
      })
    }
    return { instance, context }
  } catch (error) {
    console.error('Failed to create Google Mutant layer:', error)
    throw error
  }
}

export default createLayerComponent<L.GridLayer, LayerProps & IProps>(
  (props, context) => {
    return {
      instance: null,
      context,
      async: createLeafletElement(props, context),
    }
  },
  updateGridLayer
)
