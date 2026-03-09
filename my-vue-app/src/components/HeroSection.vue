<template>
  <section class="relative w-full h-[80vh] overflow-hidden">

    <!-- Desktop Video (hidden on small screens) -->
    <video 
      autoplay 
      muted 
      loop 
      class="absolute w-full h-full object-cover hidden md:block"
    >
      <source src="../assets/desc-banner-video.mp4" type="video/mp4">
    </video>

    <!-- Mobile Image (shown only on small screens) -->
    <img 
      src="../assets/mob-banner.jpg" 
      alt="Banner Image" 
      class="absolute w-full h-full object-cover block md:hidden"
    />

    <!-- Optional overlay content -->
    <div class="absolute inset-0 flex items-center justify-center">
      <!-- Add your text or buttons here -->
    </div>

  </section>
</template>