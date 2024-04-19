'use client'
import dynamic from 'next/dynamic'

import { Container } from '@/components/Container'

const Map = dynamic(() => import('../../components/Map'), {
  ssr: false,
})

export default function Contact() {
  return (
    <>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <Map />
      </Container>
    </>
  )
}
