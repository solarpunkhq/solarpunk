import { db } from "@/lib/db";
import { createClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try{

    const supabase = createClient();
    
    const {data, error} = await supabase.auth.getUser();
    
    if(!data.user){
      return NextResponse.redirect('/login')
    }
    const {phone, financeOption, about} = await request.json()

    const profile = await db.profile.update({
      where:{
        email: data.user.email
      },
      data:{
        phone,
        financeOption,
        about,
        onboardingStep:1
      }
    })

    return NextResponse.json({status: 200})
  }catch(e){
    return NextResponse.json({status: 500})
  }

}