'use client'
import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Loader2 } from 'lucide-react'
import { useToast } from './ui/use-toast'

const Map = dynamic(() => import('@/components/Map'), {
  ssr: false,
})

export default function EditAcresForm({
  user_data,
  acre_data,
  existing_acres,
}) {
  const [acres, setAcres] = useState(acre_data)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const { toast } = useToast()

  const submitForm = async () => {
    setLoading(true)
    if (acres.length === 0) {
      setError('Please select an area')
      setLoading(false)
      return
    }
    try {
      const response = await fetch('/api/update_onboarding', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user_data.email,
          user_id: user_data.user_id,
          acres: acres,
        }),
      })

      if (response.ok) {
        const data = await response.json()
        console.log('Response data:', data)
        setLoading(false)
        toast({ description: 'Acres updated successfully' })
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

  const lat = existing_acres[0][0][0].lat
  const lng = existing_acres[0][0][0].lng

  return (
    <div className="-mb-[200px] mt-12 h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center px-8 md:flex-row md:items-stretch md:justify-start">
        <Map
          zoom={13}
          lat={lat}
          lng={lng}
          acres={acres}
          setAcres={setAcres}
          existingAcres={[]}
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
