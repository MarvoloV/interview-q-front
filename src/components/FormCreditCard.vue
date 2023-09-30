<template>
    <div class=" flex justify-center items-center h-[calc(100%-88px)]  bg-[#00a19b] ">
        <div class="w-12/12  md:w-4/12 max-w-2xl">
            <h4 class="text-5xl text-light-100 mb-5 text-center font-bold">Obtener datos de Tarjeta</h4>
            <div class="p-10 rounded-md shadow-md bg-white">

                <div class="mb-6">
                    <label class="block mb-3 text-gray-900 text-3xl font-bold" for="">Token de la Tarjeta</label>
                    <input type="text" autocomplete="off"
                        class="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-wider text-xl" />
                </div>
                <div>
                    <button
                        class="w-full text-center text-2xl px-4 py-3  rounded-md shadow-md text-white font-semibold bg-primary-300 hover:bg-purple-800">
                        Obtener datos
                    </button>
                </div>
                <div class="mt-4 border-orange-500 border-2 der rounded-xl" v-if="true">
                    <p class="border-b-2 border-orange-500 p-5 text-3xl font-semibold">Datos de la tarjeta</p>
                    <div class="p-5 pt-1">
                        <ul class="flex flex-col">
                            <li class="py-3 text-2xl font-semibold">
                                Correo:
                            </li>
                            <li class="py-3 text-2xl font-semibold">Numero de Tarjeta:</li>
                            <li class="py-3 text-2xl font-semibold">Fecha de Expiración</li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


  
<script lang="ts" setup>



</script>
  