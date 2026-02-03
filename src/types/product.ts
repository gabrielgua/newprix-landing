export type Product = {
  id: string
  name: string
  category: string
  description: string
  store: string
  brand: 'AMAZON' | 'MERCADO_LIVRE'
  img: string
  link: string
  new: boolean
}
