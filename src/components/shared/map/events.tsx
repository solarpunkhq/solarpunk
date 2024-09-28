import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

import { Acre } from '@/utils/types';

function Events({
  acres,
  setAcres,
  existingAcres,
}: {
  acres: Acre[];
  setAcres: (acres: Acre[]) => void;
  existingAcres: boolean;
}) {
  const map = useMap();

  const calculateRevenueForAcre = (area: number) => {
    const revenuePerAcre = 14000; // Assuming average conditions
    const revenue = Math.floor(area * revenuePerAcre);

    return revenue;
  };

  const layerToAcre = (layer: any) => {
    const acre: Acre = {
      latlngs: layer._latlngs,
      area: (layer.pm.measurements.area / 1000000) * 247.105,
      revenue: calculateRevenueForAcre((layer.pm.measurements.area / 1000000) * 247.105),
    };
    return acre;
  };

  const updateAcres = () => {
    const layers = map.pm.getGeomanLayers();
    const acresFromLayers = layers.map((layer) => {
      return layerToAcre(layer);
    });
    setAcres(acresFromLayers);
  };

  useEffect(() => {
    if (map) {
      map.on('pm:create', (e) => {
        console.log('Layer created:', e);
        updateAcres();

        e.layer.on('pm:union', () => {
          console.log('Layer union', e);
          updateAcres();
        });

        e.layer.on('pm:edit', () => {
          console.log('Layer edited', e);
          updateAcres();
        });

        e.layer.on('pm:update', () => {
          console.log('Layer updated', e);
          updateAcres();
        });

        e.layer.on('pm:remove', () => {
          console.log('Layer removed:', e);
          updateAcres();
        });
      });
    }
  }, [map]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (map && existingAcres) {
        const inputElement = document.querySelector('.leaflet-control-geosearch .glass');
        if (inputElement) {
          const isFocused = document.activeElement === inputElement;
          //@ts-ignore
          const hasValue = inputElement.value.trim() !== '';
          if (!hasValue && !isFocused) {
            updateAcres();
          }
          return;
        }
        updateAcres();
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [map]);

  return null;
}

export default Events;
