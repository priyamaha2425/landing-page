<script setup>
import HeaderPage from './HeaderPage.vue';
import HeroSection from './HeroSection.vue';
import FeaturedProduct from './FeaturedProduct.vue';
import AboutSec from './AboutSec.vue';
import ExploreSec from './ExploreSec.vue';
import FooterPage from './FooterPage.vue';
import CategorySec from './CategorySec.vue';
</script>

<template>
  <div class="bg-gradient-to-r from-green-900 to-green-500 text-white text-center text-base font-medium cursor-pointer overflow-hidden">
    
    <span class="inline-block py-2 animate-scroll">
      ✨ Explore Our Ayurvedic Collection – Natural Care for Skin & Hair 🌿
    </span>

  </div>

  <HeaderPage />
  <HeroSection />
  <FeaturedProduct />
  <AboutSec />
  <CategorySec />
  <ExploreSec />
  <FooterPage />
</template>

<style>
@keyframes scrollText{
  from{transform:translateX(100%);}
  to{transform:translateX(-100%);}
}

.animate-scroll{
  animation: scrollText 12s linear infinite;
}
</style>
