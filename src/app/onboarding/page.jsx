'use client'
import dynamic from 'next/dynamic'
import { Button } from '@/components/Button'

const Map = dynamic(() => import('../../components/Map'), {
  ssr: false,
})

export default function Contact() {
  return (
    <div className="-mb-[200px] mt-12 ">
      <div className="flex px-8">
        <Map />
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
                  <tr className="border-b bg-white ">
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 "
                    >
                      Area 01
                    </th>
                    <td className="px-6 py-4">$700,000/yr</td>
                  </tr>
                  <tr className="border-b bg-white ">
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 "
                    >
                      Area 02
                    </th>
                    <td className="px-6 py-4">$600,000/yr</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 "
                    >
                      Total
                    </th>
                    <td className="px-6 py-4">$1,300,00/yr</td>
                  </tr>
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
