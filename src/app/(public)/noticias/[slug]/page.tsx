import { Suspense } from 'react'

import {
  ArticleDetails,
  ArticleDetailsSkeleton,
} from '@/modules/article/article-details'

type ArticlePageProps = {
  params: Promise<{ slug: string }>
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params

  return (
    <Suspense fallback={<ArticleDetailsSkeleton />}>
      <ArticleDetails slug={slug} />
    </Suspense>
  )
}
