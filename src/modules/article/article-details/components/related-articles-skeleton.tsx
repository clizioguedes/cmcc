import { Skeleton } from '@/components/ui/skeleton'

export function RelatedArticlesSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, index) => (
        <article key={index} className="group">
          <div className="mb-4">
            <Skeleton className="h-48 w-full rounded-lg" />
          </div>

          <div className="mb-2 flex gap-2">
            <Skeleton className="h-5 w-16" />
            <Skeleton className="h-5 w-20" />
          </div>

          <div className="mb-2">
            <Skeleton className="mb-1 h-5 w-full" />
            <Skeleton className="h-5 w-3/4" />
          </div>

          <div className="mb-3">
            <Skeleton className="mb-1 h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>

          <div className="flex items-center justify-between">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-20" />
          </div>
        </article>
      ))}
    </div>
  )
}
