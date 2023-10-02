import './assets/main.css'
import 'vue3-toastify/dist/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { defaultConfig, plugin } from '@formkit/vue'
import Vue3Toasity, { type ToastContainerOptions } from 'vue3-toastify'
const app = createApp(App)

app.use(router)
app.use(plugin, defaultConfig)
app.use(Vue3Toasity, { autoClose: 2000 } as ToastContainerOptions)
app.mount('#app')
