'use client'

import { useMutation, useQuery } from '@tanstack/react-query'
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
import { formatNumberAsAmount, getStepNameFromIndex } from '@/lib/utils'
import Link from 'next/link'
import { useState } from 'react'
import ProjectionCalculator from '../ProjectionCalculator'

const Map = dynamic(() => import('@/components/Map'), {
  ssr: false,
})

export function SubmissionWrapper({ user_id }) {
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

  return <Submission data={data} />
}

export function Submission({ data }) {
  const sendReminder = useMutation({
    mutationFn: () => {
      return fetch('/api/admin/send_email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: data.id,
          email_template: 'details_reminder',
        }),
      })
    },
  })

  const changeStep = useMutation({
    mutationFn: (step) => {
      return fetch('/api/admin/set_step', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: data.id,
          step: step,
        }),
      })
    },
    onSuccess: async () => {
      window.location.reload()
    },
  })

  return (
    <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <AdminHeader
        breadcrumbs={[
          {
            href: '/admin/submission/' + data.id,
            label: new Date(data.created_timestamp).toLocaleDateString(),
          },
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
            {getStepNameFromIndex(data.current_step)}
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
          <div className="ml-4 mt-4 text-sm">
            <h2 className="mb-2 text-lg font-semibold">Projections</h2>
            <ProjectionCalculator acres={data.total_area} />
          </div>
        </div>
      </div>
      <div className="m-4 flex flex-row items-center justify-between p-4">
        <div className="flex flex-row items-center justify-between gap-4">
          {data.current_step === 0 && (
            <Button
              variant="default"
              className="self-center"
              onClick={() => {
                sendReminder.mutate()
              }}
            >
              {sendReminder.isPending ? 'Sending...' : 'Send Reminder'}
            </Button>
          )}
          {data.current_step >= 2 && (
            <div className="flex flex-row items-center justify-between">
              <Button variant="default" className="self-center">
                <Link href={'mailto:' + data.email}>Request Documents</Link>
              </Button>
            </div>
          )}
        </div>
        {data.current_step < 2 && (
          <div className="flex flex-row items-center justify-between gap-4">
            <Button
              variant="destructive"
              className="self-center"
              onClick={() => {
                //@ts-ignore
                changeStep.mutate(-1)
              }}
            >
              {changeStep.isPending ? 'Updating...' : 'Reject'}
            </Button>
            <Button
              className="self-center bg-green-600"
              onClick={() => {
                //@ts-ignore
                changeStep.mutate(2)
              }}
            >
              {changeStep.isPending ? 'Updating...' : 'Approve'}
            </Button>
          </div>
        )}
        {data.current_step === 2 && (
          <Button
            className="self-center bg-green-600"
            onClick={() => {
              //@ts-ignore
              changeStep.mutate(3)
            }}
          >
            {changeStep.isPending ? 'Deploying...' : 'Deploy'}
          </Button>
        )}
      </div>
    </div>
  )
}
