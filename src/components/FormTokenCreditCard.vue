<template>
    <div class=" flex justify-center items-center h-[calc(100%-88px)]  bg-[#00a19b] ">
        <div class="w-12/12  md:w-4/12 max-w-2xl">

            <h4 class="text-3xl text-light-100 mb-5 text-center font-bold">Crear Token de Tarjeta</h4>
            <div class="p-10 rounded-md shadow-md bg-white">

                <div class="mb-6">
                    <label class="block mb-3 text-gray-600" for="">Correo</label>
                    <input type="email" autocomplete="off"
                        class="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-wider" />
                </div>
                <div class="mb-6">
                    <label class="block mb-3 text-gray-600" for="">Numero de Tarjeta</label>
                    <input type="tel" autocomplete="off"
                        class="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest" />
                </div>
                <div class="mb-6 flex flex-wrap -mx-3w-full">
                    <div class="w-2/3 pr-1">
                        <label class="block mb-3 text-gray-600" for="">Fecha de expiración</label>
                        <div class="flex">
                            <select
                                class="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest mr-6">
                                <option value disabled selected>Mes</option>
                                <option></option>
                            </select>
                            <select
                                class="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest">
                                <option value disabled selected>Año</option>
                                <option></option>
                            </select>
                        </div>
                    </div>
                    <div class="w-1/3 pl-1">
                        <label class="block mb-3 text-gray-600" for="">CVC</label>
                        <input type="tel"
                            class="border border-gray-500 rounded-md inline-block py-[6px] px-3 w-full text-gray-600 tracking-widest" />
                    </div>
                </div>

                <div>
                    <button
                        class="w-full text-ceenter px-4 py-3  rounded-md shadow-md text-white font-semibold bg-[#00a19b]">
                        Generar Token
                    </button>
                </div>
                <div class="mt-4" v-if="false">
                    <p>Token Generado</p>
                    <p>0ae8dW2FpEAZlxlz</p>
                </div>
            </div>
        </div>
    </div>
</template>


  
<script lang="ts" setup>



</script>
  