'use client'

import { useQuery } from '@tanstack/react-query'
import AdminHeader from './Header'
import dynamic from 'next/dynamic'
import { Button } from '../ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

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
          zoom={17}
          lat={data.acres[0][0][0].lat}
          lng={data.acres[0][0][0].lng}
          existingAcres={data.acres}
          acres={null}
          setAcres={null}
        />
      </main>
      <div className="flex flex-row items-start justify-between">
        <div className="m-4 flex w-1/2 flex-col items-start justify-center p-4">
          <h1 className="text-2xl font-bold">{data.name}</h1>
          <Badge className="text-xs">
            {new Date(data.created_timestamp).toLocaleDateString()}
          </Badge>
          <div>
            <h2 className="mt-4 text-base font-semibold">About Farm</h2>
            <p className="text-wrap text-sm">{data.about_farm}</p>
          </div>
          <div>
            <h2 className="mt-4 text-base font-semibold">Finances</h2>
            <p className="text-sm">
              <b>Projected Revenue: </b>${data.total_revenue.toLocaleString()}
            </p>
            <p className="text-sm">
              <b>Total Area: </b>
              {data.total_area.toFixed(2)} acres
            </p>
            <p className="text-sm">
              <b>Finance Option: </b>
              {data.finance_option?.replaceAll('_', ' ')}
            </p>
          </div>
          <div>
            <h2 className="mt-4 text-base font-semibold">
              Contact Information
            </h2>
            <p className="text-sm">
              <b>Email: </b>
              {data.email}
            </p>
            <p className="text-sm">
              <b>Phone Number: </b>
              {data.phone_number}
            </p>
          </div>
        </div>
        <div className="justify-startp-4 m-4 flex w-1/2 flex-col">
          <div className="flex flex-row justify-between gap-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Assumptions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Cost per MW to build</TableCell>
                  <TableCell>$1,000,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Revenue per MW (yearly)</TableCell>
                  <TableCell>$175,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Maintenance (yearly)</TableCell>
                  <TableCell>0.75%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Acres per MW</TableCell>
                  <TableCell>5</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="mt-4">
            <p className="text-sm">TODO: Computation</p>
          </div>
        </div>
      </div>
      <div className="m-4 flex flex-row items-center justify-between p-4">
        <Button variant="destructive" className="self-center">
          Reject
        </Button>
        <Button variant="default" className="self-center">
          Approve
        </Button>
      </div>
    </div>
  )
}
