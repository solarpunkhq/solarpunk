'use client'

import * as L from 'leaflet'
console.log(L)
import 'leaflet.gridlayer.googlemutant/dist/Leaflet.GoogleMutant'
import { useEffect, useState } from 'react'
import Map from '../map/Map'
import { LogOut } from 'lucide-react'
import { Button } from '../ui/button'
import { Logo } from '../Logo'
import DashboardSidebar from './Sidebar'
import {
  getProjectionsFromAcres,
  getTotalAreaFromAcreData,
} from '@/utils/projections'
import { formatNumberAsAmount } from '@/lib/utils'

export default function Dashboard({
  user_id,
  existing_acres,
  acre_data,
  country,
}: {
  user_id: number
  existing_acres: any[]
  acre_data: any[]
  country: string
}) {
  const lat = existing_acres[0][0][0].lat
  const lng = existing_acres[0][0][0].lng

  const [acres, setAcres] = useState(acre_data)

  const [totalArea, setTotalArea] = useState(getTotalAreaFromAcreData(acres))
  const [projections, setProjections] = useState(
    getProjectionsFromAcres(totalArea, 25, 5)
  )

  useEffect(() => {
    const newTotalArea = getTotalAreaFromAcreData(acres)
    const newProjections = getProjectionsFromAcres(newTotalArea, 25, 5)
    setTotalArea(newTotalArea)
    setProjections(newProjections)
  }, [acres])

  return (
    <div className="h-screen w-full overflow-hidden">
      <div className="flex h-full w-full flex-col items-center justify-center px-8 md:flex-row md:items-stretch md:justify-start">
        <div className="flex h-full w-full flex-col items-center justify-start">
          <div className="my-8 ml-6 flex items-center justify-center self-start">
            <div
              className="flex cursor-pointer items-center"
              onClick={() => (window.location.href = '/')}
            >
              <Logo filled={true} className="h-8" />
            </div>
          </div>
          <Map
            zoom={16}
            lat={lat}
            lng={lng}
            acres={acres}
            setAcres={setAcres}
            existingAcres={existing_acres}
            country={country}
          />
          <div className="mt-2 w-1/2 rounded-md bg-neutral-100 p-6 text-center text-sm">
            <span className="font-semibold">
              ${formatNumberAsAmount(projections.revenue_per_year.toFixed(0))}{' '}
              Est. Yearly Revenue
            </span>
            {' | '}
            <span className="text-gray-600">
              {' '}
              {formatNumberAsAmount(totalArea.toFixed(2))} Acres
            </span>
          </div>
        </div>

        <div className="rounded-r-4xl ml-4 h-full max-h-screen w-full max-w-96 overflow-y-scroll bg-white">
          <div className="flex h-full flex-col p-4">
            <div className="mr-2 mt-4 h-6 w-6 self-end">
              <Button
                variant="ghost"
                size="icon"
                className="overflow-hidden"
                onClick={() => (window.location.href = '/logout')}
              >
                <LogOut className="h-6 w-6" />
              </Button>
            </div>

            <h1 className="mb-4 mt-8 text-center text-3xl font-bold">
              Your Acres
            </h1>
            <DashboardSidebar user_id={user_id} acres={acres} />
          </div>
        </div>
      </div>
    </div>
  )
}