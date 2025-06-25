'use client'

import { ChevronRight, GlobeIcon } from 'lucide-react'
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
    title: 'Serviços',
    url: '/servicos',
    icon: GlobeIcon,
    items: [
      {
        title: 'Assinatura Digital',
        url: '#',
      },
      {
        title: 'Consultar CPF',
        url: '#',
      },
      {
        title: 'Consultar e solicitar a devolução de Valores à Receber',
        url: '#',
      },
      {
        title: 'Consultar restituição de Imposto de Renda',
        url: '#',
      },
      {
        title: 'Cursos Profissionalizantes',
        url: '#',
      },
      {
        title: 'Fazer o Exame Nacional do Ensino Médio (ENEM)',
        url: '#',
      },
      {
        title: 'Obter Carteira de Trabalho',
        url: '#',
      },
      {
        title: 'Portal da Transparência',
        url: '#',
      },
      {
        title: 'Receber Abono Salarial',
        url: '#',
      },
      {
        title: 'Solicitar Auxílio-Inclusão à Pessoa com Deficiência',
        url: '#',
      },
      {
        title: 'Solicitar Seguro Defeso – Pescador Artesanal',
        url: '#',
      },
    ],
  },
]

export function NavMostAccessed() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Mais Acessados</SidebarGroupLabel>

      <SidebarMenu>
        {GROUPED_LINKS.map((item) => {
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
                          <Link href={subItem.url}>
                            <span>{subItem.title}</span>
                          </Link>
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
