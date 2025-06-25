'use client'

import {
  ArchiveIcon,
  ChevronRight,
  HandCoinsIcon,
  LibraryBigIcon,
  ScaleIcon,
  UsersRoundIcon,
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
    title: 'Área do Cidadão',
    url: '/area-do-cidadao',
    icon: UsersRoundIcon,
    items: [
      {
        title: 'Busca de Ouvidoria e e-SIC',
        url: '#',
      },
    ],
  },
  {
    title: 'Certidões',
    url: '#',
    icon: ArchiveIcon,
    items: [
      {
        title: 'Certidão Estadual',
        url: '#',
      },
      {
        title: 'Certidão Federal',
        url: '#',
      },
      {
        title: 'Certidão FGTS',
        url: '#',
      },
      {
        title: 'Certidão Municipal',
        url: '#',
      },
      {
        title: 'Certidão Trabalhista',
        url: '#',
      },
      {
        title: 'Falência e Concordata',
        url: '#',
      },
    ],
  },
  {
    title: 'Estrutura Organizacional',
    url: '#',
    icon: LibraryBigIcon,
    items: [
      {
        title: 'Comissões',
        url: '#',
      },
      {
        title: 'Estrutura Organizacional',
        url: '#',
      },
      {
        title: 'Mesa Diretora',
        url: '#',
      },
      {
        title: 'Parlamentares',
        url: '#',
      },
      {
        title: 'Regime Interno',
        url: '#',
      },
      {
        title: 'Relatório de Gestão e Atividades',
        url: '#',
      },
    ],
  },
  {
    title: 'Responsabilidade Fiscal e Orçamentos',
    url: '#',
    icon: HandCoinsIcon,
    items: [
      {
        title: 'Balanço Geral',
        url: '#',
      },
      {
        title: 'Demonstrativo de Contas',
        url: '#',
      },
      {
        title: 'Lei de Diretrizes Orçamentárias',
        url: '#',
      },
      {
        title: 'Lei de Orçamentária Anual',
        url: '#',
      },
      {
        title: 'Plano Plurianual',
        url: '#',
      },
      {
        title: 'Demonstrativo de Despesas',
        url: '#',
      },
      {
        title: 'Relatório de Gestão Fiscal',
        url: '#',
      },
    ],
  },
  {
    title: 'Trabalho Legislativo',
    url: '#',
    icon: ScaleIcon,
    items: [
      {
        title: 'Atas',
        url: '#',
      },
      {
        title: 'Atas Normativos',
        url: '#',
      },
      {
        title: 'Decretos',
        url: '#',
      },
      {
        title: 'Lei Orgânica Municipal',
        url: '#',
      },
      {
        title: 'Leis Mun. Sancionadas',
        url: '#',
      },
      {
        title: 'Lista de Frequência',
        url: '#',
      },
      {
        title: 'Pautas das Sessões',
        url: '#',
      },
      {
        title: 'Portarias',
        url: '#',
      },
      {
        title: 'Projetos de Resolução',
        url: '#',
      },
      {
        title: 'Projetos de Lei',
        url: '#',
      },
      {
        title: 'Regulamentação da LAI',
        url: '#',
      },
      {
        title: 'Regulamentação da Lei Gov. Digital',
        url: '#',
      },
      {
        title: 'Regulamentação da LGPD',
        url: '#',
      },
      {
        title: 'Regulamentação da Nova Lei de Licitações 14.133/2021',
        url: '#',
      },
      {
        title: 'Requerimentos',
        url: '#',
      },
      {
        title: 'Resoluções',
        url: '#',
      },
    ],
  },
]

export function NavSecondary() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Links Úteis</SidebarGroupLabel>

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
                        <SidebarMenuSubButton asChild>
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
