import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/solarpunk-background.jpg'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'
import CTA, { ContactButtons } from '@/components/CTA'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We’ve worked with hundreds of amazing people
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Overcoming regulatory hurdles with Agrivoltaics to build a better future."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Become a Solarpunk and enhance existing farmland with solar energy
          without sacrificing arable land. A mixed-usage reduces the
          bureaucratic effort and hurdles of building solar farms while also
          producing better crops!
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <a href={caseStudy.url} target="_blank" rel="noreferrer">
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </a>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time dateTime={caseStudy.year} className="font-semibold">
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Report</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Roadmap() {
  return (
    <div className="prose prose-xl mx-auto">
      <SectionIntro title="Roadmap" className="mx-auto mt-24 sm:mt-32 lg:mt-40">
        <p>
          Our mission is to 100× the deployment of solar energy with the help of
          agrivoltaics. To achieve this, we are splitting our project into three
          phases to reduce risk, understand the market and achieve our Solarpunk
          future.
        </p>
        <h4>Phase 1: </h4>
        <p>
          The initial stage, Phase 1, revolves around the creation of a
          marketplace that connects landowners with energy partners.
        </p>
        <p>
          The intention is to connect landowners, our supply chain's core, with
          energy partners who make up the demand side. We aim to establish a
          thriving marketplace that is connecting both parties.
        </p>
        <p>
          A critical aspect of this phase is to identify whether supply or
          demand is the bottleneck inhibiting our growth.
        </p>
        <p>
          By understanding the potential constraints within our marketplace, we
          can develop strategic solutions to alleviate them. As we progress
          through this phase, we also place a strong emphasis on learning, as
          this experience will provide invaluable insights to guide our future
          actions.
        </p>
        <p>
          Our business model for this phase is straightforward and rewarding for
          all parties involved. We take a small percentage as commission for
          each successful connection, ensuring we remain invested in the
          efficacy of each partnership we facilitate.
        </p>
        <h4>Phase 2:</h4>
        <p>
          Phase 2 focuses on addressing the technical challenges associated with
          agrivoltaics. The ultimate objective is to tackle the most demanding
          technical obstacles by raising venture funding and tackling the
          technical challenges with ongoing research and development.
        </p>
        <p>
          With financial backing, we aim to assemble a dedicated, highly-skilled
          team capable of overcoming these challenges. This phase&rsquo;s
          success would not only highlight our problem-solving capabilities but
          also enable us to develop prototypes based on the lessons learned
          during the initial phase.
        </p>
        <p>
          The goal of this stage is to apply the knowledge acquired from Phase
          1, construct an effective prototype, and market these prototypes to
          our initial partners. This will demonstrate our practical
          understanding of the industry's needs and our ability to provide
          innovative solutions.
        </p>
        <h4>Phase 3:</h4>
        <p>
          In Phase 3, we start to provide more services to become a full-stack
          energy company. Our primary strategy will be to leverage our newly
          developed technology to approach farmland owners and reduce the
          initial costs of agrivoltaic solar parks.
        </p>
        <p>
          Our Phase 3 plan also includes the acquisition of more funding and
          debt to help launch solar parks, either run by us or by Solarpunk
          Franchise Partners.
        </p>
        <p>
          The goal of this phase is clear: 100× the deployment of solar energy
          with our full-stack energy company and drive down costs at scale. In
          each phase, our dedication to innovation, sustainability, and
          partnership is the driving force behind our mission.
        </p>
      </SectionIntro>
    </div>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and plan your Agrivoltaic project."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Partner with us to participate in the green revolution of electricity
          production.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Exploration">
              Understand what type of Agrivoltaic project is right for you and
              what type of regulatory hurdles you will face.
            </ListItem>
            <ListItem title="Planning">
              Turn your idea into a plan and get the necessary permits to start
              your project. We help you with the paperwork and the planning.
              Thanks to a mixed-usage of the land, the bureaucratic effort is
              massively reduced. No need to request a land transformation
              permit.
            </ListItem>
            <ListItem title="Financing">
              We partner with dept firms who can help you finance your project
              and who have years of experience in the energy sector.
            </ListItem>
            <ListItem title="Deployment">
              Solarpunk works with a dedicated team of engineers and
              electricians to deploy your project. We take care of the entire
              process and optimise for speed to get your project up and running
              faster than the traditional way of photovoltaics.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description: 'Exploring the intersection of solar energy and agriculture',
}

export default async function Home() {
  let caseStudies = (await loadMDXMetadata('work')).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Building the Solarpunk Future.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            <span className="font-display">Solarpunk 2077</span> is exploring{' '}
            <a
              className="text-black underline"
              href="https://en.wikipedia.org/wiki/Agrivoltaics"
              target="_blank"
              rel="noreferrer"
            >
              Agrivoltaics
            </a>
            , the intersection of solar energy and agriculture, and is on a
            mission to 100× the deployment of solar energy.
          </p>
          <ContactButtons />
        </FadeIn>
      </Container>
      {/* 
      <Clients />
      */}
      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Thomas Edison' }}
      >
        We are like tenant farmers chopping down the fence around our house for
        fuel when we should be using natures inexhaustible sources of energy –
        sun, wind and tide. I'd put my money on the sun and solar energy. What a
        source of power! I hope we don’t have to wait until oil and coal run out
        before we tackle that.
      </Testimonial>

      <CaseStudies caseStudies={caseStudies} />

      <Services />

      <Roadmap />

      <ContactSection />
    </>
  )
}
