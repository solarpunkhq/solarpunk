'use client'
import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { Acre } from '@/utils/types'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { CircleAlert, DollarSign, Leaf, Loader2, MapPin } from 'lucide-react'
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
import { Separator } from '@/components/ui/separator'
import { Card, CardContent } from './ui/card'

const Map = dynamic(() => import('@/components/map/Map'), {
  ssr: false,
})

function MainStat({ label, value, unit }) {
  return (
    <div className="space-y-2 text-center">
      <h3 className="text-lg font-medium text-gray-400">{label}</h3>
      <p className="text-4xl font-bold">
        {value}
        <span className="ml-1 text-3xl text-gray-400">{unit}</span>
      </p>
    </div>
  )
}

function StatItem({ icon: Icon, label, value, unit }) {
  return (
    <div className="flex items-center space-x-4">
      <div>
        <div className="flex items-center">
          <Icon className="h-4 w-4 text-gray-400" />
          <h3 className="text-sm font-medium text-gray-400">{label}</h3>
        </div>
        <p className="text-xl font-bold">
          {value}
          <span className="ml-1 text-lg text-gray-400">{unit}</span>
        </p>
      </div>
    </div>
  )
}

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
    <div className="mt-4 w-full sm:h-screen sm:overflow-hidden">
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
          <div className="mt-2 rounded-md bg-neutral-100 p-6 text-center text-sm sm:w-1/2">
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
                Use the map to select your territory. Use the tools on the left
                of the map to create or edit selections.
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
              <Card className="ml-1 mt-6 w-[97%] border-gray-300 text-black">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-xl font-bold">Summary</h2>
                  </div>
                  <div className="space-y-6">
                    <MainStat
                      label="Revenue"
                      value={
                        '$' +
                        formatNumberAsAmount(
                          projections.revenue_per_year.toFixed(0)
                        )
                      }
                      unit="/yr"
                    />
                    <Separator className="bg-gray-800" />
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <StatItem
                        icon={MapPin}
                        label="Area"
                        value={formatNumberAsAmount(totalArea.toFixed(2))}
                        unit="acres"
                      />
                      <StatItem
                        icon={Leaf}
                        label="Energy"
                        value={formatNumberAsAmount(
                          projections.mw_produced.toFixed(1)
                        )}
                        unit="MW/yr"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="my-2 flex text-gray-500">
                <span>
                  <CircleAlert className="inline h-4 w-4" /> These figures are
                  estimates and not guaranteed.
                </span>
              </div>
              <div className="mt-2 flex flex-col items-center justify-center">
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
