'use client';

import { Route } from 'next';

import { Link } from '@/i18n/routing';
import { Home, LineChart, LogOut, PanelLeft, Search, SheetIcon, Users2 } from 'lucide-react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

function Header({ breadcrumbs }: { breadcrumbs: { href: string; label: string }[] }) {
  const basePath =
    window.location.origin + window.location.pathname.split('/').slice(0, 2).join('/');
  return (
    <header className="bg-background sticky top-0 z-30 flex h-14 items-center gap-4 border-b px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
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
              href={'/' as Route<string>}
              className="bg-primary text-primary-foreground group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold md:text-base"
            >
              <Home className="h-5 w-5 transition-all group-hover:scale-110" />
              <span className="sr-only">Solarpunk</span>
            </Link>
            <Link
              href={'/admin' as Route<string>}
              className="text-accent-foreground hover:text-foreground flex items-center gap-4 px-2.5"
            >
              <SheetIcon className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              href={'/admin/users' as Route<string>}
              className="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5"
            >
              <Users2 className="h-5 w-5" />
              Users
            </Link>
            <Link
              href={'/admin/analytics' as Route<string>}
              className="text-muted-foreground flex items-center gap-4 px-2.5"
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
            <BreadcrumbItem key={index} className="font-semibold">
              <BreadcrumbLink asChild>
                <Link href={breadcrumb.href as Route<string>}>{breadcrumb.label}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      <div className="relative ml-auto flex-1 md:grow-0">
        <Button
          size="icon"
          className="overflow-hidden"
          onClick={() => (window.location.href = `${basePath}/logout`)}
        >
          <LogOut className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
}

export default Header;
