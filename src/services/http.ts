import axios from 'axios'

export const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
})

http.interceptors.request.use((config) => {
  const apiKey = import.meta.env.VITE_API_KEY
  if (apiKey) {
    config.headers['x-api-key'] = apiKey
  }
  return config
})
