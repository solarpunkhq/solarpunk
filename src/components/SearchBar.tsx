'use client'

import React, { useState, useEffect } from 'react'
import { GoogleProvider } from 'leaflet-geosearch'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'

export default function SearchBar() {
  const provider = new GoogleProvider({
    apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
  })

  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    provider
      .search({ query })
      .then((results: object[]) => setResults(results.slice(0, 5)))
  }, [query])

  const router = useRouter()

  function redirectToOnboarding(lat: number, lng: number) {
    router.push(`/onboarding?lat=${lat}&lng=${lng}`)
  }

  return (
    <div className="mt-6 w-full rounded-sm bg-white md:w-3/4">
      <Input
        type="text"
        placeholder="Enter an address, neighborhood, city or ZIP code"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="">
        {results.map((result, idx) => (
          <div
            key={idx}
            className="px-4 py-1 leading-8"
            onClick={() => redirectToOnboarding(result.y, result.x)}
          >
            {result.label}
          </div>
        ))}
      </div>
    </div>
  )
}
