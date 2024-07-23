import * as React from 'react'
import * as L from 'leaflet'
import {
  createLayerComponent,
  updateGridLayer,
  LeafletContextInterface,
  LayerProps,
} from '@react-leaflet/core'
import 'leaflet.gridlayer.googlemutant'
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

const loadGoogleMapsScript = (loaderConf: LoaderOptions) => {
  return new Promise<void>((resolve, reject) => {
    if (googleMapsScriptLoaded) {
      resolve()
      return
    }

    const loader = new Loader(loaderConf)
    loader
      .load()
      .then(() => {
        googleMapsScriptLoaded = true
        resolve()
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
  const [isScriptLoaded, setScriptLoaded] = React.useState(false)

  React.useEffect(() => {
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
    return null // or a loading spinner
  }

  return <GoogleMutantLayer {...props} />
}

export default GoogleMutantLayerWrapper
