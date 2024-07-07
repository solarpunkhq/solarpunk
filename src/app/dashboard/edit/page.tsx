export const fetchCache = 'force-no-store'

import CurrentStep from '@/components/CurrentStep'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import prisma from '@/lib/prisma'
import Link from 'next/link'
import EditAcresForm from '@/components/EditAcresForm'

export default async function EditPage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()

  const { user } = data

  if (user === null || user === undefined) {
    redirect('/login')
  }

  const userData = await prisma.user.findUnique({
    where: {
      email: user.email,
    },
  })

  const acreData = await prisma.acre.findMany({
    where: {
      userId: userData.id,
    },
  })
  const acres = acreData.map((acre) => {
    return acre.latlngs
  })
  console.log('Acres: ', acres)

  return (
    <div className="flex h-full w-full flex-col items-center justify-start">
      <EditAcresForm
        user_data={userData}
        acre_data={acreData}
        existing_acres={acres}
      />
    </div>
  )
}
