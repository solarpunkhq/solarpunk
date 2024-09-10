'use client'

import { useReward } from 'react-rewards'
import { useEffect } from 'react'
export default function ThankYouPage() {
  const { reward, isAnimating } = useReward('rewardId', 'confetti', {
    lifetime: 200,
    elementCount: 200,
    spread: 360,
  })

  useEffect(() => {
    reward()
  }, [])

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <span id="rewardId" />
      <h1 className="text-xl font-bold">
        Thank you for submitting your acres.
      </h1>
      <div>We will be in touch with you within the next 24 hours</div>
    </div>
  )
}
