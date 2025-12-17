import { defineStore } from 'pinia'
import { ref } from 'vue'

export type Brand = {
  label: string
  value: string
  fullName: string
  bgColor?: string
  textColor?: string
  gradientColor?: string
  logoSrc: string
}

export const useBrandStore = defineStore('brand-store', () => {
  const brands = ref<Brand[]>([
    {
      label: 'WAP',
      value: 'wap',
      fullName: 'WAP Limpeza',
      gradientColor: 'from-primary-300',
      textColor: 'text-primary',
      bgColor: 'bg-black',
      logoSrc: '/images/brands/wap_300x300.png',
    },
    {
      label: 'Vonder',
      value: 'vonder',
      fullName: 'Vonder',
      gradientColor: 'from-yellow-100',
      textColor: 'text-yellow-500',
      bgColor: 'bg-yellow-500',
      logoSrc: '/images/brands/vonder_300x300.png',
    },
    {
      label: 'NWX',
      value: 'nwx',
      fullName: 'NWX',
      gradientColor: 'from-blue-300',
      textColor: 'text-blue-500',
      bgColor: 'bg-blue-500',
      logoSrc: '/images/brands/nwx_300x300.png',
    },
    {
      label: 'Selene',
      value: 'selene',
      fullName: 'Selene',
      gradientColor: 'from-rose-300',
      textColor: 'text-rose-400',
      bgColor: 'bg-rose-400',
      logoSrc: '/images/brands/selene_300x300.png',
    },
    {
      label: 'Alhe',
      value: 'alhe',
      fullName: 'Alhe Cosméticos',
      gradientColor: 'from-stone-300',
      textColor: 'text-stone-400',
      bgColor: 'bg-stone-400',
      logoSrc: '/images/brands/alhe_300x300.png',
    },
  ])

  const getBrand = (value: string) => {
    return brands.value.find((brand) => brand.value === value)
  }

  return { brands, getBrand }
})
