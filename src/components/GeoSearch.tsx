import { createControlComponent } from "@react-leaflet/core";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import "leaflet-geosearch/dist/geosearch.css";

const createGeoSearchInstance = () => {
    const provider = new OpenStreetMapProvider();
    // @ts-ignore
    const searchControl = new GeoSearchControl({
        provider,
        style: 'bar',
        showMarker: false,
    });
    return searchControl;
};

export const GeoSearch = createControlComponent(createGeoSearchInstance);