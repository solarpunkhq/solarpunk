'use client'
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { Button } from '@/components/Button'
import { Acre } from '@/lib/types'

const Map = dynamic(() => import('../../components/Map'), {
  ssr: false,
})

export default function Contact() {
  const [acres, setAcres] = useState<Acre[]>([])
  return (
    <div className="-mb-[200px] mt-12 ">
      <div className="flex px-8">
        <Map setAcres={setAcres}/>
        <aside className="w-full max-w-96 rounded-r-4xl border border-l-0 bg-white p-8">
          <div className="text-center">
            <h1 className="font-display text-5xl">Mark your acres</h1>
            <h2 className="">Use the map to outline your territory</h2>
            <div className="relative overflow-x-auto">
              <table className="mt-4 w-full border text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
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
                  {acres.length >0 ? <>{acres.map((acre, index) => (
                    <tr key={index} className="border-b bg-white ">
                      <th
                        scope="row"
                        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 "
                      >
                        {acre.area.toFixed(2)} acres
                      </th>
                      {/* Assumption that revenue per acre per year is $1000 */}
                      <td className="px-6 py-4">$ {(acre.area*1000).toFixed(2)}</td>
                    </tr>
                  ))}</> : <tr className="border-b bg-white ">
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 "
                    >
                      No acres marked
                    </th>
                    <td className="px-6 py-4">$0</td>
                  </tr>}
                </tbody>
              </table>
            </div>
            <input className="mt-4 w-full rounded border px-4" placeholder="Email" />
            <Button className="mx-auto mt-4">Submit Info</Button>
          </div>
        </aside>
      </div>
    </div>
  )
}
