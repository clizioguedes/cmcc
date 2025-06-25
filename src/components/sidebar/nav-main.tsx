'use client'

import {
  BlendIcon,
  ChevronRight,
  FileQuestionMarkIcon,
  LibraryBigIcon,
  UserIcon,
} from 'lucide-react'
import Link from 'next/link'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar'

const GROUPED_LINKS = [
  {
    title: 'Portal da Transparência',
    url: '/portal-da-transparencia',
    icon: BlendIcon,
    items: [
      {
        title: 'Atos Normativos',
        url: '#',
      },
      {
        title: 'Chamadas Públicas',
        url: '#',
      },
      {
        title: 'Concurso / Processo Seletivo',
        url: '#',
      },
      {
        title: 'Contracheque',
        url: '#',
      },
      {
        title: 'Contratos',
        url: '#',
      },
      {
        title: 'Convênios',
        url: '#',
      },
      {
        title: 'Despesas',
        url: '#',
      },
      {
        title: 'Diárias',
        url: '#',
      },
      {
        title: 'Editais',
        url: '#',
      },
      {
        title: 'Folha de Pagamento',
        url: '#',
      },
      {
        title: 'Licitações',
        url: '#',
      },
      {
        title: 'Obras',
        url: '#',
      },
      {
        title: 'Orçamentos',
        url: '#',
      },
      {
        title: 'Ordem de Pagamentos',
        url: '#',
      },
      {
        title: 'Portal da Transparência',
        url: '#',
      },
      {
        title: 'Prestação de contas',
        url: '#',
      },
      {
        title: 'Processos Licitatórios',
        url: '#',
      },
      {
        title: 'Receitas',
        url: '#',
      },
      {
        title: 'Relação de Servidores e Autoridades',
        url: '#',
      },
      {
        title: 'Relatório de Contratações',
        url: '#',
      },
      {
        title: 'Servidores',
        url: '#',
      },
      {
        title: 'Verba indenizatória',
        url: '#',
      },
    ],
  },
  {
    title: 'Portal do Contribuinte',
    url: '#',
    icon: UserIcon,
    items: [
      {
        title: 'Consultar DIR',
        url: '#',
      },
      {
        title: 'Consultar RPS',
        url: '#',
      },
      {
        title: 'Lista de Empresas',
        url: '#',
      },
      {
        title: 'NFS-e',
        url: '#',
      },
    ],
  },
  {
    title: 'História',
    url: '#',
    icon: LibraryBigIcon,
    items: [
      {
        title: 'Bandeira e Símbolos',
        url: '#',
      },
      {
        title: 'Câmara',
        url: '#',
      },
      {
        title: 'História',
        url: '#',
      },
    ],
  },
  {
    title: 'Perguntas Frequentes',
    url: '#',
    icon: FileQuestionMarkIcon,
    items: [],
  },
]

export function NavMain() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Principais Links</SidebarGroupLabel>

      <SidebarMenu>
        {GROUPED_LINKS.map((item) => {
          if (item.items?.length === 0) {
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link href={item.url}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          }

          return (
            <Collapsible
              key={item.title}
              asChild
              // defaultOpen={item.isActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={item.title} className="h-fit">
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton
                          asChild
                          truncate={false}
                          className="h-fit py-1"
                        >
                          <a href={subItem.url}>
                            <span>{subItem.title}</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
