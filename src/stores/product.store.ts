import type { Product } from '@/types/product'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductStore = defineStore('products', () => {
  const products = ref<Product[]>([])
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

  return { products, loadProducts, state }
})
