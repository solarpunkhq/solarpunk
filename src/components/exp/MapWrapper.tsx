'use client'
import dynamic from 'next/dynamic'

const ExpMap = dynamic(() => import('@/components/exp/ExpMap'), {
  ssr: false,
})

export default function MapWrapper() {
  return (
    <>
      <ExpMap />
    </>
  )
}
