import { createClient } from "@/lib/supabase/server"
import { NextRequest, NextResponse } from "next/server"



export const POST = async (request: Request) => {
  try{
    const supabase = createClient()
    const {email} = await request.json()

    const {data,error} = await supabase.auth.signInWithOtp({email,options:{
      emailRedirectTo: '/dashboard',
      shouldCreateUser: true
    }})

    if(error){
      return NextResponse.json({status: 400})
    }
    return NextResponse.json({status: 200})
  }catch(e){
    console.error(e)
    return {
      status: 500,
      body: 'Internal Server Error'
    }
  }
}