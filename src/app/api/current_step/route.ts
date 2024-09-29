import { NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  const email = request.url.split('?user=')[1];

  const current_step = await prisma.user.findUnique({
    where: {
      email: email,
    },
    select: {
      current_step: true,
    },
  });
  console.log('Current Step: ', current_step);
  if (!current_step) {
    return NextResponse.json({ current_step: 0 }, { status: 200 });
  }

  return NextResponse.json({ current_step: current_step }, { status: 200 });
}
