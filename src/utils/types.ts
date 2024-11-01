import { inter } from '@/fonts';
import { JsonValue } from '@prisma/client/runtime/library';

export interface LatLng {
  lat: number;
  lng: number;
}

export interface Acre {
  area: number;
  latlngs: LatLng[];
  revenue: number;
}
