import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import { ArrowRightIcon, CalendarIcon, ClockIcon } from 'lucide-react'
import Image from 'next/image'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { env } from '@/env'
import { getArticleByDocumentId } from '@/http/requests/get-article-by-document-id'
import { dayjs } from '@/lib/day-js'
import { cn } from '@/lib/utils'
import { calculateBlogPostReadingTime } from '@/utils/calculate-blog-post-reading-time'
import { capitalizeFirstLetter } from '@/utils/capitalize-first-letter'

type ArticlePageProps = {
  params: Promise<{ documentId: string }>
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { documentId } = await params

  const article = await getArticleByDocumentId({ documentId })

  const readingTime = calculateBlogPostReadingTime(article.content)

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

      <div className="prose max-w-none">
        <BlocksRenderer content={article.content} />
      </div>

      <Separator />

      <footer className="flex flex-col gap-6">
        <h3 className="text-2xl font-semibold">Notícias relacionadas</h3>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="mb-4">
                <Image
                  src="https://placehold.co/600x400"
                  alt="TypeScript Best Practices"
                  className="h-full max-h-52 w-full rounded-lg object-cover transition-opacity group-hover:opacity-90"
                  width={600}
                  height={400}
                />
              </div>

              <div className="mb-2 flex gap-2">
                <Badge variant="outline" className="text-xs">
                  TypeScript
                </Badge>

                <Badge variant="outline" className="text-xs">
                  Best Practices
                </Badge>
              </div>

              <h4 className="group-hover:text-primary mb-2 text-lg font-semibold transition-colors">
                TypeScript Best Practices for React Applications
              </h4>

              <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                Learn essential TypeScript patterns and techniques to write more
                maintainable and type-safe React code.
              </p>

              <div className="text-muted-foreground flex items-center justify-between text-sm">
                <span>March 8, 2024</span>
                <div className="group-hover:text-primary flex items-center gap-1 transition-colors">
                  <span>Read more</span>
                  <ArrowRightIcon className="h-3 w-3" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </footer>
    </article>
  )
}
