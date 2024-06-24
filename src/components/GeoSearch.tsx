import { createControlComponent } from "@react-leaflet/core";
import { GeoSearchControl, GoogleProvider } from "leaflet-geosearch";
import "leaflet-geosearch/dist/geosearch.css";

const createGeoSearchInstance = () => {
    const provider = new GoogleProvider({apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY});
    // @ts-ignore
    const searchControl = new GeoSearchControl({
        provider,
        style: 'bar',
        showMarker: false,
    });
    return searchControl;
};

export const GeoSearch = createControlComponent(createGeoSearchInstance);