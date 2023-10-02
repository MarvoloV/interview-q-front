import { toast, type ToastType } from 'vue3-toastify'

export const notify = (message: string, type: ToastType) => {
  toast(message, {
    autoClose: 1000,
    type: type,
    theme: 'dark'
  }) // ToastOptions
}
