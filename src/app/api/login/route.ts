import { NextResponse } from 'next/server';

import { createClient } from '@/utils/supabase/server';
import { authEmailTranslations } from '@/utils/translations/authEmailTranslations';

import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  const body = await request.json();
  const email = body.email;

  const supabase = createClient();

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (!user) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }

  //@ts-ignore
  let translations = authEmailTranslations[user.country];
  if (!translations) {
    translations = authEmailTranslations.default;
  }

  const { data, error } = await supabase.auth.signInWithOtp({
    email: email,
    options: {
      shouldCreateUser: true,
      emailRedirectTo: `/dashboard`,
      data: translations,
    },
  });
  console.log(data, error);

  return NextResponse.json({ message: 'Submitted Successfully' }, { status: 200 });
}
