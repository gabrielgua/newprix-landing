import { watch, type Ref } from 'vue'

export const useScrollLock = (locked: Ref<boolean>) => {
  watch(
    locked,
    (newVal) => {
      document.body.style.overflow = newVal ? 'hidden' : ''
    },
    { immediate: true },
  )
}
