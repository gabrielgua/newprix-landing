import type { Product } from '@/types/product'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useCataLogFilterStore } from './catalog-filter-store'

export const useProductStore = defineStore('products', () => {
  const catalogFilterStore = useCataLogFilterStore()

  const products = ref<Product[]>([])
  const filteredProducts = computed<Product[]>(() => {
    return products.value.filter((product) => {
      const matchesTerm = catalogFilterStore.filter.term
        ? product.name.toLowerCase().includes(catalogFilterStore.filter.term.toLowerCase())
        : true

      const matchesBrand =
        catalogFilterStore.filter.brand?.value !== 'all'
          ? product.brand.value === catalogFilterStore.filter.brand?.value
          : true

      const matchesCategories = catalogFilterStore.filter.categories?.length
        ? catalogFilterStore.filter.categories.every(
            (category) => product.category.value === category.value,
          )
        : true

      return matchesTerm && matchesBrand && matchesCategories
    })
  })

  const state = ref<'loading' | 'loaded' | 'error'>()

  const loadProducts = async () => {
    state.value = 'loading'
    try {
      const response = await fetch('/data/products.json')
      products.value = (await response.json()) as Product[]
      state.value = 'loaded'
    } catch (error) {
      console.error('Error loading products:', error)
      state.value = 'error'
    } finally {
      state.value = 'loaded'
    }
  }

  return { products, filteredProducts, loadProducts, state }
})
