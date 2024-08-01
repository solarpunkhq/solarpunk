import { createClient } from '@/utils/supabase/server'
import { redirect, useSearchParams } from 'next/navigation'
import TanstackProvider from '@/components/TanstackProvider'
import { AdminDashboard } from '@/components/admin/Dashboard'
import { AdminsList } from '@/components/admin/AdminsList'

export default async function AdminPage() {
  const supabase = createClient()

  const { data: supabase_data, error: supabase_error } =
    await supabase.auth.getUser()

  const { user } = supabase_data

  if (user === null || user === undefined) {
    redirect('/login')
  }

  if (user.app_metadata.role !== 'admin') {
    redirect('/dashboard')
  }

  return (
    <TanstackProvider>
      <AdminsList />
    </TanstackProvider>
  )
}
