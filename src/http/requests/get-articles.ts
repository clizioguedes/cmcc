import type { Article } from '@/entities/article'
import type { Paginated } from '@/types/http'
import { formatQueryParams } from '@/utils/query-params'

import { api } from '../cms-api-client'

export type GetArticlesParams = {
  query?: string
  page?: number
}

export type GetArticlesResponse = Paginated<Article>

export async function getArticles(params: GetArticlesParams = {}) {
  const queryParams = formatQueryParams(params)

  return api
    .get('articles', {
      searchParams: queryParams,
      next: {
        tags: ['articles'],
        revalidate: 60 * 60 * 24, // 1 day
      },
    })
    .json<GetArticlesResponse>()
}
