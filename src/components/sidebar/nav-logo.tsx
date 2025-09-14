import Image from 'next/image'
import Link from 'next/link'

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

export function NavLogo() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground gap-2.5 hover:bg-green-50 dark:hover:bg-green-950/20"
          asChild
        >
          <Link href="/">
            <Image
              src="/logo-cerro-cora.png"
              alt="Cerro Cora"
              width={36}
              height={36}
            />

            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate text-xs text-blue-600 dark:text-blue-400">
                Câmara Municipal
              </span>

              <span className="truncate font-medium text-green-600 dark:text-green-400">
                Cerro Corá - RN
              </span>
            </div>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
