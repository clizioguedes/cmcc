import { BlocksRenderer } from '@strapi/blocks-react-renderer'

import { getArticleByDocumentId } from '@/http/requests/get-article-by-document-id'

type ArticlePageProps = {
  params: Promise<{ documentId: string }>
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { documentId } = await params

  const article = await getArticleByDocumentId({ documentId })

  return (
    <div className="flex max-w-full flex-1">
      <article className="prose max-w-none">
        <BlocksRenderer content={article.content} />
      </article>
    </div>
  )
}
