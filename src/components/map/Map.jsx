'use client'

import React, { useState } from 'react'
import { MapContainer } from 'react-leaflet'
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

const CustomGoogleLayer = dynamic(() => import('./CustomGoogleLayer'), {
  ssr: false,
})

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
        <CustomGoogleLayer
          apiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY}
          type={mapType}
        />
        <MapTypeControl setMapType={setMapType} />

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
          country={country}
        />
        <PreDrawnAcres acres={existingAcres} />
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
