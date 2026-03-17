import type { Brand } from './brand'

export type ProductStore = 'AMAZON' | 'MERCADO_LIVRE'

export type ProductBrand = {
  label: string
  value: string
}

export type ProductCategory = {
  label: string
  value: string
}

export type Product = {
  id: string
  name: string
  category: ProductCategory
  description: string
  store: ProductStore
  brand: ProductBrand
  img: string
  link: string
  new: boolean
}
