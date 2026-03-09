import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useBrandStore } from './brand-store'

type BrandFilter = {
  label: string
  value: string
}

type CatalogFilter = {
  term?: string
  brand?: BrandFilter
  categories?: string[]
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
    categories: [],
  })

  const brands = ref<BrandFilter[]>([
    { label: 'Todos', value: 'all' },
    ...brandStore.brands.map((brand) => ({
      label: brand.label,
      value: brand.value,
    })),
  ])

  const isValidBrand = (value: unknown): value is string => {
    return brands.value.some((filter) => filter.value === value)
  }

  const selectedBrand = ref<string>(isValidBrand(route.query.brand) ? route.query.brand : 'all')

  const selectBrand = (brand: string) => {
    selectedBrand.value = brand

    router.replace({
      query: brand === 'all' ? {} : { brand: brand },
    })
  }

  watch(
    () => route.query.brand,
    (brand) => {
      if (isValidBrand(brand)) {
        filter.value.brand!.value = brand
        return
      }

      filter.value.brand = { label: 'Todos', value: 'all' }

      if (brand !== undefined) {
        router.replace({ query: {} })
      }
    },
    { immediate: true },
  )

  return { selectBrand, brands, filter }
})
