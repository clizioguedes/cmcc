import type { Article, Author, Cover, Tag } from '@/entities/article'
import type { HttpResponse } from '@/types/http'
import { buildPopulateParams } from '@/utils/build-populate-params'

import { api } from '../cms-api-client'

export type GetRelatedArticlesByTagsParams = {
  documentId: string
  limit: number
  tags: Array<{ slug: string }>
}

export type GetRelatedArticlesResponse = HttpResponse<
  Array<Article & { tags?: Array<Tag>; cover?: Cover; author?: Author }>
>

export async function getRelatedArticlesByTags(
  params: GetRelatedArticlesByTagsParams,
) {
  const { documentId: excludeDocumentId, tags } = params

  const searchParams = buildPopulateParams({
    cover: true,
    author: {
      fields: ['name', 'email', 'position'],
      populate: {
        avatar: {
          fields: ['url'],
        },
      },
    },
    tags: ['documentId', 'name', 'slug'],
  })

  tags.forEach((tag, index) => {
    searchParams.append(`filters[$or][${index}][tags][slug][$eq]`, tag.slug)
  })

  searchParams.append('filters[documentId][$ne]', excludeDocumentId)

  searchParams.append('pagination[pageSize]', '6')

  searchParams.append('sort[0]', 'publishedAt:desc')

  const response = await api
    .get('articles', { searchParams })
    .json<GetRelatedArticlesResponse>()

  return response.data
}
