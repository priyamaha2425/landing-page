<template>
    <section class="relative w-full h-screen overflow-hidden">

        <!-- Video Background -->
        <video autoplay muted loop playsinline class="absolute top-0 left-0 w-full h-full object-fill">
            <source src="../assets/desc-banner-video.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <div>

            <!-- Hamburger Button (Mobile Only) -->
            <button @click="isOpen = !isOpen" class="fixed top-6 left-6 z-50 p-3 bg-white rounded-md shadow-md ">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
    
            <!-- Right Icons -->
            <div class="fixed top-6 right-6 z-50 flex items-center gap-4">
                <!-- Profile Icon -->
              
                 <div class="relative">
                    <button class="bg-white p-3 shadow-md relative">
                        <i class="fa-solid fa-user"></i>
                        <span
                            class="absolute -top-1 -right-1  text-white text-xs w-4 h-4 flex items-center justify-center rounded-full"></span>
                    </button>
    
                </div>
    
                <!-- Favorites Icon -->
                <div class="relative">
                    <button class="bg-white p-3 shadow-md relative">
                        <i class="fa-solid fa-heart"></i>
                        <span
                            class="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">{{
                                favCount }}</span>
                    </button>
    
                </div>
    
                <!-- Cart Icon -->
                <div class="relative">
                    <button class="bg-white p-3  shadow-md relative">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span
                            class="absolute -top-1 -right-1 bg-green-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">{{
                                cartCount }}</span>
                    </button>
    
                </div>
            </div>
        </div>

        <!-- Off-Canvas Menu -->
        <transition name="slide-left">
            <div v-if="isOpen" class="fixed inset-0 z-40 flex justify-start bg-black bg-opacity-50"
                @click.self="isOpen = false">
                <div class="w-64 h-full bg-white shadow-lg p-6 flex flex-col gap-6">
                    <!-- Close Button -->
                    <button @click="isOpen = false" class="self-end text-xl text-gray-500 hover:text-black transition">
                        ✕
                    </button>

                    <!-- Menu Items -->
                    <nav class="flex flex-col gap-4 mt-4">
                        <a href="#home"
                            class="flex items-center gap-3 text-gray-800 font-semibold hover:text-green-700 transition">
                            <i class="fa-solid fa-house text-lg"></i>
                            Home
                        </a>
                        <a href="#products"
                            class="flex items-center gap-3 text-gray-800 font-semibold hover:text-green-700 transition">
                            <i class="fa-solid fa-box-open text-lg"></i>
                            All Products
                        </a>
                        <a href="#contact"
                            class="flex items-center gap-3 text-gray-800 font-semibold hover:text-green-700 transition">
                            <i class="fa-solid fa-envelope text-lg"></i>
                            Contact Us
                        </a>
                    </nav>

                    <!-- Optional Footer -->
                    <div class="mt-auto">
                        <p class="text-sm text-gray-500">© 2026 Your Brand</p>
                    </div>
                </div>
            </div>
        </transition>

    </section>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
const favCount = ref(2)
const cartCount = ref(3)


</script>

<style>
/* Off-Canvas Slide-In From Left */
.slide-left-enter-active,
.slide-left-leave-active {
    transition: transform 0.3s ease;
}

.slide-left-enter-from,
.slide-left-leave-to {
    transform: translateX(-100%);
}

.slide-left-enter-to,
.slide-left-leave-from {
    transform: translateX(0%);
}
</style>