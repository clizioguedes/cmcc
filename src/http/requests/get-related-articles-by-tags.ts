import type { Article, Author, Cover, Tag } from '@/entities/article'
import type { HttpResponse } from '@/types/http'

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

  if (tags.length === 0) return []

  const searchParams = new URLSearchParams()

  // populate
  searchParams.append('populate[cover]', 'true')
  searchParams.append('populate[author][fields][0]', 'name')
  searchParams.append('populate[author][fields][1]', 'email')
  searchParams.append('populate[author][fields][2]', 'position')
  searchParams.append('populate[author][populate][avatar][fields][0]', 'url')

  // filtros: artigos que tenham pelo menos uma das tags do post principal
  tags.forEach((tag, index) => {
    searchParams.append(`filters[$or][${index}][tags][slug][$eq]`, tag.slug)
  })

  // excluir o artigo atual
  searchParams.append('filters[documentId][$ne]', excludeDocumentId)

  // limitar quantidade
  searchParams.append('pagination[pageSize]', '6')

  // ordenar por data mais recente
  searchParams.append('sort[0]', 'publishedAt:desc')

  const response = await api
    .get('articles', { searchParams })
    .json<GetRelatedArticlesResponse>()

  return response.data
}
