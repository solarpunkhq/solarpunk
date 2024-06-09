import { useEffect } from "react";
import { useMap } from "react-leaflet";

const Events = () => {
  const map = useMap();

  useEffect(() => {
    if (map) {
      map.on("pm:create", (e) => {
        console.log("Layer created:", e);

        e.layer.on("click", () => {
          console.log("Layer clicked",e);
        });

        e.layer.on("pm:edit", () => {
          console.log("Layer edited",e);
        });

        e.layer.on("pm:update", () => {
          console.log("Layer updated",e);
        });

        e.layer.on("pm:remove", (e) => {
          console.log("Layer removed:", e);
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
