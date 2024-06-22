'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'

export default function LoginForm() {
  const [email, setEmail] = useState('')

  const [buttonMessage, setButtonMessage] = useState('Sign in')

  const sendMagicLink = async () => {
    setButtonMessage('Sending...')
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
        }),
      })

      if (response.ok) {
        const data = await response.json()
        console.log('Response data:', data)
        setButtonMessage('Sent')
      } else {
        console.error('Error:', response.statusText)
        // Handle error response
      }
    } catch (error) {
      console.error('Fetch error:', error)
      // Handle network or other errors
    }
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={sendMagicLink}>
            {buttonMessage}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
