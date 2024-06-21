import React, { useState } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { GeomanControl } from './GeomanControl'
import Events from './Events'
import { LatLngTuple } from 'leaflet'
import { GeomanSearchControl } from './GeomanSearch'

export default function Map() {
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
        <TileLayer
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=sYQTqz7Q6H7zcmIU8B4d"
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
        <GeomanSearchControl showMarker={false} />
        <Events />
      </MapContainer>
    </>
  )
}
