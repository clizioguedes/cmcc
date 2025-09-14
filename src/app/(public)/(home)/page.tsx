import { LinkIcon } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { getArticles } from '@/http/requests/get-articles'

export default async function HomePage() {
  const articles = await getArticles()

  // Mock data para os 9 vereadores
  const vereadores = [
    {
      id: 1,
      nome: 'José Silva Santos',
      partido: 'MDB',
      comissao: 'Presidente da Mesa',
      foto: '/vereador-1.jpg',
    },
    {
      id: 2,
      nome: 'Maria Oliveira Costa',
      partido: 'PP',
      comissao: 'Vice-Presidente',
      foto: '/vereador-2.jpg',
    },
    {
      id: 3,
      nome: 'João Pereira Lima',
      partido: 'PSD',
      comissao: 'Secretário Geral',
      foto: '/vereador-3.jpg',
    },
    {
      id: 4,
      nome: 'Ana Paula Rodrigues',
      partido: 'PSB',
      comissao: 'Comissão de Finanças',
      foto: '/vereador-4.jpg',
    },
    {
      id: 5,
      nome: 'Carlos Eduardo Alves',
      partido: 'PSDB',
      comissao: 'Comissão de Obras',
      foto: '/vereador-5.jpg',
    },
    {
      id: 6,
      nome: 'Francisca Soares',
      partido: 'PT',
      comissao: 'Comissão de Educação',
      foto: '/vereador-6.jpg',
    },
    {
      id: 7,
      nome: 'Antônio Carlos Neto',
      partido: 'PDT',
      comissao: 'Comissão de Saúde',
      foto: '/vereador-7.jpg',
    },
    {
      id: 8,
      nome: 'Luiza Fernandes',
      partido: 'REPUBLICANOS',
      comissao: 'Comissão de Meio Ambiente',
      foto: '/vereador-8.jpg',
    },
    {
      id: 9,
      nome: 'Roberto Gomes',
      partido: 'PL',
      comissao: 'Comissão de Agricultura',
      foto: '/vereador-9.jpg',
    },
  ]

  return (
    <div className="flex flex-1 flex-col gap-4">
      {articles.data.map((article) => (
        <Button asChild variant="link" key={article.id} className="w-fit">
          <Link
            href={`/noticias/${article.slug}`}
            className="flex items-center gap-3"
          >
            <LinkIcon className="size-4" />
            {article.title}
          </Link>
        </Button>
      ))}
    </div>
  )
}
