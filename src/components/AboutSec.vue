<script setup>
import SliderPage from './SliderPage.vue';
</script>

<template>
  <div class="bg-[#627254] mt-10 px-4 sm:px-6 lg:px-12 ">
    <div class="grid grid-cols-1 md:grid-cols-2 items-center text-white gap-8 m-4">

      <!-- Left Section -->
      <div class="flex flex-col items-center text-center gap-4">
        <img src="../assets/other-image-07.png" alt="" class="w-20 sm:w-24 md:w-28">

        <h1 class="text-xl sm:text-2xl md:text-3xl font-semibold">
          Simple and Effective Personal Care
        </h1>

        <p class="max-w-full sm:max-w-md">
          By Praba Reddy are crafted to fit into real routines by helping you care
          for your skin and hair naturally, without harsh chemicals or complicated steps.
        </p>

        <button class="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-200 transition">
          Shop now
        </button>
      </div>

      <!-- Slider Section -->
      <SliderPage />

    </div>
  </div>
</template>