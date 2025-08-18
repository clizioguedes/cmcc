import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'

export function ListArticlesSkeleton() {
  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <h1 className={cn('text-4xl font-bold', 'md:text-5xl')}>Notícias</h1>
        <p className="text-muted-foreground text-xl">
          Últimas notícias publicadas
        </p>
      </header>

      <div className={cn('grid gap-8', 'md:grid-cols-2', 'lg:grid-cols-3')}>
        {Array.from({ length: 6 }).map((_, index) => (
          <article
            key={index}
            className="group flex h-full flex-col justify-between gap-4"
          >
            <div className="flex flex-col gap-4">
              <Skeleton key={index} className="h-48 w-full rounded-lg" />

              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 2 }).map((_, index) => (
                  <Skeleton key={index} className="h-5 w-16" />
                ))}
              </div>

              <Skeleton className="h-8 w-60" />

              <Skeleton className="h-6 w-full" />
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
