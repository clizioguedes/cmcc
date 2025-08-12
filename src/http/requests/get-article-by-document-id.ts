import type { Article, Author, Cover, Tag } from '@/entities/article'
import type { HttpResponse } from '@/types/http'
import { buildPopulateParams } from '@/utils/build-populate-params'

import { api } from '../cms-api-client'

export type getArticleByDocumentIdParams = {
  documentId: string
}

export type GetArticlesResponse = HttpResponse<
  Article & {
    tags?: Array<Tag>
    cover?: Cover
    author?: Author
  }
>

export async function getArticleByDocumentId(
  params: getArticleByDocumentIdParams,
) {
  const { documentId } = params

  const searchParams = buildPopulateParams({
    cover: true,
    author: ['name', 'email'],
    category: ['name', 'slug'],
    tags: ['documentId', 'name', 'slug'],
  })

  const response = await api
    .get(`articles/${documentId}`, {
      searchParams,
      // next: {
      //   tags: [`articles-${documentId}`],
      //   revalidate: 60 * 60 * 24, // 1 day
      // },
    })
    .json<GetArticlesResponse>()

  return response.data
}
