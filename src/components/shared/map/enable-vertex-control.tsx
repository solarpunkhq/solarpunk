import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

function EnableVertexControl() {
  const map = useMap();

  useEffect(() => {
    if (map && map.pm) {
      map.pm.enableDraw('Polygon');
    }
  }, [map]);

  return null;
}

export default EnableVertexControl;
