import type { MetadataRoute } from 'next'

import { env } from '@/env'
import { getArticles } from '@/http/requests/get-articles'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data: articles } = await getArticles()

  const baseUrl = env.NEXT_PUBLIC_BASE_URL.replace(/\/$/, '')

  const staticUrls = ['', 'sobre', 'contato', 'blog']

  const staticPages: MetadataRoute.Sitemap = staticUrls.map((path) => ({
    url: `${baseUrl}/${path}`,
    lastModified: new Date('2025-06-29'),
    changeFrequency: 'never',
    priority: 1,
  }))

  const dynamicPages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/artigos/${article.slug}`,
    lastModified: new Date(article.updatedAt),
    changeFrequency: 'yearly',
    priority: 0.8,
  }))

  return [...staticPages, ...dynamicPages]
}
