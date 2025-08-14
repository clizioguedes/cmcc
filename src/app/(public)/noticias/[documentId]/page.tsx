import { Suspense } from 'react'

import {
  ArticleDetails,
  ArticleDetailsSkeleton,
} from '@/modules/article/article-details'

type ArticlePageProps = {
  params: Promise<{ documentId: string }>
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { documentId } = await params

  return (
    <Suspense fallback={<ArticleDetailsSkeleton />}>
      <ArticleDetails documentId={documentId} />
    </Suspense>
  )
}
