'use client'
import clsx from 'clsx'
import { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'

export default function CTA({
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
      <CTA link="team/solarpunk/farmland">I want to provide land for solar</CTA>
      <CTA invert link="team/solarpunk/operate-agrivoltaics">
        I want to lease farmland for solar
      </CTA>
    </div>
  )
}
