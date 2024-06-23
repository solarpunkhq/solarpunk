import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email } = body

    if (!email || !name) {
      throw new Error('Email and name are required')
    }

    console.log('Name:', name)
    console.log('Email:', email)

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message })
  }
}
