import { LinkIcon } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { getArticles } from '@/http/requests/get-articles'

export default async function ArticlesPage() {
  const articles = await getArticles()

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
