import { defineStore } from 'pinia'
import { ref } from 'vue'

export type BrandValue = 'wap' | 'vonder' | 'nwx' | 'selene' | 'alhe'

export type Brand = {
  label: string
  value: BrandValue
  fullName: string
  bgColor?: string
  textColor?: string
  logoSrc: string
}

export const useBrandStore = defineStore('brand-store', () => {
  const brands = ref<Brand[]>([
    {
      label: 'WAP',
      value: 'wap',
      fullName: 'WAP Limpeza',
      textColor: 'text-primary',
      logoSrc: '/images/brands/wap_300x300.png',
    },
    {
      label: 'Vonder',
      value: 'vonder',
      fullName: 'Vonder',
      textColor: 'text-yellow-500',
      bgColor: 'bg-yellow-500',
      logoSrc: '/images/brands/vonder_300x300.png',
    },
    {
      label: 'NWX',
      value: 'nwx',
      fullName: 'NWX',
      textColor: 'text-blue-500',
      bgColor: 'bg-blue-500',
      logoSrc: '/images/brands/nwx_300x300.png',
    },
    {
      label: 'Selene',
      value: 'selene',
      fullName: 'Selene',
      textColor: 'text-rose-400',
      bgColor: 'bg-rose-400',
      logoSrc: '/images/brands/selene_300x300.png',
    },
    {
      label: 'Alhe',
      value: 'alhe',
      fullName: 'Alhe Cosméticos',
      textColor: 'text-stone-400',
      bgColor: 'bg-stone-400',
      logoSrc: '/images/brands/alhe_300x300.png',
    },
  ])

  const getBrand = (value: BrandValue) => {
    return brands.value.find((brand) => brand.value === value)
  }

  return { brands, getBrand }
})
