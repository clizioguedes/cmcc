import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'

const sitemapData = [
  {
    title: 'Institucional',
    links: [
      { name: 'Página Inicial', href: '/' },
      { name: 'Sobre a Prefeitura', href: '/sobre' },
      { name: 'Contato', href: '/contato' },
      { name: 'Serviços', href: '/servicos' },
    ],
  },
  {
    title: 'Comunicação e Notícias',
    links: [
      { name: 'Blog', href: '/blog' },
      { name: 'Notícias', href: '/noticias' },
      { name: 'Eventos', href: '/eventos' },
      { name: 'Licitações', href: '/licitacoes' },
    ],
  },
  {
    title: 'Cidadão',
    links: [
      { name: 'Transparência', href: '/transparencia' },
      { name: 'Ouvidoria', href: '/ouvidoria' },
      { name: 'Protocolos Online', href: '/protocolos' },
      { name: 'Agendamentos', href: '/agendamentos' },
    ],
  },
  {
    title: 'Documentos e Políticas',
    links: [
      { name: 'Leis e Decretos', href: '/leis' },
      { name: 'Plano Diretor', href: '/plano-diretor' },
      { name: 'Política de Privacidade', href: '/privacidade' },
      { name: 'Termos de Uso', href: '/termos' },
    ],
  },
]

export default function SitemapPage() {
  const getTotalPages = () => {
    return sitemapData.reduce((total, section) => {
      const sectionTotal = section.links.reduce((sectionSum) => {
        return sectionSum + 1
      }, 0)
      return total + sectionTotal
    }, 0)
  }

  return (
    <div>
      <div>
        <div className="mb-4 flex items-center gap-3">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Site Map</h1>
            <p className="text-muted-foreground mt-1">
              Páginas e links do site
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <Badge variant="secondary" className="text-xs">
            {getTotalPages()} total de páginas
          </Badge>
        </div>
      </div>

      <div className="py-8">
        <div className="space-y-8">
          {sitemapData.map((section, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-primary border-border border-b pb-2 text-xl font-semibold">
                {section.title}
              </h2>

              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="hover:text-primary group flex items-center gap-2 py-1 transition-colors"
                    >
                      <ExternalLink className="text-muted-foreground group-hover:text-primary h-3 w-3 transition-colors" />
                      <span className="font-medium">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
