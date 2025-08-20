import { ArrowRightIcon, FileTextIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { env } from '@/env'
import { getRelatedArticlesByTags } from '@/http/requests/get-related-articles-by-tags'
import { dayjs } from '@/lib/day-js'
import { cn } from '@/lib/utils'
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
  })

  if (relatedArticles.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="bg-muted mb-4 rounded-full p-3">
          <FileTextIcon className="text-muted-foreground h-8 w-8" />
        </div>

        <h4 className="mb-2 text-xl font-medium">
          Nenhuma notícias relacionada
        </h4>

        <p className="text-muted-foreground max-w-md text-lg">
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
          : null

        return (
          <Link key={article.id} href={`/noticias/${article.slug}`}>
            <article
              className={cn(
                'group flex flex-col gap-2 transition',
                'hover:opacity-80',
              )}
              key={article.id}
            >
              {articleCoverURL && (
                <Image
                  src={articleCoverURL}
                  alt="TypeScript Best Practices"
                  className={cn(
                    'mb-2 h-full max-h-52 w-full rounded-lg object-cover transition-opacity',
                    'group-hover:opacity-90',
                  )}
                  width={600}
                  height={400}
                />
              )}

              <div className="flex flex-wrap gap-2">
                {article.tags?.map((tag) => (
                  <Badge key={tag.id} variant="secondary">
                    {tag.name}
                  </Badge>
                ))}
              </div>

              <h4 className="text-lg font-semibold transition-colors group-hover:underline group-hover:underline-offset-4">
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

                <div className="text-muted-foreground flex items-center gap-1">
                  <span>Ler mais</span>
                  <ArrowRightIcon className="size-3" />
                </div>
              </div>
            </article>
          </Link>
        )
      })}
    </div>
  )
}
