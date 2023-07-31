import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { ContactButtons } from './CTA'

export function ContactSection() {
  return (
    <Container id="contact-us" className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 bg-neutral-950 px-6 py-20 sm:mx-0 sm:rounded-4xl sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
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
