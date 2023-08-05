import { useId } from 'react'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'

function TextInput({ label, ...props }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function ContactDetails() {
  return (
    <FadeIn>
      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Email us
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ['Careers', 'careers@solarpunk2077.com'],
            ['Press', 'press@solarpunk2077.com'],
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-neutral-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>
    </FadeIn>
  )
}

export const metadata = {
  title: 'Join us',
  description: 'Join us and build the Solarpunk future',
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Join us" title="and build the Solarpunk future">
        <p>We can’t wait to get to know you.</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2"></div>
        <ul className="rounded border bg-white">
          <Job
            name="Fullstack Typescript Developer"
            location="Remote or Northern Germany"
            salary="100,000 + Equity"
          />
          <Job
            name="Industrial Designer"
            location="Remote or Northern Germany"
            salary="100,000 + Equity"
          />
          <Job
            name="Project Manager"
            location="Remote or Northern Germany"
            salary="100,000 + Equity"
          />
        </ul>
      </Container>
    </>
  )
}

function Job({ name, location, salary }) {
  return (
    <li>
      <a
        href={`mailto:jobs@solarpunk2077.com?subject=${name}`}
        className="-mt-px border-t p-4 hover:bg-gray-50 md:flex md:space-x-4"
      >
        <div className="w-full">{name}</div>
        <div className="w-full">{location}</div>
        <div className="w-full">${salary}</div>
        <div className="w-full md:text-right">
          <span className="underline">Apply</span>
        </div>
      </a>
    </li>
  )
}
