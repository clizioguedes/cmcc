'use client'

import { MapIcon, PersonStandingIcon, SearchIcon } from 'lucide-react'
import Link from 'next/link'

import { AppSidebar } from '@/components/sidebar/app-sidebar'
import { ToggleTheme } from '@/components/toggle-theme'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        <header
          className={cn(
            'flex flex-col gap-4 p-4 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12',
            'lg:flex-row lg:items-center lg:justify-between',
          )}
        >
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />

            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />

            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button asChild variant="outline">
              <Link href="/site-map">
                <MapIcon className="size-4" />
                Mapa do site
              </Link>
            </Button>

            <Button asChild variant="outline">
              <Link href="/acessibilidade">
                <PersonStandingIcon className="size-4" />
                Acessibilidade
              </Link>
            </Button>

            <ToggleTheme />
          </div>
        </header>

        <div className="border-muted flex items-center border-y p-4 px-4">
          <Input
            placeholder="Pesquisar..."
            className={cn('ml-auto w-full', 'lg:w-fit')}
            icon={SearchIcon}
          />
        </div>

        <main className="flex min-h-screen flex-1 flex-col gap-4 p-4">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
