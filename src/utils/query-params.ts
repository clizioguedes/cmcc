export function formatQueryParams(
  params: Record<string, string | number | Array<string> | undefined>,
) {
  const queryParams = new URLSearchParams()

  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === null || value === '') return

    if (Array.isArray(value)) {
      value.forEach((item) => {
        if (item === undefined || item === '') return
        queryParams.append(key, String(item))
      })
    } else {
      queryParams.append(key, String(value))
    }
  })

  return queryParams.toString()
}
