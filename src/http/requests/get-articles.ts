import type { Article, Author, Cover, Tag } from '@/entities/article'
import type { Paginated } from '@/types/http'
import { buildPopulateParams } from '@/utils/build-populate-params'

import { api } from '../cms-api-client'

type ArticleWithRelations = Article & {
  tags?: Array<Tag>
  cover?: Cover
  author?: Author
}

export type GetArticlesParams = {
  query?: string
}

export type GetArticlesResponse = Paginated<ArticleWithRelations>

export async function getArticles(params: GetArticlesParams = {}) {
  const { query } = params

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
    category: ['name', 'slug'],
    tags: ['documentId', 'name', 'slug'],
  })

  searchParams.append('sort[0]', 'publishedAt:desc')

  if (query) {
    searchParams.append('filters[$or][0][title][$containsi]', query)
    searchParams.append('filters[$or][1][description][$containsi]', query)
    searchParams.append('filters[$or][2][content][$containsi]', query)
    searchParams.append('filters[$or][3][tags][name][$containsi]', query)
  }

  return api
    .get('articles', {
      searchParams,
      next: {
        tags: ['articles'],
        revalidate: 60 * 60 * 24, // 1 day
      },
    })
    .json<GetArticlesResponse>()
}
