import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import ReactLeafletGoogleLayer from 'react-leaflet-google-layer'
import { GeomanControl } from '../map/GeomanControl'

const ExpMap = () => {
  return (
    <>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ width: '100vw', height: '100vh' }}
      >
        <TileLayer
          url={`https://{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}&scale=2&hl=en&gl=US&${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
          subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
        />
        <GeomanControl
          position="topleft"
          drawMarker={false}
          drawPolyline={false}
          measurement
          drawCircle={false}
          drawRectangle={false}
          drawText={false}
          dragMode={false}
          cutPolygon={false}
          splitMode={false}
          scaleMode={false}
          pinningOption={false}
          snappingOption={false}
          drawCircleMarker={false}
          rotateMode={false}
          snapGuidesOption={false}
          autoTracingOption={false}
        />
      </MapContainer>
    </>
  )
}

export default ExpMap
