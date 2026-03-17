import { normalizeQueryParam } from '@/composables/normalizeQueryParam'
import type { ProductStore } from '@/types/product'
import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useBrandStore } from './brand-store'

type BrandFilter = {
  label: string
  value: string
}

type OrderByOption = 'default' | 'asc' | 'desc' | 'newFirst' | 'oldFirst'

type OrderByFilter = {
  label: string
  value: OrderByOption
}

type StoreOption = ProductStore | 'all'
type StoreFilter = {
  label: string
  value: StoreOption
}

type CatalogFilter = {
  term?: string
  brand?: BrandFilter
  orderBy?: OrderByOption
  store?: StoreOption
}

export const useCataLogFilterStore = defineStore('catalog-filter', () => {
  const route = useRoute()
  const router = useRouter()
  const brandStore = useBrandStore()

  const orderByFilters: OrderByFilter[] = [
    { value: 'default', label: 'Padrão' },
    { value: 'asc', label: 'Nome: de A - Z' },
    { value: 'desc', label: 'Nome: de Z - A' },
    { value: 'newFirst', label: 'Lançamentos Primeiro' },
    { value: 'oldFirst', label: 'Antigos Primeiro' },
  ]

  const storeFilters: StoreFilter[] = [
    { value: 'all', label: 'Todas' },
    { value: 'MERCADO_LIVRE', label: 'Mercado Livre' },
    { value: 'AMAZON', label: 'Amazon' },
  ]

  const selectedOrderByLabel = computed(() => {
    return orderByFilters.find((f) => f.value === filter.value.orderBy)?.label
  })

  const selectedStoreLabel = computed(() => {
    return storeFilters.find((f) => f.value === filter.value.store)?.label
  })

  const filter = ref<CatalogFilter>({
    term: '',
    brand: {
      label: 'Todos',
      value: 'all',
    },
    orderBy: 'default',
    store: 'all',
  })

  const brands = computed<BrandFilter[]>(() => [
    { label: 'Todos', value: 'all' },
    ...brandStore.brands.map((brand) => ({
      label: brand.label,
      value: brand.value,
    })),
  ])

  const isValidBrand = (value: string) => {
    return brands.value.some((brand) => brand.value === value)
  }

  const selectStore = (store: StoreOption) => {
    filter.value.store = store
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
    resetStore()
    router.replace({ query: {} })
  }

  const resetStore = () => {
    filter.value.store = 'all'
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

  //sanitize filter term
  watch(
    () => filter.value.term,
    (newTerm) => {
      const sanitizedTerm = newTerm?.replace(/^\s+/, '').replace(/\s{2,}/g, ' ')
      if (sanitizedTerm !== newTerm) {
        filter.value.term = sanitizedTerm
      }
    },
  )

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
    selectStore,
    selectBrand,
    resetFilters,
    resetTerm,
    resetOrderBy,
    resetBrand,
    resetStore,
    filter,
    orderByFilters,
    storeFilters,
    selectedOrderByLabel,
    selectedStoreLabel,
    brands,
  }
})
