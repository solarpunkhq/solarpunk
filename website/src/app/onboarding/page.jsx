'use client'
import dynamic from 'next/dynamic'

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
            <input className="mt-4 w-full rounded border px-4" value="London" />
          </div>
        </aside>
      </div>
    </div>
  )
}
