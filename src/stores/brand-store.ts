import type { Brand } from '@/types/brand'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBrandStore = defineStore('brand-store', () => {
  const brands = ref<Brand[]>([])
  const state = ref<'loading' | 'loaded' | 'error'>()

  const loadBrands = async () => {
    state.value = 'loading'
    try {
      const response = await fetch('/data/brands.json')
      brands.value = (await response.json()) as Brand[]
      state.value = 'loaded'
    } catch (error) {
      console.error('Error loading brands:', error)
      state.value = 'error'
    } finally {
      state.value = 'loaded'
    }
  }

  const getBrand = (value: string) => {
    return brands.value.find((brand) => brand.value === value)
  }

  return { brands, getBrand, state, loadBrands }
})
