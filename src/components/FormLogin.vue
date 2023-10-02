<template>
  <form class="w-full">
    <div class="mb-6">
      <div class="flex flex-col text-light-100" inputmode="email">
        <label class="mb-1 text-micro font-medium text-plate-400">Correo</label>
        <div class="relative block">
          <input
            inputmode="email"
            class="text-dark-400 py-3 px-4 rounded w-full border font-normal h-12 text-xl bg-light-200 placeholder:text-light-500 hover:border-light-400 focus:border-primary-300 border-light-200"
            type="email"
            placeholder="ejemplo@culqi.com"
            v-model="email"
          />
        </div>
      </div>
    </div>
    <div class="mb-6">
      <div class="flex flex-col">
        <label class="mb-1 text-micro font-medium text-plate-400"> Contraseña </label>
        <div class="relative block">
          <input
            enterkeyhint="enter"
            type="password"
            placeholder="••••••••••"
            class="py-3 px-4 rounded w-full border font-normal h-12 text-xl bg-light-200 placeholder:text-light-500 text-plate-400 border-light-200 hover:border-light-400 focus:border-primary-300"
            v-model="password"
          />
          <div class="absolute right-4 top-2/4 -translate-y-1/2 text-primary-300"></div>

          <button type="button" class="absolute right-4 top-2/4 -translate-y-1/2 text-primary-300">
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.0001 4.79181C7.10007 4.79181 4.46115 6.94072 2.84453 8.64163C2.10749 9.4171 2.10749 10.5832 2.84453 11.3587C4.46115 13.0596 7.10007 15.2085 10.0001 15.2085C12.9001 15.2085 15.539 13.0596 17.1556 11.3587C17.8927 10.5832 17.8927 9.4171 17.1556 8.64163C15.539 6.94072 12.9001 4.79181 10.0001 4.79181ZM1.93848 7.78048C3.5815 6.05179 6.5409 3.54181 10.0001 3.54181C13.4593 3.54181 16.4187 6.05179 18.0617 7.78048C19.2573 9.03847 19.2573 10.9618 18.0617 12.2198C16.4187 13.9485 13.4593 16.4585 10.0001 16.4585C6.5409 16.4585 3.5815 13.9485 1.93848 12.2198C0.742838 10.9618 0.742838 9.03847 1.93848 7.78048ZM10.0001 8.12514C8.96455 8.12514 8.12508 8.96461 8.12508 10.0001C8.12508 11.0357 8.96455 11.8751 10.0001 11.8751C11.0356 11.8751 11.8751 11.0357 11.8751 10.0001C11.8751 8.96461 11.0356 8.12514 10.0001 8.12514ZM6.87508 10.0001C6.87508 8.27425 8.27419 6.87514 10.0001 6.87514C11.726 6.87514 13.1251 8.27425 13.1251 10.0001C13.1251 11.726 11.726 13.1251 10.0001 13.1251C8.27419 13.1251 6.87508 11.726 6.87508 10.0001Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>

    <div class="mb-6">
      <button
        type="submit"
        :disabled="auth.getIsLoading().value"
        class="box-border inline-flex min-w-min items-center justify-center rounded-3xl border-[1px] font-normal leading-tight no-underline transition-colors duration-200 ease-in-out bg-primary-300 text-white border-primary-300 hover:bg-primary-400 hover:border-primary-400 focus:border-primary-200 active:bg-primary-400 active:border-primary-200 disabled:bg-light-300 disabled:border-light-300 text-xl px-[20px] py-[15px] gap-nano w-full disabled:bg-gray-500"
        @click.prevent="authUser"
      >
        <span v-if="auth.getIsLoading().value"> Procesando... </span>
        <span v-else>Iniciar sesión</span>
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AuthService from '../services/AuthService'

import { useRouter } from 'vue-router'
import { notify } from '../utils/toast'

let email = ref('')
let password = ref('')
const router = useRouter()
const auth = new AuthService()
const authUser = async () => {
  const success = await auth.login(email.value, password.value)

  if (success) {
    notify('Login Exitoso', 'success')
    setTimeout(() => {
      router.replace({ name: 'tokenCard', replace: true })
    }, 2000)
  } else {
    notify(auth.getError().value, 'error')
  }
}
</script>
