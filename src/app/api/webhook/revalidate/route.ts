import { revalidateTag } from 'next/cache'
import { NextResponse } from 'next/server'

import { env } from '@/env'
import type { StrapiEvent } from '@/types/strapi'

type Body = {
  event: StrapiEvent
  createdAt: string
}

const UPDATE_POSTS_TRIGGER_EVENTS: StrapiEvent[] = [
  'entry.publish',
  'entry.update',
  'entry.unpublish',
  'entry.delete',
]

export async function POST(req: Request) {
  const authHeader = req.headers.get('authorization')

  if (authHeader !== `Bearer ${env.STRAPI_WEBHOOK_SECRET}`) {
    console.warn('Unauthorized webhook attempt')
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body: Body = await req.json()

    if (!body?.event) {
      return NextResponse.json(
        { message: 'Invalid payload: missing event' },
        { status: 400 },
      )
    }

    if (body.event === 'trigger-test') {
      console.log('✅ Webhook test received')
    }

    console.log(body.event)

    if (UPDATE_POSTS_TRIGGER_EVENTS.includes(body.event)) {
      console.log(`🔄 Revalidating posts due to event: ${body.event}`)
      revalidateTag('articles')
    }

    return NextResponse.json({ revalidated: true })
  } catch (error) {
    console.error('Webhook handler error:', error)

    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 },
    )
  }
}
