import Link from 'next/link'
import clsx from 'clsx'

export function Button({
  invert,
  href,
  onClick,
  className,
  children,
  ...props
}: {
  invert?: boolean
  href?: string
  onClick?: () => void
  className?: string
  children: React.ReactNode
}) {
  className = clsx(
    className,
    'inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition',
    invert
      ? 'bg-white text-neutral-950 hover:bg-neutral-200'
      : 'bg-neutral-950 text-white hover:bg-neutral-800'
  )

  let inner = <span className="relative top-px">{children}</span>

  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {inner}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={className} {...props}>
      {inner}
    </button>
  )
}
