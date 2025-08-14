import { ArrowRightIcon, FileTextIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { env } from '@/env'
import { getRelatedArticlesByTags } from '@/http/requests/get-related-articles-by-tags'
import { dayjs } from '@/lib/day-js'
import { capitalizeFirstLetter } from '@/utils/capitalize-first-letter'

type RelatedArticlesProps = {
  documentId: string
  tags: Array<string>
}

export async function RelatedArticles({
  documentId,
  tags,
}: RelatedArticlesProps) {
  const relatedArticles = await getRelatedArticlesByTags({
    documentId,
    limit: 6,
    tags: tags.map((tag) => ({ slug: tag })),
    // tags: [{ slug: 'noticias' }],
  })

  if (relatedArticles.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="bg-muted mb-4 rounded-full p-3">
          <FileTextIcon className="text-muted-foreground h-8 w-8" />
        </div>

        <h4 className="mb-2 text-lg font-medium">
          Nenhuma notícias relacionada
        </h4>

        <p className="text-muted-foreground max-w-md">
          Não encontramos nenhuma notícias relacionada ao tema da sua leitura
        </p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {relatedArticles.map((article) => {
        const articleCoverURL = article.cover?.url
          ? `${env.NEXT_PUBLIC_CMS_URL}${article.cover?.url}`
          : '/article/placeholder.svg'

        return (
          <Link key={article.id} href={`/noticias/${article.documentId}`}>
            <article className="group" key={article.id}>
              <Image
                src={articleCoverURL}
                alt="TypeScript Best Practices"
                className="mb-4 h-full max-h-52 w-full rounded-lg object-cover transition-opacity group-hover:opacity-90"
                width={600}
                height={400}
              />

              <div className="mb-2 flex flex-wrap gap-2">
                {article.tags?.map((tag) => (
                  <Badge key={tag.id} variant="secondary">
                    {tag.name}
                  </Badge>
                ))}
              </div>

              <h4 className="group-hover:text-primary mb-2 text-lg font-semibold transition-colors">
                {article.title}
              </h4>

              <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                {article.description}
              </p>

              <div className="text-muted-foreground flex items-center justify-between text-sm">
                <span>
                  {capitalizeFirstLetter(
                    dayjs(article.createdAt).format('MMMM DD, YYYY'),
                  )}
                </span>

                <div className="group-hover:text-primary flex items-center gap-1 transition-colors">
                  <span>Ler mais</span>
                  <ArrowRightIcon className="h-3 w-3" />
                </div>
              </div>
            </article>
          </Link>
        )
      })}
    </div>
  )
}
