'use client'

import { useMutation, useQuery } from '@tanstack/react-query'
import AdminHeader from './Header'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '../ui/button'

export function AdminsList() {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['userData'],
    queryFn: async () => {
      const response = await fetch('/api/admin/get_user_list')
      return await response.json()
    },
    refetchInterval: 1000 * 3,
  })

  if (isPending) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center">
        'An error has occurred: ' + {error.message}
      </div>
    )
  }

  const changeAdmin = (user_id, is_admin) => async () => {
    const data = await fetch('/api/admin/change_admin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: user_id,
        is_admin: is_admin,
      }),
    })
    if (data.status === 500) {
      alert('Error updating user')
    }
  }

  return (
    <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <AdminHeader breadcrumbs={[{ href: '/admin/admins', label: 'Admins' }]} />
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Admin ID</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Created At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.created_at}</TableCell>
                {user.is_admin ? (
                  <TableCell className="mr-0 !pr-0 text-right">
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={changeAdmin(user.id, false)}
                    >
                      Remove Admin
                    </Button>
                  </TableCell>
                ) : (
                  <TableCell className="mr-0 !pr-0 text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={changeAdmin(user.id, true)}
                    >
                      Set Admin
                    </Button>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </main>
    </div>
  )
}
