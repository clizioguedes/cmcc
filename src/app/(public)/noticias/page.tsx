import { Suspense } from 'react'

import {
  ListArticles,
  ListArticlesSkeleton,
} from '@/modules/article/list-articles'

export default function ArticlesPage() {
  return (
    <div className="flex flex-col gap-4">
      <Suspense fallback={<ListArticlesSkeleton />}>
        <ListArticles />
      </Suspense>
    </div>
  )
}
