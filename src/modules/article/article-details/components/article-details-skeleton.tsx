import { Skeleton } from '@/components/ui/skeleton'

export function ArticleDetailsSkeleton() {
  return (
    <article>
      <header className="mb-8">
        <div className="mb-4 flex flex-wrap gap-2">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-28" />
          <Skeleton className="h-6 w-16" />
        </div>

        <div className="mb-6">
          <Skeleton className="mb-3 h-12 w-full" />
          <Skeleton className="h-12 w-4/5" />
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div>
              <Skeleton className="mb-1 h-4 w-24" />
              <Skeleton className="h-3 w-32" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-16" />
          </div>
        </div>
      </header>

      <div className="mb-8">
        <Skeleton className="h-64 w-full rounded-lg md:h-96" />
      </div>

      <div className="prose prose-lg max-w-none">
        <div className="mb-6">
          <Skeleton className="mb-2 h-6 w-full" />
          <Skeleton className="mb-2 h-6 w-full" />
          <Skeleton className="h-6 w-3/4" />
        </div>

        <Skeleton className="mb-4 h-8 w-2/3" />

        <div className="mb-4">
          <Skeleton className="mb-2 h-5 w-full" />
          <Skeleton className="mb-2 h-5 w-full" />
          <Skeleton className="h-5 w-4/5" />
        </div>

        <div className="mb-6">
          <Skeleton className="mb-2 h-5 w-full" />
          <Skeleton className="mb-2 h-5 w-full" />
          <Skeleton className="h-5 w-3/4" />
        </div>

        <Skeleton className="mb-4 h-8 w-1/2" />
        <div className="mb-4">
          <Skeleton className="mb-2 h-5 w-full" />
          <Skeleton className="mb-2 h-5 w-full" />
          <Skeleton className="h-5 w-5/6" />
        </div>

        <div className="border-muted my-6 border-l-4 pl-6">
          <Skeleton className="mb-2 h-6 w-full" />
          <Skeleton className="h-6 w-4/5" />
        </div>

        <Skeleton className="mb-4 h-8 w-1/3" />

        <div className="mb-4">
          <Skeleton className="mb-2 h-5 w-full" />
          <Skeleton className="mb-2 h-5 w-full" />
          <Skeleton className="h-5 w-3/4" />
        </div>

        <div>
          <Skeleton className="mb-2 h-5 w-full" />
          <Skeleton className="mb-2 h-5 w-full" />
          <Skeleton className="h-5 w-4/5" />
        </div>
      </div>
    </article>
  )
}
