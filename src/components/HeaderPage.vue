<template>

<header class="bg-white shadow-md">
  

  <nav class="max-w-7xl mx-auto grid grid-cols-3 items-center px-4 ">

    <!-- Mobile Menu Button -->
    <div class="md:hidden">
      <button @click="menuOpen = !menuOpen">
        <i class="fa-solid fa-bars text-xl"></i>
      </button>
    </div>

    <!-- Left Menu (Desktop) -->
    <div class="hidden md:flex gap-10">

      <a href="#" class="menu-link">
        Home
      </a>

      <a href="#" class="menu-link">
        All Products
      </a>

      <a href="#" class="menu-link">
        Contact Us
      </a>

    </div>

    <!-- Logo -->
    <div class="flex justify-center">
      <img src="../assets/logo.png" class="w-28 md:w-32" alt="logo">
    </div>

    <!-- Right Icons -->
    <div class="flex justify-end items-center gap-6">

      <!-- Profile -->
      <i
        class="fa-solid fa-circle-user text-xl cursor-pointer hover:text-green-600 transition"
      ></i>

      <!-- Wishlist -->
      <div class="relative cursor-pointer">
        <i
          class="fa-solid fa-heart text-xl hover:text-red-500 transition"
        ></i>

        <span
          v-if="wishlistCount > 0"
          class="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"
        >
          {{ wishlistCount }}
        </span>
      </div>

      <!-- Cart -->
      <div class="relative cursor-pointer">
        <i
          class="fa-solid fa-bag-shopping text-xl hover:text-blue-500 transition"
        ></i>

        <span
          v-if="cartCount > 0"
          class="absolute -top-2 -right-2 bg-blue-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"
        >
          {{ cartCount }}
        </span>
      </div>

    </div>

  </nav>


  <!-- Mobile Menu -->
  <div
    v-if="menuOpen"
    class="md:hidden bg-white border-t px-6 py-4 space-y-4"
  >
    <a href="#" class="block menu-link">Home</a>
    <a href="#" class="block menu-link">All Products</a>
    <a href="#" class="block menu-link">Contact Us</a>
  </div>

</header>

</template>



<script>
export default {

  data(){
    return{
      menuOpen:false,
      cartCount:2,
      wishlistCount:3
    }
  }

}
</script>



<style>

.menu-link {
  position: relative;
  font-weight: 500;
  color: #374151;
  transition: color 0.3s;
}

.menu-link::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -4px;
  width: 0%;
  height: 3px;
  background: linear-gradient(90deg, #facc15, #22c55e);
  border-radius: 2px;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.menu-link:hover::after {
  width: 100%;
}

.menu-link:hover {
  color: #16a34a;
}
</style>