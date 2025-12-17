import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useBrandStore, type Brand, type BrandValue } from './brand-store'

export type FilterValue = BrandValue | 'all'

type BrandFilter = {
  label: string
  value: FilterValue
}

export const useCataLogFilterStore = defineStore('catalog-filter', () => {
  const route = useRoute()
  const router = useRouter()
  const brandStore = useBrandStore()

  const filters = ref<BrandFilter[]>([
    { label: 'Todos', value: 'all' },
    ...brandStore.brands.map((brand) => ({
      label: brand.label,
      value: brand.value,
    })),
  ])

  const isValidFilter = (value: unknown): value is BrandValue => {
    return filters.value.some((filter) => filter.value === value)
  }

  const selectedFilter = ref<FilterValue>(
    isValidFilter(route.query.brand) ? route.query.brand : 'all',
  )

  const selectFilter = (filter: FilterValue) => {
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

  return { selectedFilter, selectFilter, filters }
})
