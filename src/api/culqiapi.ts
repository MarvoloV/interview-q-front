import axios from 'axios'

export const culqiApi = axios.create({ baseURL: import.meta.env.VITE_URL_API })
