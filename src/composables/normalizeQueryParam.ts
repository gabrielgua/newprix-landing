import type { LocationQueryValue } from 'vue-router'

export const normalizeQueryParam = (
  param: LocationQueryValue | LocationQueryValue[] | undefined,
): string => {
  if (param === undefined) {
    return ''
  }

  if (Array.isArray(param)) {
    return param[0] ?? ''
  }

  return param ?? ''
}
