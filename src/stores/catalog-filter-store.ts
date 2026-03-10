import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useBrandStore } from './brand-store'
import { normalizeQueryParam } from '@/composables/normalizeQueryParam'

type FilterBrand = {
  label: string
  value: string
}

type OrderByOption = 'default' | 'asc' | 'desc' | 'newFirst' | 'oldFirst'

type CatalogFilter = {
  term?: string
  brand?: FilterBrand
  orderBy?: OrderByOption
}

type FilterCategoryOptions = 'Limpeza' | 'Moda' | 'Proteção' | 'Lazer' | 'Cosméticos'
type FilterCategory = {
  label: FilterCategoryOptions
  value: string
}

export const useCataLogFilterStore = defineStore('catalog-filter', () => {
  const route = useRoute()
  const router = useRouter()
  const brandStore = useBrandStore()

  const filter = ref<CatalogFilter>({
    term: '',
    brand: {
      label: 'Todos',
      value: 'all',
    },
    orderBy: 'default',
  })

  const brands = computed<FilterBrand[]>(() => [
    { label: 'Todos', value: 'all' },
    ...brandStore.brands.map((brand) => ({
      label: brand.label,
      value: brand.value,
    })),
  ])

  const isValidBrand = (value: string) => {
    return brands.value.some((brand) => brand.value === value)
  }

  const selectBrand = (brand: string) => {
    if (!isValidBrand(brand)) {
      return
    }

    const selectedBrand = brands.value.find((b) => b.value === brand)!
    filter.value.brand = selectedBrand

    router.replace({
      query: brand === 'all' ? {} : { brand: brand },
    })
  }

  const resetFilters = () => {
    resetTerm()
    resetOrderBy()
    resetBrand()
    router.replace({ query: {} })
  }

  const resetTerm = () => {
    filter.value.term = ''
  }

  const resetOrderBy = () => {
    filter.value.orderBy = 'default'
  }
  const resetBrand = () => {
    filter.value.brand = { label: 'Todos', value: 'all' }
  }

  watch(
    () => route.query.brand,
    (brand) => {
      const treatedBrand: string = normalizeQueryParam(brand)
      if (!isValidBrand(treatedBrand)) {
        filter.value.brand = { label: 'Todos', value: 'all' }

        if (brand !== undefined) {
          router.replace({ query: {} })
        }
        return
      }

      const selectedBrand = brands.value.find((b) => b.value === treatedBrand)
      if (selectedBrand) {
        filter.value.brand = selectedBrand
        return
      }
    },
    { immediate: true },
  )

  return {
    selectBrand,
    resetFilters,
    resetTerm,
    resetOrderBy,
    resetBrand,
    filter,
    brands,
  }
})
