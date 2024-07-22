'use client'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Link from 'next/link'
import {
  Home,
  LineChart,
  LogOut,
  PanelLeft,
  Search,
  SheetIcon,
  Users2,
} from 'lucide-react'

export default function AdminHeader({ breadcrumbs }) {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/"
              className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
            >
              <Home className="h-5 w-5 transition-all group-hover:scale-110" />
              <span className="sr-only">Solarpunk</span>
            </Link>
            <Link
              href="/admin"
              className="flex items-center gap-4 px-2.5 text-accent-foreground hover:text-foreground"
            >
              <SheetIcon className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              href="/admin/users"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <Users2 className="h-5 w-5" />
              Users
            </Link>
            <Link
              href="/admin/analytics"
              className="flex items-center gap-4 px-2.5 text-muted-foreground"
            >
              <LineChart className="h-5 w-5" />
              Analytics
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <Breadcrumb className="hidden md:flex">
        <BreadcrumbList>
          {breadcrumbs.map((breadcrumb, index) => (
            <BreadcrumbItem key={index}>
              <BreadcrumbLink asChild>
                <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      <div className="relative ml-auto flex-1 md:grow-0">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search..."
          className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
        />
      </div>
      <Button
        variant="outline"
        size="icon"
        className="overflow-hidden"
        onClick={() => (window.location.href = '/logout')}
      >
        <LogOut className="h-6 w-6" />
      </Button>
    </header>
  )
}
