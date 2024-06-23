import { Button } from '@/components/Button'
import { Loader } from 'lucide-react'

export function InReview() {
  return (
    <div className="flex flex-col items-center gap-2">
      <Loader size={50} />
      <h3 className="text-lg font-bold">
        We are currently reviewing your application
      </h3>
      <Button href={'https://cal.com/team/solarpunk'}>Contact Us</Button>
    </div>
  )
}
