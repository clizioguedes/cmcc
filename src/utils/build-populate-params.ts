type PopulateValue = true | string[] | { [key: string]: PopulateValue }

export function buildPopulateParams(
  populate: PopulateValue,
  prefix = 'populate',
): Record<string, string> {
  const params: Record<string, string> = {}

  if (populate === true) {
    params[prefix] = 'true'
  } else if (Array.isArray(populate)) {
    populate.forEach((field, index) => {
      params[`${prefix}[fields][${index}]`] = field
    })
  } else if (typeof populate === 'object' && populate !== null) {
    for (const [key, value] of Object.entries(populate)) {
      Object.assign(params, buildPopulateParams(value, `${prefix}[${key}]`))
    }
  }

  return params
}
