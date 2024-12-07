'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { useState } from 'react';

import { Loader2 } from 'lucide-react';

import Button from '@/components/shared/button';
import Header from '@/components/shared/header';
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

import sectionBg from '@/images/sources/sources.jpg';

function Login() {
  const t = useTranslations('translations');

  const [email, setEmail] = useState('');

  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const basePath =
    window.location.origin + window.location.pathname.split('/').slice(0, 2).join('/');
  console.log(basePath);

  const getButtonText = () => {
    if (loading) {
      return null;
    } else if (done) {
      return t('login_check_your_email');
    }
    return t('login_send_email');
  };

  const sendMagicLink = async () => {
    setLoading(true);
    setError('');
    if (email === '') {
      setError(t('login_email_required'));
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

      const data = await response.json();
      if (response.ok) {
        console.log('Response data:', data);
        setLoading(false);
        setDone(true);
      } else {
        if (data['message'] !== undefined && data['message'] === 'User not found') {
          setError(t('login_onboarding_first'));
          setTimeout(() => {
            window.location.href = basePath + '/onboarding?email=' + email;
          }, 2000);
        } else {
          setError(response.statusText);
        }
        setLoading(false);
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setError(t('login_fetch_error'));
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="flex h-full w-full flex-col items-center justify-center p-5">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-24">{t('login_title')}</CardTitle>
            <CardDescription>{t('login_description')}</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">{t('login_email_label')}</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com" // Consider adding a translation key if needed
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex w-full flex-col items-center justify-center">
              {error && <p className="mb-2 text-16 text-primary-red">{error}</p>}
              <Button size="home-md" className="w-full py-2" theme="black" onClick={sendMagicLink}>
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
        <Image
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
          src={sectionBg}
          width={1920}
          height={1104}
          alt="Solarpunk Background"
        />
      </div>
    </>
  );
}

export default Login;
