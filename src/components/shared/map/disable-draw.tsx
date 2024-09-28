import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

function DisableDraw() {
  const map = useMap();

  useEffect(() => {
    if (map && map.pm) {
      map.pm.disableDraw();
    }
  }, [map]);

  return null;
}

export default DisableDraw;
