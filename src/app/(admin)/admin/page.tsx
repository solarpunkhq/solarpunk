import CurrentStep from '@/components/CurrentStep'
import { createClient } from '@/utils/supabase/server'
import { redirect, useSearchParams } from 'next/navigation'
import prisma from '@/lib/prisma'
import Link from 'next/link'
import { Dashboard } from '@/components/admin/Dashboard'

export default async function AdminPage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()

  const { user } = data

  if (user === null || user === undefined) {
    redirect('/login')
  }

  if (user.app_metadata.role !== 'admin') {
    redirect('/dashboard')
  }

  return <Dashboard />
}
