'use client'
import dynamic from 'next/dynamic'
import { Button } from '@/components/Button'
import { useState } from 'react';

const Map = dynamic(() => import('../../components/Map'), {
  ssr: false,
})

function formatCurrency(amount) {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  }).format(amount);
  
  return `${formatted}/yr`;
}

function calculatePriceBasedOnArea(areaSqm) {
  console.log('calculating for', areaSqm)
  if (areaSqm > 200000) {
    return 250000
  }

  if (areaSqm > 150000) {
    return 200000
  }

  if (areaSqm > 100000) {
    return 150000
  }

  if (areaSqm > 50000) {
    return 100000
  }

if (areaSqm > 0) {
    return 50000
  }
}

function calculateTotalPrice(areas) {
  return areas.reduce((total, area) => {
    return total + calculatePriceBasedOnArea(area.areaSqm);
  }, 0);
}

export default function Contact() {
  const [outlinedAreas, setOutlinedAreas] = useState([{coordinates: [[123, 123], [123, 123], [123, 123], [123, 123]], areaSqm: 123213}]);

  return (
    <div className="mb-[200px] mt-12 ">
      <div className="flex px-8">
        <Map setOutlinedAreas={setOutlinedAreas} />
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
                  {outlinedAreas.map((area, index) => (
<tr className="border-b bg-white" key={index+area}>
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 "
                    >
                      Area {'0' + (index + 1)}
                    </th>
                    <td className="px-6 py-4">
                      {formatCurrency(calculatePriceBasedOnArea(area.areaSqm))}
                    </td>
                  </tr>
                  ))}
                  <tr className="bg-gray-50">
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 "
                    >
                      Total Estimated
                    </th>
                    <td className="px-6 py-4">
                      {formatCurrency(calculateTotalPrice(outlinedAreas))}
                    </td>
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
