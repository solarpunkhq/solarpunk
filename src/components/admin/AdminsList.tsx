'use client'

import { useQuery } from '@tanstack/react-query'
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
import { File, PlusCircle } from 'lucide-react'

export function AdminsList() {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['userData'],
    queryFn: async () => {
      const response = await fetch('/api/admin/get_admins')
      return await response.json()
    },
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

  return (
    <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <AdminHeader breadcrumbs={[{ href: '/admin/admins', label: 'Admins' }]} />
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <div className="flex justify-end gap-2">
          <Button size="sm" variant="outline" className="h-8 gap-1">
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Add Admin
            </span>
          </Button>
        </div>

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
                <TableCell className="mr-0 !pr-0 text-right">
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => {
                      fetch('/api/admin/change_admin', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                          user_id: user.id,
                          is_admin: false,
                        }),
                      })
                    }}
                  >
                    Remove Admin
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </main>
    </div>
  )
}
