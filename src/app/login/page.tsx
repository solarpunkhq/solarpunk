'use client'
import { Button } from "@/components/Button"
import { useEffect, useState } from 'react'
// import { Button } from '@/components/ui/button'
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
import { createClient } from "@/lib/supabase/client"
import { redirect, useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState< 'idle' | 'sending' | 'success'>('idle')
  const router = useRouter()
  
  useEffect(() =>{
    const checkUser = async () => {
      const supabase = createClient()
      const {data} = await supabase.auth.getUser()
      console.log('data ', data)
      if(data.user){
        router.push('/dashboard')
      }
    }
    checkUser()
  }, [])  

  const onSubmit = async () => {
    if(status === 'sending') return
    setStatus('sending')
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
    if(response.ok){
      setStatus('success')
    }
    console.log('response ', response)
  }
  return (<div className='w-full h-full flex justify-center items-center'>

    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Login using magic link to view you project status</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email</Label>
              <Input id="email" type="email" placeholder="Enter your e-mail"  onChange={(e)=>setEmail(e.target.value)}/>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col justify-center items-stretch text-center">
        <Button onClick={onSubmit} className="justify-center" >
          {status === 'idle' && 'Send magic link'}
          {status === 'sending' && <div className="flex"><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</div>}
          {status === 'success' && 'Check your email'}
        </Button>
      </CardFooter>
    </Card>
    </div>

  )
}

