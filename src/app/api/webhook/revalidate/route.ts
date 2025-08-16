import { revalidateTag } from 'next/cache'
import { NextResponse } from 'next/server'

import { env } from '@/env'
import type { StrapiEvent } from '@/types/strapi'

type WebhookEntry = {
  id: number
  documentId: string
  slug: string
}

type WebhookBody = {
  event: StrapiEvent
  createdAt: string
  entry: WebhookEntry
  model: 'article' | 'tag'
}

const ARTICLE_LIST_EVENTS: StrapiEvent[] = [
  'entry.publish',
  'entry.update',
  'entry.unpublish',
  'entry.delete',
]

const SINGLE_ARTICLE_EVENTS: StrapiEvent[] = [
  'entry.update',
  'entry.unpublish',
  'entry.delete',
]

export async function POST(req: Request) {
  const authHeader = req.headers.get('authorization')

  if (authHeader !== `Bearer ${env.STRAPI_WEBHOOK_SECRET}`) {
    console.warn('🚫 Unauthorized webhook attempt')
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body: WebhookBody = await req.json()

    if (!body.event) {
      return NextResponse.json(
        { message: 'Invalid payload: missing event' },
        { status: 400 },
      )
    }

    const { event, entry, model } = body

    if (event === 'trigger-test') {
      console.log('✅ Webhook test received')
      return NextResponse.json({ revalidated: true })
    }

    if (model === 'article') {
      const revalidatedTags: string[] = []

      if (ARTICLE_LIST_EVENTS.includes(event)) {
        revalidateTag('articles')
        revalidatedTags.push('articles')
      }

      if (SINGLE_ARTICLE_EVENTS.includes(event) && entry?.slug) {
        revalidateTag(`article-${entry.slug}`)
        revalidatedTags.push(`article-${entry.slug}`)
      }

      if (revalidatedTags.length > 0) {
        console.log(`🔄 Revalidated due to event "${event}":`, revalidatedTags)
      } else {
        console.log(`ℹ️ Event "${event}" received, no tags revalidated`)
      }

      return NextResponse.json({ revalidated: revalidatedTags })
    }

    return NextResponse.json({ revalidated: false })
  } catch (error) {
    console.error('❌ Webhook handler error:', error)

    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 },
    )
  }
}
