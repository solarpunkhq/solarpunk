'use client'
import clsx from 'clsx'
import { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'
import Link from 'next/link'

export function CTA({
  style,
  invert,
  link,
  href,
  className,
  children,
  ...props
}) {
  className = clsx(
    className,
    'inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition',
    invert
      ? 'bg-white text-neutral-950 hover:bg-neutral-200'
      : 'bg-neutral-950 text-white hover:bg-neutral-800'
  )
  let inner = <span className="relative top-px">{children}</span>

  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi()
      cal('ui', {
        theme: 'light',
        styles: { branding: { brandColor: '#F97315' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    })()
  }, [])
  return (
    <button
      className={className}
      data-cal-link={link}
      data-cal-config='{"layout":"month_view"}'
    >
      {children}
    </button>
  )
}

export function ContactButtons() {
  return (
    <div className="mt-4 gap-2 space-y-2 md:flex md:space-y-0">
      {/*    <Link
        className="inline-flex rounded-full bg-neutral-950 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
        href="/onboarding"
      >
        Get started
      </Link> */}

      <div>
        <CTA
          className="group mt-6 flex h-12 items-center border-2 border-orange-500 bg-orange-500 px-4 text-lg shadow-lg hover:border-orange-700 hover:bg-orange-500"
          link="team/solarpunk/farmland"
        >
          <img
            src="https://cal.com/api/avatar/bb2fd2c4-9df6-4837-ba82-87b38b2cb5ba.png"
            className="h-6 w-6 rounded-full border-2 border-orange-500"
          />
          <img
            src="https://cal.com/api/avatar/8d4e5764-ade0-4ff1-bc95-7a31a3572267.png"
            className="-ml-2 h-6 w-6 rounded-full border-2 border-orange-500"
          />
          <span className="ml-2 mt-px inline-block">Schedule a call</span>
        </CTA>
        <small className="block text-center text-white">
          see if you qualify
        </small>
      </div>
    </div>
  )
}
