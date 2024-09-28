'use client';

import dynamic from 'next/dynamic';

import React, { useState } from 'react';
import { useEffect } from 'react';
import { MapContainer } from 'react-leaflet';
import { useMap } from 'react-leaflet';
import ReactLeafletGoogleLayer from 'react-leaflet-google-layer';

import CustomSearchProvider from '@/utils/custom-search-provider';
import { LatLngTuple, gridLayer } from 'leaflet';
import { GeoSearchControl } from 'leaflet-geosearch';

import DisableDraw from './disable-draw';
import EnableVertexControl from './enable-vertex-control';
import Events from './events';
import { GeomanControl } from './geoman-control';
import PreDrawnAcres from './pre-drawn-acres';

const MapTypeControl = dynamic(() => import('./map-type-control'), {
  ssr: false,
});

function Search(props: any) {
  const map = useMap();
  const { provider } = props;

  //@ts-ignore
  useEffect(() => {
    const searchControl = GeoSearchControl({
      provider,
      style: 'bar',
      showMarker: false,
    });

    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  }, [props]);

  return null;
}

function Map({
  zoom,
  lat,
  lng,
  acres,
  setAcres,
  existingAcres,
  country,
}: {
  zoom: number;
  lat: number;
  lng: number;
  acres: any;
  setAcres: any;
  existingAcres: any;
  country: string;
}) {
  const [location, setLocation] = useState([lat, lng]);
  const [mapType, setMapType] = useState('hybrid');

  return (
    <>
      <MapContainer
        key={mapType}
        center={location as LatLngTuple}
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
        <ReactLeafletGoogleLayer
          apiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY}
          type={mapType as gridLayer.GoogleMutantType}
        />
        <GeomanControl
          position="topleft"
          //@ts-ignore
          drawMarker={false}
          drawPolyline={false}
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
          measurement
        />
        <MapTypeControl setMapType={setMapType} mapType={mapType} />

        <PreDrawnAcres acres={existingAcres} country={country} />
        {acres && setAcres && <EnableVertexControl />}
        {!acres && !setAcres && <DisableDraw />}
        <Search
          provider={CustomSearchProvider({
            apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY || '',
          })}
        />
        {acres && setAcres && (
          <Events acres={acres} setAcres={setAcres} existingAcres={existingAcres.length > 0} />
        )}
      </MapContainer>
    </>
  );
}

export default Map;
