import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  console.log(body)
  return NextResponse.json({ message: 'Hello World' }, { status: 200 })
}
