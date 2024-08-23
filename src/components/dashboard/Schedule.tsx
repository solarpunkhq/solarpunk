import { CircleHelp } from 'lucide-react'
import Link from 'next/link'

export default function Schedule() {
  return (
    <div className="flex w-full items-start justify-start bg-neutral-100 p-4 text-sm">
      <CircleHelp />
      <div className="ml-2 flex flex-col items-start justify-start">
        <b>Have questions?</b>
        <Link href="https://cal.com/team/solarpunk" className="underline">
          Schedule a call
        </Link>
      </div>
    </div>
  )
}
