import { ArrowRight, Calendar, Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { env } from '@/env'
import { getArticles } from '@/http/requests/get-articles'
import { dayjs } from '@/lib/day-js'
import { cn } from '@/lib/utils'
import { calculateBlogPostReadingTime } from '@/utils/calculate-blog-post-reading-time'
import { capitalizeFirstLetter } from '@/utils/capitalize-first-letter'

export async function ListArticles() {
  const articles = await getArticles()

  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <h1 className={cn('text-4xl font-bold', 'md:text-5xl')}>Notícias</h1>
        <p className="text-muted-foreground text-xl">
          Últimas notícias publicadas
        </p>
      </header>

      <div className={cn('grid gap-8', 'md:grid-cols-2', 'lg:grid-cols-3')}>
        {articles.data.map((article) => {
          const articleCoverURL = article.cover?.url
            ? `${env.NEXT_PUBLIC_CMS_URL}${article.cover?.url}`
            : null

          const readingTime = calculateBlogPostReadingTime(
            article?.content ?? [],
          )

          const findFirstParagraph = article.content
            ?.find((block) => block.type === 'paragraph')
            ?.children.find((child) => child.type === 'text')?.text

          return (
            <Link
              key={article.id}
              href={`/noticias/${article.slug}`}
              className="h-fit"
            >
              <article
                className={cn('group flex flex-col gap-4', 'hover:opacity-80')}
              >
                {articleCoverURL && (
                  <Image
                    width={600}
                    height={400}
                    src={articleCoverURL}
                    alt={article.title}
                    className="h-48 w-full rounded-lg object-cover transition-opacity group-hover:opacity-90"
                  />
                )}

                <div className="flex flex-wrap gap-2">
                  {article.tags?.map((tag) => (
                    <Badge key={tag.id} variant="outline" className="text-xs">
                      {tag.name}
                    </Badge>
                  ))}
                </div>

                <h2
                  className={cn(
                    'text-xl leading-tight font-semibold transition-colors',
                    'group-hover:underline group-hover:underline-offset-4',
                  )}
                >
                  {article.title}
                </h2>

                <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">
                  {article.description || findFirstParagraph}
                </p>

                <div className="flex flex-col gap-4">
                  <div
                    className={cn(
                      'flex flex-col flex-wrap gap-2',
                      'lg:flex-row lg:items-center lg:justify-between',
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <Avatar className="size-8">
                        <AvatarImage
                          src={`${env.NEXT_PUBLIC_CMS_URL}${article.author?.avatar?.url}`}
                          alt={article.author?.name}
                        />

                        <AvatarFallback>
                          {article.author?.name.slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>

                      <div className="text-sm">
                        <p className="font-medium">{article.author?.name}</p>
                      </div>
                    </div>

                    <div className="text-muted-foreground flex flex-wrap items-center gap-3 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="size-3" />
                        <span>
                          {capitalizeFirstLetter(
                            dayjs(article.createdAt).format('MMMM DD, YYYY'),
                          )}
                        </span>
                      </div>

                      <div className="flex items-center gap-1">
                        <Clock className="size-3" />
                        <span>{readingTime} min. de leitura</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-3">
                    <div className="flex items-center gap-1 text-sm transition-colors">
                      <span>Ler mais</span>
                      <ArrowRight className="size-3" />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
