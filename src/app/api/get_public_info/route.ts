import { NextResponse } from 'next/server';

import { getTotalAreaFromAcreData } from '@/utils/projections';

import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  const submission_id = request.url.split('?submission_id=')[1];

  const userData = await prisma.user.findUnique({
    where: {
      id: parseInt(submission_id),
    },
    select: {
      acres: true,
      deployment_type: true,
      finance_option: true,
    },
  });
  if (!userData) {
    return NextResponse.json({ status: 404 });
  }

  const acres = userData.acres;
  const deployment_type = userData.deployment_type;
  const finance_option = userData.finance_option;
  const totalArea = getTotalAreaFromAcreData(acres);

  return NextResponse.json(
    { total_area: totalArea, deployment_type: deployment_type, finance_option: finance_option },
    { status: 200 },
  );
}
