import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    STRAPI_WEBHOOK_SECRET: z.string(),
    STRAPI_API_TOKEN: z.string(),
  },

  client: {},

  shared: {
    NEXT_PUBLIC_BASE_URL: z.string().url(),
    NEXT_PUBLIC_CMS_API_URL: z.string().url(),
    NEXT_PUBLIC_CMS_URL: z.string().url(),
  },

  runtimeEnv: {
    // shared
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_CMS_API_URL: process.env.NEXT_PUBLIC_CMS_API_URL,
    NEXT_PUBLIC_CMS_URL: process.env.NEXT_PUBLIC_CMS_URL,

    // server
    STRAPI_WEBHOOK_SECRET: process.env.STRAPI_WEBHOOK_SECRET,
    STRAPI_API_TOKEN: process.env.STRAPI_API_TOKEN,
  },
})
