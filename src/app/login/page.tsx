'use client'
import { Button } from "@/components/Button"
import { useState } from 'react'
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

export default function LoginPage() {
  const [email, setEmail] = useState('')

  const onSubmit = async () => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
    console.log('response ', response)
  }
  return (<div className='w-full h-full flex justify-center items-center'>

    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Login to view you project status</CardDescription>
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
        <Button onClick={onSubmit} className="justify-center" >Login</Button>
      </CardFooter>
    </Card>
    </div>

  )
}

