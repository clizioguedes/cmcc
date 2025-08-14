import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import { CalendarIcon, ClockIcon } from 'lucide-react'
import Image from 'next/image'
import { Suspense } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { env } from '@/env'
import { getArticleBySlug } from '@/http/requests/get-article-by-slug'
import { dayjs } from '@/lib/day-js'
import { cn } from '@/lib/utils'
import { calculateBlogPostReadingTime } from '@/utils/calculate-blog-post-reading-time'
import { capitalizeFirstLetter } from '@/utils/capitalize-first-letter'

import { ArticleNotFound } from './article-not-fund'
import { RelatedArticles } from './related-articles'
import { RelatedArticlesSkeleton } from './related-articles-skeleton'

type ArticleDetailsProps = {
  slug: string
}

export async function ArticleDetails({ slug }: ArticleDetailsProps) {
  const article = await getArticleBySlug({ slug })

  const readingTime = calculateBlogPostReadingTime(article?.content ?? [])

  if (!article) {
    return <ArticleNotFound />
  }

  return (
    <article className="flex flex-col gap-8">
      <header>
        <div className="flex flex-wrap gap-2">
          {article.tags?.map((tag) => (
            <Badge key={tag.id} variant="secondary">
              {tag.name}
            </Badge>
          ))}
        </div>

        <h1 className="mb-6 text-4xl leading-tight font-bold md:text-5xl">
          {article.title}
        </h1>

        <div
          className={cn(
            'text-muted-foreground flex flex-col items-start gap-6',
            'md:flex-row md:items-center',
          )}
        >
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src={`${env.NEXT_PUBLIC_CMS_URL}${article.author?.avatar?.url}`}
                alt={article.author?.name}
              />

              <AvatarFallback>
                {article.author?.name.slice(0, 2)}
              </AvatarFallback>
            </Avatar>

            <div>
              <p className="text-foreground font-medium">
                {article.author?.name}
              </p>
              <p className="text-sm">{article.author?.position}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <CalendarIcon className="h-4 w-4" />
              <span>
                {capitalizeFirstLetter(
                  dayjs(article.createdAt).format('MMMM DD, YYYY'),
                )}
              </span>
            </div>

            <div className="flex items-center gap-1">
              <ClockIcon className="h-4 w-4" />
              <span>{readingTime} min de leitura</span>
            </div>
          </div>
        </div>
      </header>

      {article.cover && (
        <Image
          src={`${env.NEXT_PUBLIC_CMS_URL}${article.cover?.url}`}
          alt="Modern web development workspace"
          className="h-64 w-full rounded-lg object-cover md:h-96"
          width={article.cover.width}
          height={article.cover.height}
        />
      )}

      <div className={cn('prose max-w-none', 'dark:prose-invert')}>
        <BlocksRenderer content={article.content} />
      </div>

      <Separator />

      <footer className="flex flex-col gap-6">
        <h3 className="text-2xl font-semibold">Notícias relacionadas</h3>

        <Suspense fallback={<RelatedArticlesSkeleton />}>
          <RelatedArticles
            documentId={article.documentId}
            tags={article.tags?.map((tag) => tag.slug) || []}
          />
        </Suspense>
      </footer>
    </article>
  )
}
