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
import { Loader2 } from 'lucide-react'

export default function LoginForm() {
  const [email, setEmail] = useState('')

  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  const sendMagicLink = async () => {
    setLoading(true)
    setError('')
    if (email === '') {
      setError('Email is required')
      setLoading(false)
      return
    }
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
        setLoading(false)
        setDone(true)
      } else {
        console.error('Error:', response.statusText)
        if (response.statusText === 'Not Found') {
          setError('Please complete onboarding first')
        } else {
          setError(response.statusText)
        }
        setLoading(false)
      }
    } catch (error) {
      console.error('Fetch error:', error)
      setError('A fetch error occurred')
      setLoading(false)
    }
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to receive a magic link to sign in to your
            account
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
          <div className="flex w-full flex-col items-center justify-center">
            {error && <p className="mb-2 text-sm text-red-500">{error}</p>}
            <Button
              className="w-full"
              onClick={sendMagicLink}
              disabled={loading}
            >
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {loading ? 'Please wait' : done ? 'Check your email' : 'Send'}
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
