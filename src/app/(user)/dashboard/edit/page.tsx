'use client'
import { createClient } from '@/utils/supabase/client'
import { redirect } from 'next/navigation'
import prisma from '@/lib/prisma'
import EditAcresForm from '@/components/EditAcresForm'

export default function EditPage() {
  // const supabase = createClient()

  // const { data, error } = await supabase.auth.getUser()

  // const { user } = data

  // if (user === null || user === undefined) {
  //   redirect('/login')
  // }

  // const userData = await prisma.user.findUnique({
  //   where: {
  //     email: user.email,
  //   },
  // })

  // const acreData = await prisma.acre.findMany({
  //   where: {
  //     userId: userData.id,
  //   },
  // })
  // const acres = acreData.map((acre) => {
  //   return acre.latlngs
  // })

  return (
    <div className="flex h-full w-full flex-col items-center justify-start">
      <EditAcresForm user_data={[]} acre_data={[]} existing_acres={[]} />
    </div>
  )
}
