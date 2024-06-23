import { useEffect } from "react";
import { Layer, Polygon } from "leaflet";
import { useMap } from "react-leaflet";
import { Acre } from "@/lib/types";

type MapEventProps = {
  onAreaChange: (area: Acre[]) => void;
};
const Events = ({onAreaChange}: MapEventProps) => {
  const calculateAcres = (layer: Layer) => {
    const acre : Acre = {
      // @ts-ignore
      latlngPoints : layer._latlngs[0],
      // @ts-ignore
      area: layer.pm.measurements.area / 4046.8626697153, // 1 acre = 4046.8626697153 square meters
    }
    console.log("Acre",acre)
    console.log("Layer",layer)
    return acre;
  }
  const updateAcres = () =>{
    const layers = map.pm.getGeomanDrawLayers();
    const acres = layers.map((layer) => {
      return calculateAcres(layer);
    })
    onAreaChange(acres)
  } 
  const map = useMap();

  useEffect(() => {
    if (map) {
      map.on("pm:create", (e) => {
        console.log("Layer created:", e);
        updateAcres();
        e.layer.on("click", () => {
          console.log("Layer clicked",e);
        });

        e.layer.on("pm:edit", () => {
          console.log("Layer edited",e);
          updateAcres();
        });

        e.layer.on("pm:update", () => {
          console.log("Layer updated",e);
          updateAcres();
        });

        e.layer.on("pm:remove", (e) => {
          console.log("Layer removed:", e);
          updateAcres();
        });

        e.layer.on("pm:union", (e) => {
          console.log("Layer union:", e);
          updateAcres();
        });

        e.layer.on("pm:dragstart", (e) => {
          console.log("Layer dragstart:", e);
        });
  
        e.layer.on("pm:dragend", (e) => {
          console.log("Layer dragend:", e);
        });
  
      
      });


      map.on("pm:drawstart", (e) => {
        console.log("Layer drawstart:", e);
      });

      map.on("pm:drawend", (e) => {
        console.log("Layer drawend:", e);
      });

      map.on("pm:globaldrawmodetoggled", (e) => {
        console.log("Layer globaldrawmodetoggled:", e);
      });

      map.on("pm:globaldragmodetoggled", (e) => {
        console.log("Layer globaldragmodetoggled:", e);
      });
      
      map.on("pm:globalremovalmodetoggled", (e) => {
        console.log("Layer globalremovalmodetoggled:", e);
      });

      map.on("pm:globalcutmodetoggled", (e) => {
        console.log("Layer globalcutmodetoggled:", e);
      });

      map.on("pm:globalrotatemodetoggled", (e) => {
        console.log("Layer globalrotatemodetoggled:", e);
      });

    }
  }, [map]);

  return null;
};

export default Events;
