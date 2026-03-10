import type { Brand } from './brand'

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
  store: 'AMAZON' | 'MERCADO_LIVRE'
  brand: ProductBrand
  img: string
  link: string
  new: boolean
}
