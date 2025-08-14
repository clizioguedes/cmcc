type PopulateConfig = true | string[] | { [key: string]: PopulateConfig }

/**
 * Gera pares [key, value] para usar diretamente em `searchParams` (ky/fetch).
 * - true => populate tudo: populate[foo]=true
 * - string[] => fields: populate[foo][fields][0]=field1 ...
 * - object => trata chaves aninhadas; aceita chaves especiais:
 *    - "populate": true | string[] | object  -> popula sub-relations (ex: avatar)
 *    - "fields": string[]                    -> fields explícitos
 */
export function buildPopulateParams(
  cfg: PopulateConfig,
  prefix = 'populate',
): URLSearchParams {
  const out: Array<[string, string]> = []

  // caso: populate = true  -> populate[...]=true
  if (cfg === true) {
    out.push([prefix, 'true'])
    return new URLSearchParams(out)
  }

  // caso: array de strings => tratamos como "fields"
  if (Array.isArray(cfg)) {
    cfg.forEach((field, i) => {
      out.push([`${prefix}[fields][${i}]`, String(field)])
    })
    return new URLSearchParams(out)
  }

  // caso: objeto aninhado
  for (const [key, value] of Object.entries(cfg)) {
    // chave especial: "populate" (vai criar populate[...][populate]...)
    if (key === 'populate') {
      const v = value
      if (v === true) {
        out.push([`${prefix}[populate]`, 'true'])
      } else if (Array.isArray(v)) {
        v.forEach((item, i) => {
          out.push([`${prefix}[populate][${i}]`, String(item)])
        })
      } else if (typeof v === 'object' && v !== null) {
        // permite populate: { someRel: true | [...] | {...} }
        for (const [subKey, subVal] of Object.entries(v)) {
          out.push(
            ...buildPopulateParams(subVal, `${prefix}[populate][${subKey}]`),
          )
        }
      }
      continue
    }

    // chave especial: "fields" (pode vir junto com populate)
    if (key === 'fields' && Array.isArray(value)) {
      ;(value as string[]).forEach((field, i) => {
        out.push([`${prefix}[fields][${i}]`, String(field)])
      })
      continue
    }

    // caso geral: entra em populate[...][KEY]
    out.push(
      ...buildPopulateParams(value as PopulateConfig, `${prefix}[${key}]`),
    )
  }

  return new URLSearchParams(out)
}
