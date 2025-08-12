import ky, { type HTTPError } from 'ky'

import { env } from '@/env'

export const api = ky.create({
  prefixUrl: env.NEXT_PUBLIC_CMS_API_URL,
  retry: 3,
  hooks: {
    beforeRequest: [
      async (request) => {
        request.headers.set('Authorization', `Bearer ${env.STRAPI_API_TOKEN}`)
      },
    ],
    beforeError: [
      async (error): Promise<HTTPError<{ message: string }>> => {
        const { response } = error
        const contentType = response.headers.get('content-type')

        if (contentType?.indexOf('application/json') !== -1) {
          const errorResponse = await response.json<{ message: string }>()
          error.message = errorResponse.message
        } else {
          const errorResponse = await response.text()
          error.message = errorResponse
        }

        return error
      },
    ],
  },
})
