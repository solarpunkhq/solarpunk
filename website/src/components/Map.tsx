import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { GeomanControl } from './GeomanControl'
import Events from './Events'

const Map = () => {
  return (
    <>
      <MapContainer
        center={[34.0549, -118.2426]}
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
          url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=FTejVijNkqKWPbQui8i9"
        />

        <GeomanControl
          position="topleft"
          drawMarker={false}
          drawPolyline={false}
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
        <Events />
      </MapContainer>
    </>
  )
}

export default Map
