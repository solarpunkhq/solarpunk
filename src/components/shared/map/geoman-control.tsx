import '@geoman-io/leaflet-geoman-pro';
import '@geoman-io/leaflet-geoman-pro/dist/leaflet-geoman.css';
import { createControlComponent } from '@react-leaflet/core';
import * as L from 'leaflet';

interface Props extends L.ControlOptions {
  position: L.ControlPosition;
  drawCircle?: boolean;
  oneBlock?: boolean;
}

const Geoman = L.Control.extend({
  options: {},
  initialize(options: Props) {
    L.setOptions(this, options);
  },

  addTo(map: L.Map) {
    if (!map.pm) {
      return;
    }

    // @ts-ignore
    map.pm.addControls({
      ...this.options,
    });

    // @ts-ignore
    map.pm.setGlobalOptions({
      measurements: { measurement: true, displayFormat: 'metric' },
    });

    // @ts-ignore
    map.pm.enableDraw('Polygon', {
      pathOptions: {
        color: 'black',
        opacity: 1,
        fillColor: '#E2F677',
        fillOpacity: 0.7,
        weight: 2.5,
      },
    });

    let areaUnit = 'acres';
    let areaCalculation = (value: number) => Math.round((value / 4046.86) * 100) / 100;

    //@ts-ignore
    if (this.options.country && this.options.country !== 'US' && this.options.country !== 'UK') {
      areaUnit = 'ha';
      areaCalculation = (value) => Math.round((value / 10000) * 100) / 100;
    }

    map.on('pm:drawstart', (e) => {
      //@ts-ignore
      map.pm.Draw[e.shape].setOptions({
        units: {
          metric: {
            distance: [
              {
                unit: 'm',
                calculation: (value: number) => Math.round(value * 100) / 100,
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
    });
    map.on('pm:create', (e) => {
      e.layer.on('pm:enable', (x) => {
        applyMeasurementOptions(x.layer);
      });
    });
    map.on('pm:union pm:difference', (e) => {
      //@ts-ignore
      applyMeasurementOptions(e.resultLayer);
    });
    map.on('pm:split', (e) => {
      //@ts-ignore
      e.layers.getLayers().forEach((layer) => {
        applyMeasurementOptions(layer);
      });
    });
    map.on('pm:cut', (e) => {
      applyMeasurementOptions(e.layer);
    });

    function applyMeasurementOptions(layer: L.Layer) {
      //@ts-ignore
      layer.pm.setOptions({
        units: {
          metric: {
            distance: [
              {
                unit: 'm',
                calculation: (value: number) => Math.round(value * 100) / 100,
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
      //@ts-ignore
      layer.pm.addMeasurementTooltipToLayer(layer);
      layer.closeTooltip();
    }
  },
});

const createGeomanInstance = (props: Props) => {
  return new Geoman(props);
};

export const GeomanControl = createControlComponent(createGeomanInstance);
