<template>
  <form class="p-10 rounded-md shadow-md bg-white" @submit.prevent="createTokenCard">
    <div class="mb-6">
      <label class="block mb-3 text-gray-600" for="">Correo</label>
      <input type="email" required v-model="formCreditToken.email"
        class="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-wider" />
    </div>
    <div class="mb-6">
      <label class="block mb-3 text-gray-600" for="">Numero de Tarjeta</label>
      <input type="tel" maxlength="16" required v-model="formCreditToken.card_number"
        class="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest" />
    </div>
    <div class="mb-6 flex flex-wrap -mx-3w-full">
      <div class="w-2/3 pr-1">
        <label class="block mb-3 text-gray-600" for="">Fecha de expiración</label>
        <div class="flex">
          <select
            class="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest mr-6"
            v-model="formCreditToken.expiration_month" required>
            <option value disabled selected>Mes</option>
            <option :value="n < 10 ? '0' + n : n" v-for="n in 12" :disabled="n < minCardMonth" :key="n">
              {{ generateMonthValue(n) }}
            </option>
          </select>
          <select class="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest"
            required v-model="formCreditToken.expiration_year">
            <option value disabled selected>Año</option>
            <option :value="$index + minCardYear" v-for="(n, $index) in 5" :key="n">
              {{ $index + minCardYear }}
            </option>
          </select>
        </div>
      </div>
      <div class="w-1/3 pl-1">
        <label class="block mb-3 text-gray-600" for="">CVC</label>
        <input type="tel" maxlength="4" required v-model="formCreditToken.cvv"
          class="border border-gray-500 rounded-md inline-block py-[6px] px-3 w-full text-gray-600 tracking-widest" />
      </div>
    </div>

    <div>
      <button
        class="w-full text-ceenter px-4 py-3 rounded-md shadow-md text-white font-semibold bg-[#00a19b] disabled:bg-gray-500"
        :disabled="tokenCardService.getLoading().value" type="submit">
        <span v-if="tokenCardService.getLoading().value"> Procesando... </span>
        <span v-else>Generar Token</span>
      </button>
    </div>
    <div class="flex flex-col mt-5">
      <!-- {{ errors }} -->
      <p v-for="key in errors" :key="key" class="text-red-700 font-semibold text-lg">
        * {{ key.message }}
      </p>
    </div>
    <div class="mt-4" v-if="tokenId">
      <p class="text-3xl text-center pt-2 font-semibold text-orange-600">Token Generado</p>
      <p class="text-2xl text-center font-bold">{{ tokenId }}</p>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { computed, ref, type Ref } from 'vue'
import { TokenCardService } from '../services/TokenCardService'

let formCreditToken = ref({
  email: '',
  card_number: '',
  expiration_month: '',
  expiration_year: '',
  cvv: ''
})
let tokenId: Ref<string> = ref('')
let errors = ref()
const minCardYear = ref(new Date().getFullYear())
const tokenCardService = new TokenCardService()
const generateMonthValue = (n: number) => {
  return n < 10 ? `0${n}` : n
}
const minCardMonth = computed(() => {
  if (Number(formCreditToken.value.expiration_year) === minCardYear.value)
    return new Date().getMonth() + 1
  return 1
})
const createTokenCard = async () => {
  const response = await tokenCardService.createToken(formCreditToken.value)
  if (!response) {
    errors.value = tokenCardService.getErrors().value
    return
  }
  tokenId.value = response.token
}
</script>
