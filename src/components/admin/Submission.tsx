'use client'

import { useQuery } from '@tanstack/react-query'
import AdminHeader from './Header'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('@/components/Map'), {
  ssr: false,
})

export function Submission({ user_id }) {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['submissionData'],
    queryFn: async () => {
      const response = await fetch('/api/admin/get_submission/' + user_id)
      return await response.json()
    },
  })

  if (isPending) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center">
        'An error has occurred: ' + {error.message}
      </div>
    )
  }

  console.log(data)

  return (
    <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <AdminHeader
        breadcrumbs={[
          { href: '/admin/submission/' + user_id, label: data.name },
        ]}
      />
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <Map
          zoom={13}
          lat={data.acres[0][0][0].lat}
          lng={data.acres[0][0][0].lng}
          existingAcres={data.acres}
          acres={null}
          setAcres={null}
        />
      </main>
      <div className="flex flex-col items-center justify-center"></div>
    </div>
  )
}
