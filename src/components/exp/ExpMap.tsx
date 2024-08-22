import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import ReactLeafletGoogleLayer from 'react-leaflet-google-layer'

const ExpMap = () => {
  return (
    <>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ width: '100vw', height: '100vh' }}
      >
        <ReactLeafletGoogleLayer
          type="hybrid"
          apiKey="AIzaSyCyQtqLWjG5qYbwxLNjKoXZFci0nC5poaA"
        />
      </MapContainer>
    </>
  )
}

export default ExpMap
