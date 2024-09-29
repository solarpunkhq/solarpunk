'use client';

import { useState } from 'react';

import { Loader2 } from 'lucide-react';

import Button from '@/components/shared/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LoginForm() {
  const [email, setEmail] = useState('');

  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const getButtonText = () => {
    if (loading) {
      return null;
    } else if (done) {
      return 'Check your email';
    }
    return 'Send';
  };

  const sendMagicLink = async () => {
    setLoading(true);
    setError('');
    if (email === '') {
      setError('Email is required');
      setLoading(false);
      return;
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
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Response data:', data);
        setLoading(false);
        setDone(true);
      } else {
        console.error('Error:', response.statusText);
        if (response.statusText === 'Not Found') {
          setError('Please complete onboarding first');
        } else {
          setError(response.statusText);
        }
        setLoading(false);
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setError('A fetch error occurred');
      setLoading(false);
    }
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-24">Login</CardTitle>
          <CardDescription>
            Enter your email below to receive a magic link to sign in to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex w-full flex-col items-center justify-center">
            {error && <p className="mb-2 text-16 text-primary-red">{error}</p>}
            <Button className="w-full py-2" theme="black" onClick={sendMagicLink}>
              {loading && (
                <div className="flex h-full w-full items-center justify-center py-1">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                </div>
              )}
              {getButtonText()}
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
