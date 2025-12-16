import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const FILTERS = [
  { label: 'Todos', value: 'all' },
  { label: 'WAP', value: 'wap' },
  { label: 'Vonder', value: 'vonder' },
  { label: 'NWX', value: 'nwx' },
  { label: 'Selene', value: 'selene' },
  { label: 'Alhe', value: 'alhe' },
] as const

export type Filter = (typeof FILTERS)[number]['value']

export type CatalogFilter = {
  label: string
  value: Filter
}

export const useCataLogFilterStore = defineStore('catalog-filter', () => {
  const route = useRoute()
  const router = useRouter()

  const isValidFilter = (value: unknown): value is Filter => {
    return FILTERS.some((filter) => filter.value === value)
  }

  const selectedFilter = ref<Filter>(isValidFilter(route.query.brand) ? route.query.brand : 'all')

  const selectFilter = (filter: Filter) => {
    selectedFilter.value = filter

    router.replace({
      query: filter === 'all' ? {} : { brand: filter },
    })
  }

  watch(
    () => route.query.brand,
    (brand) => {
      if (isValidFilter(brand)) {
        selectedFilter.value = brand
        return
      }

      selectedFilter.value = 'all'

      if (brand !== undefined) {
        router.replace({ query: {} })
      }
    },
    { immediate: true },
  )

  return { selectedFilter, selectFilter, FILTERS }
})
