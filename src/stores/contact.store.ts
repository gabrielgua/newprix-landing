import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export type ContactForm = {
  name: string
  email: string
  subject: string
  message: string
}

export const useContactStore = defineStore('contact', () => {
  const form = ref<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const state = reactive({ submitting: false, submitted: false, error: false })
  const submit = () => {
    state.submitting = true
    setTimeout(() => {
      state.submitted = true
      state.submitting = false

      console.log(form.value)
    }, 500)
  }

  return { state, submit, form }
})
