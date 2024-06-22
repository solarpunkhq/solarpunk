import { redirect } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export default async function DashboardPage({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams?: { [key: string]: string | undefined }
}) {
  const supabase = createClient()
  console.log(params, searchParams)
  const code = searchParams?.code
  if (!code) {
    redirect('/login')
  }

  await supabase.auth.exchangeCodeForSession(code)

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <div>Dashboard page content</div>
    </div>
  )
}
