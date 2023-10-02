<script setup lang="ts">
import RocketIcon from '@/components/icons/iconRocket.vue'
import HandsIcon from '@/components/icons/iconHand.vue'
import CulqiLogo from '@/components/icons/culqiLogo.vue'
import FormLogin from '@/components/FormLogin.vue'
</script>

<template>
  <main class="relative grid min-h-screen place-items-center bg-dark-500">
    <div class="hidden sm:block">
      <RocketIcon />
      <HandsIcon />
    </div>
    <div class="absolute">
      <div
        class="flex h-screen w-screen flex-col p-4 sm:h-auto sm:w-[28rem] sm:bg-white sm:p-10 rounded-md"
      >
        <div class="mb-16 flex justify-center sm:mb-6">
          <CulqiLogo />
        </div>
        <h1 class="mb-10 hidden text-center text-3xl sm:mb-6 sm:block">
          <span>¡Bienvenido al Culqi</span>
        </h1>

        <FormLogin />
      </div>
    </div>
  </main>
</template>
