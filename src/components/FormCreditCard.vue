<template>
  <div class="flex justify-center items-center h-[calc(100%-88px)] bg-[#00a19b]">
    <div class="w-11/12 md:w-9/12 max-w-xl">
      <h4 class="text-5xl text-light-100 mb-5 text-center font-bold">Obtener datos de Tarjeta</h4>
      <form class="p-10 rounded-md shadow-md bg-white" @submit.prevent="getTokenId">
        <div class="mb-6">
          <label class="block mb-3 text-gray-900 text-3xl font-bold" for=""
            >Token de la Tarjeta</label
          >
          <input
            type="text"
            autocomplete="off"
            v-model="tokenId"
            required
            class="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-wider text-xl"
          />
        </div>
        <div>
          <button
            :disabled="tokenCardService.getLoading().value"
            type="submit"
            class="w-full text-center text-2xl px-4 py-3 rounded-md shadow-md text-white font-semibold bg-[#00a19b] hover:bg-emerald-500 disabled:bg-gray-500"
          >
            <span v-if="tokenCardService.getLoading().value"> Procesando... </span>
            <span v-else>Obtener datos</span>
          </button>
        </div>
        <div class="mt-4 border-orange-500 border-2 der rounded-xl" v-if="true">
          <p class="border-b-2 border-orange-500 p-5 text-3xl font-semibold text-center">
            Datos de la tarjeta
          </p>
          <div class="p-5 pt-1">
            <ul class="flex flex-col">
              <li class="py-3 text-2xl font-semibold">
                Correo: <span class="text-2xl font-normal">{{ creditCard?.email }}</span>
              </li>
              <li class="py-3 text-2xl font-semibold">
                Numero de Tarjeta:
                <span class="text-2xl font-normal">{{ creditCard?.card_number }}</span>
              </li>
              <li class="py-3 text-2xl font-semibold">
                Fecha de Expiración:
                <span class="text-2xl font-normal" v-if="creditCard"
                  >{{ creditCard?.expiration_month }}/ {{ creditCard?.expiration_year }}</span
                >
              </li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { TokenCardService } from '../services/TokenCardService'
import type { GetTokenResponse, TokenCard } from '@/interfaces/GetTokenResponse'
import type { Ref } from 'vue'
import { notify } from '../utils/toast'

let tokenId = ref('')
let creditCard: Ref<TokenCard | null> = ref(null)
const tokenCardService = new TokenCardService()
const getTokenId = async () => {
  creditCard.value = null
  const response: GetTokenResponse = await tokenCardService.getCreditCardDataByToken(tokenId.value)
  if (!response) {
    const errors = tokenCardService.getErrors().value as string
    notify(errors, 'error')
    return
  }
  creditCard.value = response.tokenCard
}
</script>
