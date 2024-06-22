import React, { useState } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { GeomanControl } from './GeomanControl'
import Events from './Events'
import { LatLngTuple } from 'leaflet'
import ReactLeafletGoogleLayer from 'react-leaflet-google-layer'
import { Acre } from '@/utils/types'

export default function Map({
  acres,
  setAcres,
}: {
  acres: Acre[]
  setAcres: (acres: Acre[]) => void
}) {
  const lng = 34.0549
  const lat = -118.2426
  const [location, setLocation] = useState<LatLngTuple>([lng, lat])

  return (
    <>
      <MapContainer
        center={location}
        zoom={13}
        className="rounded-l-2xl"
        scrollWheelZoom={true}
        style={{
          width: '100%',
          height: '80vh',
          margin: '0 auto',
          borderTopLeftRadius: '40px',
          borderBottomLeftRadius: '40px',
        }}
      >
        <ReactLeafletGoogleLayer
          apiKey={process.env.MAPS_API_KEY}
          type={'hybrid'}
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
        <Events acres={acres} setAcres={setAcres} />
      </MapContainer>
    </>
  )
}
