import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

import * as L from 'leaflet';

function PreDrawnAcres({ acres, country }) {
  const map = useMap();

  useEffect(() => {
    let areaUnit = 'acres';
    let areaCalculation = (value) => Math.round((value / 4046.86) * 100) / 100;

    if (country && country !== 'US') {
      areaUnit = 'ha';
      areaCalculation = (value) => Math.round((value / 10000) * 100) / 100;
    }

    function applyMeasurementOptions(layer) {
      layer.pm.setOptions({
        units: {
          metric: {
            distance: [
              {
                unit: 'm',
                calculation: (value) => Math.round(value * 100) / 100,
              },
            ],
            area: [
              {
                unit: areaUnit,
                calculation: areaCalculation,
              },
            ],
          },
        },
      });
      layer.setStyle({
        color: 'black',
        fillColor: '#E2F677',
        fillOpacity: 0.7,
        weight: 2.5,
        opacity: 1,
      });
      layer.pm.addMeasurementTooltipToLayer(layer);
      layer.closeTooltip();
    }
    if (map && map.pm) {
      if (acres.length > 0) {
        for (const acre of acres) {
          const layer = L.polygon(acre, { pmIgnore: false });
          layer.addTo(map);
          applyMeasurementOptions(layer);
          layer.on('pm:enable', (e) => {
            applyMeasurementOptions(e.layer);
          });
        }
      }
    }
  }, [map]);

  return null;
}

export default PreDrawnAcres;
