'use client'
import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { Acre } from '@/utils/types'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { CircleAlert, Loader2 } from 'lucide-react'
import * as L from 'leaflet'
console.log(L)
import 'leaflet.gridlayer.googlemutant/dist/Leaflet.GoogleMutant'
import { formatNumberAsAmount } from '@/lib/utils'
import {
  getProjectionsFromAcres,
  getTotalAreaFromAcreData,
} from '@/utils/projections'
import { Logo } from './Logo'
import { Input } from './ui/input'

const Map = dynamic(() => import('@/components/map/Map'), {
  ssr: false,
})

export function OnboardingComponent({ country }: { country: string }) {
  const [acres, setAcres] = useState<Acre[]>([])
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

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const router = useRouter()

  const searchParams = useSearchParams()

  let lat = parseFloat(searchParams.get('lat'))
  let zoom = 15
  if (lat === null || lat === undefined || Number.isNaN(lat)) {
    lat = 34.0549
    zoom = 13
  }
  let lng = parseFloat(searchParams.get('lng'))
  if (lng === null || lng === undefined || Number.isNaN(lng)) {
    lng = -118.2426
  }

  const submitForm = async () => {
    setLoading(true)
    if (email === '') {
      setError('Email is required')
      setLoading(false)
      return
    }
    if (!email.includes('@') || !email.includes('.')) {
      setError('Invalid email')
      setLoading(false)
      return
    }
    if (name === '') {
      setError('Name is required')
      setLoading(false)
      return
    }
    if (acres.length === 0) {
      setError('Please select an area')
      setLoading(false)
      return
    }
    let formatted_email = email.toLowerCase().trim()
    try {
      const response = await fetch('/api/submit_onboarding', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formatted_email,
          name,
          acres,
        }),
      })

      if (response.ok) {
        const data = await response.json()
        console.log('Response data:', data)
        router.push(data.magic_link)
      } else {
        console.error('Error:', response.statusText)
        setError(response.statusText)
        setLoading(false)
      }
    } catch (error) {
      console.error('Fetch error:', error)
      setError('A fetch error occurred')
      setLoading(false)
    }
  }

  return (
    // <div className="-mb-[200px] mt-12 h-full">
    //   <div className="flex h-full w-full flex-col items-center justify-center px-8 md:flex-row md:items-stretch md:justify-start">
    //     <Map
    //       zoom={zoom}
    //       lat={lat}
    //       lng={lng}
    //       acres={acres}
    //       setAcres={setAcres}
    //       existingAcres={[]}
    //       country={country}
    //     />
    //     <div className="rounded-r-4xl h-full w-full max-w-96 border border-l-0 bg-white p-8">
    //       <div>
    //         <h1 className="font-display text-4xl">Mark your acres</h1>
    //         <h2 className="">Use the map to outline your territory</h2>
    //         <div className="relative flex overflow-x-auto">
    //           <table className="mt-4 w-full border text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
    //             <thead className="bg-gray-50 text-xs uppercase text-gray-700 ">
    //               <tr>
    //                 <th scope="col" className="px-6 py-3">
    //                   Area
    //                 </th>
    //                 <th scope="col" className="px-6 py-3">
    //                   Revenue/yr
    //                 </th>
    //               </tr>
    //             </thead>
    //             <tbody>
    //               {acres.map((acre, index) => (
    //                 <tr key={index} className="border-b bg-white ">
    //                   <th
    //                     scope="row"
    //                     className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 "
    //                   >
    //                     Area {index + 1}
    //                   </th>
    //                   <td className="px-6 py-4">
    //                     ${acre.revenue.toLocaleString()}/yr
    //                   </td>
    //                 </tr>
    //               ))}
    //               {acres.length === 0 && (
    //                 <tr className="border-b bg-white ">
    //                   <th
    //                     scope="row"
    //                     className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 "
    //                   >
    //                     Select an area
    //                   </th>
    //                   <td className="px-6 py-4">$xxx,yyy/yr</td>
    //                 </tr>
    //               )}
    //             </tbody>
    //           </table>
    //         </div>
    //         <input
    //           className="mt-4 w-full rounded border p-2"
    //           placeholder="Email"
    //           onChange={(e) => setEmail(e.target.value)}
    //           value={email}
    //         />
    //         <input
    //           className="mt-4 w-full rounded border p-2"
    //           placeholder="Name"
    //           onChange={(e) => setName(e.target.value)}
    //           value={name}
    //         />
    //         {error && <div className="mt-2 text-red-500">{error}</div>}
    //         <Button
    //           className="mx-auto mt-4 !px-5 !py-3"
    //           onClick={() => {
    //             submitForm()
    //           }}
    //           disabled={loading}
    //         >
    //           {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
    //           {loading ? 'Please wait' : 'Submit'}
    //         </Button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="mt-4 h-screen w-full overflow-hidden">
      <div className="flex h-full w-full flex-col items-center justify-center px-8 md:flex-row md:items-stretch md:justify-start">
        <div className="flex h-full w-full flex-col items-center justify-start">
          <div className="mb-8 ml-6 mt-4 flex items-center justify-center self-start">
            <div
              className="flex cursor-pointer items-center"
              onClick={() => (window.location.href = '/')}
            >
              <Logo filled={true} className="h-8" />
            </div>
          </div>
          <Map
            zoom={zoom}
            lat={lat}
            lng={lng}
            acres={acres}
            setAcres={setAcres}
            existingAcres={[]}
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
        <div className="rounded-r-4xl ml-4 h-full max-h-screen w-full max-w-96 bg-white">
          <div className="mt-20 flex flex-col border-2 border-gray-200 p-4">
            <h1 className="mb-4 text-3xl font-bold">Mark your land</h1>
            <div className="relative mb-4 flex-col overflow-x-auto text-sm">
              <div className="mb-4">
                Use the map to select your territory. Use the following tools on
                the left of the map to create or edit selections:{' '}
              </div>
              <div className="mb-2 flex flex-row items-center justify-start gap-2">
                <img src="/map_icons/map_type_tool.svg"></img>
                <span>Toggle between satellite and roadmap views</span>
              </div>
              <div className="mb-2 flex flex-row items-center justify-start gap-2">
                <img src="/map_icons/zoom_in_tool.svg"></img>
                <span>Zoom in to the map</span>
              </div>
              <div className="mb-2 flex flex-row items-center justify-start gap-2">
                <img src="/map_icons/zoom_out_tool.svg"></img>
                <span>Zoom out of the map</span>
              </div>
              <div className="mb-2 flex flex-row items-center justify-start gap-2">
                <img src="/map_icons/vertex_tool.svg"></img>
                <span>Add a new selection</span>
              </div>
              <div className="mb-2 flex flex-row items-center justify-start gap-2">
                <img src="/map_icons/edit_vertex_tool.svg"></img>
                <span>Edit an existing selection</span>
              </div>
              <div className="mb-2 flex flex-row items-center justify-start gap-2">
                <img src="/map_icons/erase_selection_tool.svg"></img>
                <span>Erase a selection</span>
              </div>
              <div className="ml-1 mt-4 text-base font-semibold">Name</div>
              <Input
                placeholder="Your name"
                className="!ml-1 !w-[97%] !border-gray-300"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <div className="ml-1 mt-4 text-base font-semibold">Email</div>
              <Input
                placeholder="Your email"
                className="!ml-1 !w-[97%] !border-gray-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="mt-4 text-2xl font-semibold">Summary</div>
              <div>
                <b>Area: </b>
                {formatNumberAsAmount(totalArea.toFixed(2))} Acres
              </div>
              <div>
                <b>Est. Revenue: </b>$
                {formatNumberAsAmount(projections.revenue_per_year.toFixed(0))}
                /yr
              </div>
              <div>
                <b>Est. Energy Production: </b>
                {formatNumberAsAmount(projections.mw_produced.toFixed(1))} MW/yr
              </div>
              <div className="flex flex-col items-center justify-center">
                {error && <div className=" text-red-500">{error}</div>}
                <Button
                  className="mt-4"
                  disabled={loading}
                  onClick={() => {
                    submitForm()
                  }}
                >
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {loading ? 'Please wait' : 'Submit'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
