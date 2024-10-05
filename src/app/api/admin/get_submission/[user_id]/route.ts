import { NextResponse } from 'next/server';

import { createClient } from '@/utils/supabase/server';

import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  const supabase = createClient();

  const { data: supabase_data, error: supabase_error } = await supabase.auth.getUser();
  if (supabase_error || !supabase_data?.user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }
  if (supabase_data.user.app_metadata.role !== 'admin') {
    return NextResponse.json({ message: 'Not admin' }, { status: 401 });
  }

  const url = request.url;
  const user_id = Number.parseInt(url.split('/').pop() || '');

  if (!user_id) {
    return NextResponse.json({ message: 'Invalid User ID' }, { status: 500 });
  }

  const response = await prisma.user.findFirst({
    where: {
      id: user_id,
    },
  });

  const acreData = await prisma.acre.findMany({
    where: {
      userId: user_id,
    },
  });
  const acres = acreData.map((acre) => {
    return acre.latlngs;
  });
  const total_area = acreData.reduce((acc, acre) => {
    return acc + acre.area;
  }, 0);

  return NextResponse.json({ ...response, acres, total_area }, { status: 200 });
}
