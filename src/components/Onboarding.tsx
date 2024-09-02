'use client'
import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Acre } from '@/utils/types'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { Loader2 } from 'lucide-react'
if (typeof window !== 'undefined') {
  const L = require('leaflet')
  require('leaflet.gridlayer.googlemutant/dist/Leaflet.GoogleMutant')
}

const Map = dynamic(() => import('@/components/map/Map'), {
  ssr: false,
})

export function OnboardingComponent({ country }: { country: string }) {
  const [acres, setAcres] = useState<Acre[]>([])
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

        // router.push(data.magic_link)
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
    <div className="-mb-[200px] mt-12 h-full">
      <div className="flex h-full w-full flex-col items-center justify-center px-8 md:flex-row md:items-stretch md:justify-start">
        <Map
          zoom={zoom}
          lat={lat}
          lng={lng}
          acres={acres}
          setAcres={setAcres}
          existingAcres={[]}
          country={country}
        />
        <div className="rounded-r-4xl h-full w-full max-w-96 border border-l-0 bg-white p-8">
          <div>
            <h1 className="font-display text-4xl">Mark your acres</h1>
            <h2 className="">Use the map to outline your territory</h2>
            <div className="relative flex overflow-x-auto">
              <table className="mt-4 w-full border text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
                <thead className="bg-gray-50 text-xs uppercase text-gray-700 ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Area
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Revenue/yr
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {acres.map((acre, index) => (
                    <tr key={index} className="border-b bg-white ">
                      <th
                        scope="row"
                        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 "
                      >
                        Area {index + 1}
                      </th>
                      <td className="px-6 py-4">
                        ${acre.revenue.toLocaleString()}/yr
                      </td>
                    </tr>
                  ))}
                  {acres.length === 0 && (
                    <tr className="border-b bg-white ">
                      <th
                        scope="row"
                        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 "
                      >
                        Select an area
                      </th>
                      <td className="px-6 py-4">$xxx,yyy/yr</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <input
              className="mt-4 w-full rounded border p-2"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              className="mt-4 w-full rounded border p-2"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            {error && <div className="mt-2 text-red-500">{error}</div>}
            <Button
              className="mx-auto mt-4 !px-5 !py-3"
              onClick={() => {
                submitForm()
              }}
              disabled={loading}
            >
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {loading ? 'Please wait' : 'Submit'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
