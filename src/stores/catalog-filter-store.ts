import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useBrandStore } from './brand-store'
import { normalizeQueryParam } from '@/composables/normalizeQueryParam'

type FilterBrand = {
  label: string
  value: string
}

type CatalogFilter = {
  term?: string
  brand?: FilterBrand
  categories?: FilterCategory[]
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

  const categories = ref<FilterCategory[]>([
    {
      label: 'Limpeza',
      value: 'limpeza',
    },
    {
      label: 'Moda',
      value: 'moda',
    },
    {
      label: 'Proteção',
      value: 'protecao',
    },
    {
      label: 'Lazer',
      value: 'lazer',
    },
    {
      label: 'Cosméticos',
      value: 'cosmeticos',
    },
  ])

  const filter = ref<CatalogFilter>({
    term: '',
    brand: {
      label: 'Todos',
      value: 'all',
    },
    categories: [],
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

  const isValidCategory = (category: string) => {
    return categories.value.some((c) => c.value === category)
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

  const selectCategory = (category: string) => {
    if (!isValidCategory(category)) {
      return
    }

    const categoryAlreadySelected = filter.value.categories?.some((c) => c.value === category)

    if (categoryAlreadySelected) {
      return
    }

    const selectedCategory = categories.value.find((c) => c.value === category)
    if (selectedCategory) {
      filter.value.categories?.push(selectedCategory)
    }
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

  return { selectBrand, selectCategory, filter, brands, categories }
})
