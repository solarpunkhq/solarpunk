'use client'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('../../components/Map'), {
  ssr: false,
})

export default function Contact() {
  return (
    <div className="-mb-[200px] mt-12 ">
      <div className="px-8">
        <Map />
      </div>
    </div>
  )
}
