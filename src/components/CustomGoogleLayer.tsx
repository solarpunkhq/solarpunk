import 'leaflet.gridlayer.googlemutant'
import * as React from 'react'
import * as L from 'leaflet'
import {
  createLayerComponent,
  updateGridLayer,
  LeafletContextInterface,
  LayerProps,
} from '@react-leaflet/core'
import { Loader, LoaderOptions } from '@googlemaps/js-api-loader'
import { useEffect, useState } from 'react'

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

const waitForGoogleMutant = (resolve: () => void) => {
  if (L.gridLayer && L.gridLayer.googleMutant) {
    resolve()
  } else {
    setTimeout(() => waitForGoogleMutant(resolve), 50) // check every 50ms
  }
}

const loadGoogleMapsScript = (loaderConf: LoaderOptions) => {
  return new Promise<void>((resolve, reject) => {
    if (googleMapsScriptLoaded) {
      waitForGoogleMutant(resolve)
      return
    }

    const loader = new Loader(loaderConf)
    loader
      .importLibrary('core')
      .then(() => {
        googleMapsScriptLoaded = true
        waitForGoogleMutant(resolve)
      })
      .catch(reject)
  })
}

const createLeafletElement = (
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

  console.log(L.gridLayer.googleMutant)

  const instance = L.gridLayer.googleMutant(googleMutantProps)

  if (googleMapsAddLayers) {
    googleMapsAddLayers.forEach((layer) => {
      ;(instance as L.gridLayer.GoogleMutant).addGoogleLayer(
        layer.name,
        layer.options
      )
    })
  }

  return { instance, context }
}

const GoogleMutantLayer = createLayerComponent<
  L.GridLayer,
  LayerProps & IProps
>(createLeafletElement, updateGridLayer)

const GoogleMutantLayerWrapper: React.FC<IProps> = (props) => {
  const [isScriptLoaded, setScriptLoaded] = useState(false)

  useEffect(() => {
    if (props.useGoogMapsLoader) {
      loadGoogleMapsScript({
        apiKey: props.apiKey,
        ...props.googleMapsLoaderConf,
      })
        .then(() => setScriptLoaded(true))
        .catch(console.error)
    } else {
      setScriptLoaded(true)
    }
  }, [props.apiKey, props.useGoogMapsLoader, props.googleMapsLoaderConf])

  if (!isScriptLoaded) {
    console.log('Google Maps script is not loaded')
    return null
  }

  return <GoogleMutantLayer {...props} />
}

export default GoogleMutantLayerWrapper
