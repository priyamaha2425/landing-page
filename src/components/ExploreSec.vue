<template>
  <section>


  <div class="bg-[#e7f0dd] mt-20 relative h-auto md:h-[800px]">

    <!-- Right Image + Text -->
    <div class="absolute md:right-20 md:-top-10 w-full md:w-[520px] flex flex-col md:block px-4 md:px-0">

      <!-- Image -->
      <div class="group overflow-hidden rounded-xl shadow-lg relative">
        <img
          src="../assets/home-product-02.jpg"
          class="w-full h-64 sm:h-80 md:h-full object-cover transition duration-500 group-hover:scale-110"
        />

        <!-- Hover Content -->
        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">

          <!-- Dark Overlay -->
          <div class="absolute inset-0 bg-black/40"></div>

          <!-- Animated Border -->
          <div class="absolute inset-6 border-2 border-white scale-75 opacity-0 
                      group-hover:scale-100 group-hover:opacity-100 
                      transition-all duration-500"></div>

          <!-- Content -->
          <div class="relative text-center text-white px-4">
            <h2 class="text-xl font-semibold mb-2">Reveal Your Natural Glow</h2>
            <span class="text-sm">Gently removes tan and impurities for brighter, refreshed skin.</span>
            <div class="mt-4">
              <button class="px-4 py-2 bg-white text-black rounded-md hover:bg-[#627254] hover:text-white hover:border-0">
                Explore More
              </button>
            </div>
          </div>

        </div>
      </div>

      <!-- Text Below Image -->
      <div class="mt-6 text-center md:text-center">
        <h2 class="text-2xl md:text-3xl font-semibold">Herbal Detan Face Wash Powder</h2>
        <p class="text-gray-600 text-sm sm:text-base">The Outset is where you begin again.</p>
        <button class="mt-4 w-full md:w-[500px] h-[50px] px-4 py-2 bg-white text-black rounded-md hover:bg-[#627254] hover:text-white hover:border-0 transition">
          Shop Now
        </button>
      </div>

    </div>

    <!-- Left Bottom Section -->
    <div class="absolute md:left-20 md:-bottom-10 w-full md:w-[520px] flex flex-col md:block px-4 md:px-0 mt-20 md:mt-0">

      <!-- Text On Top -->
      <div class="mb-4 text-center md:text-center">
        <h2 class="text-2xl md:text-3xl font-semibold">Herbal Detan Body Bath Powder</h2>
        <p class="text-gray-600 text-sm sm:text-base">Refresh your skin with nature’s gentle care.</p>
      </div>

      <!-- Image -->
      <div class="group overflow-hidden rounded-xl shadow-lg relative">
        <img
          src="../assets/home-product-01.jpeg"
          class="w-full h-64 sm:h-80 md:h-full object-cover transition duration-500 group-hover:scale-110"
        />

        <!-- Hover Content -->
        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">

          <!-- Dark Overlay -->
          <div class="absolute inset-0 bg-black/40"></div>

          <!-- Animated Border -->
          <div class="absolute inset-6 border-2 border-white scale-75 opacity-0 
                      group-hover:scale-100 group-hover:opacity-100 
                      transition-all duration-500"></div>

          <!-- Content -->
          <div class="relative text-center text-white px-4">
           <h2 class="text-lg font-semibold mb-2">Pure Herbal Cleanse</h2>
            <span class="text-sm">Refresh your body with nature’s gentle touch.</span>
            <div class="mt-4">
              <button class="px-4 py-2 bg-white text-black rounded-md hover:bg-[#627254] hover:text-white hover:border-0">
                Explore More
              </button>
              </div>
          </div>

        </div>
      </div>

    </div>

  </div>
    </section>
</template>