export interface LatLng {
  lat: number
  lng: number
}

export interface Acre {
  area: number
  latlngs: LatLng[]
  revenue: number
}
