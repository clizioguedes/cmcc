import type { DocumentBase } from '@/entities/document-base'
import type { HttpResponse } from '@/types/http'
import { buildPopulateParams } from '@/utils/build-populate-params'

import { api } from '../cms-api-client'

export type GetAnnualBudgetLawsResponse = HttpResponse<Array<DocumentBase>>

export async function getAnnualBudgetLaws() {
  const searchParams = buildPopulateParams({
    file: true,
  })

  const response = await api
    .get('annual-budget-laws', {
      searchParams,
      next: {
        tags: ['annual-budget-laws'],
        revalidate: 60 * 60 * 24,
      },
    })
    .json<GetAnnualBudgetLawsResponse>()

  return response.data
}
