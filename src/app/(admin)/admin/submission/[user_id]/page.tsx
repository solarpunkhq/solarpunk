import { createClient } from '@/utils/supabase/server'
import { redirect, useSearchParams } from 'next/navigation'
import TanstackProvider from '@/components/TanstackProvider'
import { Analytics } from '@/components/admin/Analytics'
import { Submission } from '@/components/admin/Submission'

export default async function SubmissionPage({
  params,
}: {
  params: { user_id: string }
}) {
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

  const { user_id } = params

  return (
    <TanstackProvider>
      <Submission user_id={user_id} />
    </TanstackProvider>
  )
}
