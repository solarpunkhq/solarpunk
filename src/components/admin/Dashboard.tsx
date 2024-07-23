'use client'

import Image from 'next/image'
import { File, ListFilter, MoreHorizontal, PlusCircle } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import AdminHeader from './Header'

export function AdminDashboard() {
  return (
    <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <AdminHeader breadcrumbs={[{ href: '/admin', label: 'Dashboard' }]} />
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <Tabs defaultValue="all">
          <div className="flex items-center">
            <TabsList className="hidden md:flex">
              <TabsTrigger value="all" className="hidden md:flex">
                All
              </TabsTrigger>
              <TabsTrigger value="details" className="hidden md:flex">
                Details
              </TabsTrigger>
              <TabsTrigger value="review" className="hidden md:flex">
                In Review
              </TabsTrigger>
              <TabsTrigger value="planning" className="hidden md:flex">
                Planning
              </TabsTrigger>
              <TabsTrigger value="deployment" className="hidden md:flex">
                Deployment
              </TabsTrigger>
            </TabsList>
            <div className="ml-auto flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <ListFilter className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                      Sort
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked>
                    Date Onboarded
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    Total Revenue
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button size="sm" variant="outline" className="h-8 gap-1">
                <File className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Export
                </span>
              </Button>
              <Button
                size="sm"
                className="h-8 gap-1"
                onClick={() => (window.location.href = '/onboarding')}
              >
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Add Submission
                </span>
              </Button>
            </div>
          </div>
          <TabsContent value="all">
            <Card x-chunk="dashboard-06-chunk-0">
              <CardHeader>
                <CardTitle>Submissions</CardTitle>
                <CardDescription>Manage user acre submissions.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="hidden md:table-cell">
                        Total Revenue
                      </TableHead>
                      <TableHead className="hidden md:table-cell">
                        Created at
                      </TableHead>
                      <TableHead>Email</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium underline">
                        Varun Balani
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">Planning</Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        $49,999,293
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        2024-07-22 15:30:43
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        varunprahladb@gmail.com
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium underline">
                        Peer
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">Details</Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        $20,109,293
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        2024-07-11 15:30:43
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        peer@gmail.com
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium underline">
                        Schuyler
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">Deployment</Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        $4,229,293
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        2024-07-22 18:30:43
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        schuyler@gmail.com
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium underline">
                        Tyler Durden
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">In Review</Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        $4,000,000
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        2024-05-22 15:30:43
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        tyler.durden@gmail.com
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium underline">
                        Marla Singer
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">Planning</Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        $78,888,293
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        2024-07-27 15:30:43
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        marla.singer@gmail.com
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter>
                <div className="text-xs text-muted-foreground">
                  Showing <strong>1-10</strong> of <strong>5</strong>{' '}
                  submissions
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
