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
      <FadeIn className="relative z-0 -mx-6 mb-12 overflow-hidden bg-black px-6 py-20 sm:mx-0 sm:rounded-3xl sm:py-32 md:px-12">
        <Image
          src={heroImage}
          alt="Hero"
          className="absolute inset-0 -z-10 -mt-96 min-h-[1000px] w-full object-cover opacity-40"
          unoptimized
        />{' '}
        <div className="relative z-30 mx-auto max-w-4xl">
          <div className="max-w-lg">
            <h2
              style={{
                textShadow:
                  '0.25px 0.25px #000, 0.5px 0.5px #000, 0.75px 0.75px #000, 1px 1px #000, 1.25px 1.25px #000, 1.5px 1.5px #000, 1.75px 1.75px #000, 2px 2px #000, 2.25px 2.25px #000, 2.5px 2.5px #000, 2.75px 2.75px #000, 3px 3px #000, 3.25px 3.25px #000, 3.5px 3.5px #000, 3.75px 3.75px #000, 4px 4px #000, 4.25px 4.25px #000, 4.5px 4.5px #000, 4.75px 4.75px #000, 5px 5px #000, 5.25px 5.25px #000, 5.5px 5.5px #000, 5.75px 5.75px #000, 6px 6px #000',
              }}
              className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl"
            >
              Talk to us about your Solarpunk project
            </h2>
            <ContactButtons />
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
