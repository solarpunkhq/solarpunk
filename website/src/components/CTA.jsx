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
        styles: { branding: { brandColor: '#0A0A0A' } },
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

      <CTA
        className="mt-6 flex h-12 items-center bg-white text-lg !text-black shadow-lg hover:bg-white"
        link="team/solarpunk/farmland"
      >
        See if you qualify
      </CTA>
    </div>
  )
}
