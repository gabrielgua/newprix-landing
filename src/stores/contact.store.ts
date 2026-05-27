import { defineStore } from 'pinia'
import { http } from '@/services/http'
import { reactive, ref } from 'vue'

export const CONTACT_SUBJECT_OPTIONS = [
  {
    label: 'Dúvida sobre o Produto',
    value: 'duvida',
  },
  {
    label: 'Problema com Pedido',
    value: 'pedido',
  },
  {
    label: 'Seja um Parceiro (B2B)',
    value: 'parceria',
  },
  {
    label: 'Outro assunto',
    value: 'outro',
  },
]

export type ContactForm = {
  name: string
  email: string
  subject: string
  message: string
}

export const useContactStore = defineStore('contact', () => {
  const response = ref<{
    name: string
    fromEmail: string
    timestamp: Date
  }>()

  const form = ref<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const state = reactive({ submitting: false, submitted: false, error: false })
  const submit = () => {
    const selectedSubject = CONTACT_SUBJECT_OPTIONS.find(
      (option) => option.value === form.value.subject,
    )

    state.submitting = true
    http
      .post('/emails', {
        name: form.value.name,
        email: form.value.email,
        subject: selectedSubject?.label || form.value.subject || 'No Subject',
        message: form.value.message,
      })
      .then((res) => {
        response.value = res.data
        state.submitted = true
      })
      .catch((error) => {
        console.error('Error sending email:', error)
        state.error = true
      })
      .finally(() => {
        state.submitting = false
        resetForm()
      })
  }

  const reset = () => {
    state.error = false
    state.submitted = false
    state.submitting = false
    resetForm()
  }

  const resetForm = () => {
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: '',
    }
  }

  return { state, submit, form, reset, CONTACT_SUBJECT_OPTIONS, response }
})
