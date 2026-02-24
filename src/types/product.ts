export type Product = {
  id: string
  name: string
  category: string
  description: string
  store: 'AMAZON' | 'MERCADO_LIVRE'
  brand: string
  img: string
  link: string
  new: boolean
}
