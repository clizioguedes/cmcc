import type { DocumentWithFolder } from '@/entities/document-base'
import type { HttpResponse } from '@/types/http'
import { buildPopulateParams } from '@/utils/build-populate-params'

import { api } from '../cms-api-client'

export type getAnnualFinancialStatementsResponse = HttpResponse<
  Array<DocumentWithFolder>
>

export async function getAnnualFinancialStatements() {
  const searchParams = buildPopulateParams({
    file: true,
  })

  const response = await api
    .get('annual-financial-statements', {
      searchParams,
      // next: {
      //   tags: ['annual-financial-statements'],
      //   revalidate: 60 * 60 * 24,
      // },
    })
    .json<getAnnualFinancialStatementsResponse>()

  return response.data
}
