import type { Article, Author, Cover, Tag } from '@/entities/article'
import type { HttpResponse } from '@/types/http'
import { buildPopulateParams } from '@/utils/build-populate-params'

import { api } from '../cms-api-client'

export type GetArticleBySlugParams = {
  slug: string
}

export type GetArticleBySlugResponse = HttpResponse<
  Array<
    Article & {
      tags?: Array<Tag>
      cover?: Cover
      author?: Author
    }
  >
>

export async function getArticleBySlug(params: GetArticleBySlugParams) {
  const { slug } = params

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

  searchParams.append('filters[slug][$eq]', slug)
  searchParams.append('pagination[limit]', '1')

  const response = await api
    .get(`articles`, {
      searchParams,
      next: {
        tags: [`articles-${slug}`],
        revalidate: 60 * 60 * 24, // 1 day
      },
    })
    .json<GetArticleBySlugResponse>()

  const [article] = response.data

  return article || null
}
