import { createServerClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/adminServer'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { UserSignupConfirmationEmail } from '@/components/emails/UserSignupConfirmationEmail'

import { iso1A2Code } from '@rapideditor/country-coder'

export async function POST(request) {
  const { email, name, areas } = await request.json()

  if (!email || !name || !areas) {
    return new NextResponse(
      JSON.stringify({ error: 'Missing required parameters' }),
      {
        status: 400,
      }
    )
  }

  if (areas.length === 0) {
    return new NextResponse(JSON.stringify({ error: "Areas can't be empty" }), {
      status: 400,
    })
  }

  const supabase = createServerClient()
  const supabaseAdmin = createAdminClient()
  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const firstCoordinates = areas[0].coordinates[0]
    const countryCode = iso1A2Code(firstCoordinates)
    const { error: authError } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        data: {
          language: countryCode,
        },
        emailRedirectTo: `${process.env.PROJECT_URL}/api/auth/callback`,
      },
    })
    if (authError) {
      return new NextResponse(JSON.stringify({ error: authError.message }), {
        status: 500,
      })
    }

    await resend.emails.send({
      from: `${process.env.SEND_FROM_EMAIL_ADDRESS}`,
      to: [`${process.env.ADMIN_EMAIL_ADDRESS}`],
      subject: 'User signed up!',
      react: UserSignupConfirmationEmail({ name: name, email: email }),
    })

    const { data: profilesData } = await supabaseAdmin
      .from('profiles')
      .select()
      .eq('email', email)

    // create profile if not already created
    // this is separate from supabase auth
    // https://supabase.com/docs/guides/auth/managing-user-data#accessing-user-data-via-api
    if (profilesData && profilesData.length === 0) {
      await supabaseAdmin.from('profiles').insert({
        email,
        name,
        verified: false,
      })
    }

    // check if area data already exists, if yes we can return without saving more data
    // duplicate signup is already handled on supabase side, user will just get login link again
    const { data } = await supabaseAdmin
      .from('submitted_areas')
      .select()
      .eq('email', email) // only admin is allowed to query this table

    if (data && data.length > 0) {
      return new NextResponse(JSON.stringify({ message: 'Magic link sent' }), {
        status: 200,
      })
    }

    const dataToInsert = areas.map((area, index) => {
      return {
        email,
        area_name: 'Area 0' + (index + 1),
        coordinates: area.coordinates,
        area_sqm: area.areaSqm,
      }
    })

    const { error } = await supabase
      .from('submitted_areas')
      .insert(dataToInsert)

    if (error) {
      console.error(error)
      return new NextResponse(JSON.stringify({ error: error.message }), {
        status: 500,
      })
    }

    return new NextResponse(
      JSON.stringify({ message: 'Magic link sent and data saved' }),
      { status: 200 }
    )
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
    })
  }
}
