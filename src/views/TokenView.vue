<template>
  <HeaderComponent />
  <div class="flex justify-center items-center h-[calc(100%-88px)] bg-[#00a19b]">
    <div class="w-11/12 md:w-9/12 max-w-xl">
      <h4 class="text-3xl text-light-100 mb-5 text-center font-bold">Crear Token de Tarjeta</h4>
      <FormTokenCreditCard />
    </div>
  </div>
</template>

<script lang="ts" setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FormTokenCreditCard from '@/components/FormToken.vue'
</script>
