import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { ContactButtons } from './CTA'
import heroImage from '@/images/solarpunk-hero.jpg'
import Image from 'next/image'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="relative -mx-6 mb-12 overflow-hidden px-6 py-20 sm:mx-0 sm:rounded-4xl sm:py-32 md:px-12">
        <Image
          src={heroImage}
          alt="Hero"
          className="absolute inset-0 -z-10 -mt-24 min-h-[1000px] w-full object-cover"
          unoptimized
        />{' '}
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2
              style={{
                textShadow:
                  '0.25px 0.25px #0A4769, 0.5px 0.5px #0A4769, 0.75px 0.75px #0A4769, 1px 1px #0A4769, 1.25px 1.25px #0A4769, 1.5px 1.5px #0A4769, 1.75px 1.75px #0A4769, 2px 2px #0A4769, 2.25px 2.25px #0A4769, 2.5px 2.5px #0A4769, 2.75px 2.75px #0A4769, 3px 3px #0A4769, 3.25px 3.25px #0A4769, 3.5px 3.5px #0A4769, 3.75px 3.75px #0A4769, 4px 4px #0A4769, 4.25px 4.25px #0A4769, 4.5px 4.5px #0A4769, 4.75px 4.75px #0A4769, 5px 5px #0A4769, 5.25px 5.25px #0A4769, 5.5px 5.5px #0A4769, 5.75px 5.75px #0A4769, 6px 6px #0A4769',
              }}
              className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl"
            >
              Talk to us about your Solarpunk project
            </h2>
            <div className="invert">
              <ContactButtons />
            </div>
            {/* <div className="mt-10 border-t border-white/10 pt-10">
              <h3 className="font-display text-base font-semibold text-white">
                Our offices
              </h3>
              <Offices
                invert
                className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
              /> 
            </div>*/}
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
