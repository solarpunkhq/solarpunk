'use client'
import React, { useState } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { GeomanControl } from './GeomanControl'
import Events from './Events'
import ReactLeafletGoogleLayer from 'react-leaflet-google-layer'
import { useMap } from 'react-leaflet'
import { useEffect } from 'react'
import { GeoSearchControl } from 'leaflet-geosearch'
import { EnableVertexControl } from './EnableVertexControl'
import { PreDrawnAcres } from './PreDrawnAcres'
import dynamic from 'next/dynamic'
import CustomSearchProvider from '@/utils/customSearchProvider'
import { DisableDraw } from './DisableDraw'

const MapTypeControl = dynamic(() => import('./MapTypeControl'), {
  ssr: false,
})

const Search = (props) => {
  const map = useMap()
  const { provider } = props

  useEffect(() => {
    const searchControl = new GeoSearchControl({
      provider,
      style: 'bar',
      showMarker: false,
    })

    map.addControl(searchControl)
    return () => map.removeControl(searchControl)
  }, [props])

  return null
}

export default function Map({
  zoom,
  lat,
  lng,
  acres,
  setAcres,
  existingAcres,
  country,
}) {
  const [location, setLocation] = useState([lat, lng])
  const [mapType, setMapType] = useState('hybrid')

  return (
    <>
      <MapContainer
        key={mapType}
        center={location}
        zoom={zoom}
        className="rounded-l-2xl"
        scrollWheelZoom={true}
        style={{
          width: '100%',
          height: '80vh',
          margin: '0 auto',
          borderTopLeftRadius: '40px',
          borderBottomLeftRadius: '40px',
          borderTopRightRadius: '40px',
          borderBottomRightRadius: '40px',
        }}
      >
        {/* <TileLayer
          url={`https://{s}.google.com/vt/lyrs=${mapType}&x={x}&y={y}&z={z}&scale=2&hl=en&gl=US&${process.env.NEXT_PUBLIC_MAPS_API_KEY}`}
          subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
        /> */}
        <ReactLeafletGoogleLayer
          apiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY}
          type={mapType}
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
          unionMode={false}
          differenceMode={false}
          splitMode={false}
          scaleMode={false}
          pinningOption={false}
          snappingOption={false}
          drawCircleMarker={false}
          rotateMode={false}
          snapGuidesOption={false}
          autoTracingOption={false}
          country={country}
        />
        <MapTypeControl setMapType={setMapType} mapType={mapType} />

        <PreDrawnAcres acres={existingAcres} country={country} />
        {acres && setAcres && <EnableVertexControl />}
        {!acres && !setAcres && <DisableDraw />}
        <Search
          provider={
            new CustomSearchProvider({
              apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
            })
          }
        />
        {acres && setAcres && <Events acres={acres} setAcres={setAcres} />}
      </MapContainer>
    </>
  )
}