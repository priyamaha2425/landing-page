<template>
  <section class="mt-12 px-4 sm:px-6 lg:px-12">

    <!-- Section Header -->
    <div class="text-center mb-12">
      <p class="uppercase tracking-widest text-gray-500 mb-2">Featured Products</p>
      <h2 class="text-3xl sm:text-4xl font-normal">Our Featured Products</h2>
    </div>

    <!-- Product Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center mx-6 py-20 gap-8">

      <!-- Product Card 1 -->
      <article class="card__article">
        <img src="../assets/herbal-detan-bath-body-powder.webp" alt="image"
          class="card__img w-full max-w-xs sm:max-w-sm lg:max-w-md">

        <div class="card__data">
          <span class="card_price font-bold">₹ 800.00 </span>
          <span class="card__title">Herbal Detan Face Wash Powder</span>

        <div class="flex justify-center space-x-2">
                            <div class="flex ">
                                <!-- Filled Star -->
                                <svg class="w-4 h-4 text-amber-300 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 
                    1 0 00.95.69h4.162c.969 0 1.371 1.24.588 
                    1.81l-3.37 2.449a1 1 0 00-.364 
                    1.118l1.287 3.955c.3.921-.755 
                    1.688-1.54 1.118l-3.37-2.449a1 
                    1 0 00-1.175 0l-3.37 2.449c-.784.57-1.838-.197-1.539-1.118l1.287-3.955a1 
                    1 0 00-.364-1.118L2.025 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 
                    1 0 00.95-.69l1.286-3.955z" />
                                </svg>
                                <svg class="w-4 h-4 text-amber-300 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 
                    1 0 00.95.69h4.162c.969 0 1.371 1.24.588 
                    1.81l-3.37 2.449a1 1 0 00-.364 
                    1.118l1.287 3.955c.3.921-.755 
                    1.688-1.54 1.118l-3.37-2.449a1 
                    1 0 00-1.175 0l-3.37 2.449c-.784.57-1.838-.197-1.539-1.118l1.287-3.955a1 
                    1 0 00-.364-1.118L2.025 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 
                    1 0 00.95-.69l1.286-3.955z" />
                                </svg>
                                <svg class="w-4 h-4 text-amber-300 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 
                    1 0 00.95.69h4.162c.969 0 1.371 1.24.588 
                    1.81l-3.37 2.449a1 1 0 00-.364 
                    1.118l1.287 3.955c.3.921-.755 
                    1.688-1.54 1.118l-3.37-2.449a1 
                    1 0 00-1.175 0l-3.37 2.449c-.784.57-1.838-.197-1.539-1.118l1.287-3.955a1 
                    1 0 00-.364-1.118L2.025 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 
                    1 0 00.95-.69l1.286-3.955z" />
                                </svg>
                                <svg class="w-4 h-4 text-amber-300 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 
                    1 0 00.95.69h4.162c.969 0 1.371 1.24.588 
                    1.81l-3.37 2.449a1 1 0 00-.364 
                    1.118l1.287 3.955c.3.921-.755 
                    1.688-1.54 1.118l-3.37-2.449a1 
                    1 0 00-1.175 0l-3.37 2.449c-.784.57-1.838-.197-1.539-1.118l1.287-3.955a1 
                    1 0 00-.364-1.118L2.025 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 
                    1 0 00.95-.69l1.286-3.955z" />
                                </svg>

                                <!-- Empty Star -->
                                <svg class="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 
                    1 0 00.95.69h4.162c.969 0 1.371 1.24.588 
                    1.81l-3.37 2.449a1 1 0 00-.364 
                    1.118l1.287 3.955c.3.921-.755 
                    1.688-1.54 1.118l-3.37-2.449a1 
                    1 0 00-1.175 0l-3.37 2.449c-.784.57-1.838-.197-1.539-1.118l1.287-3.955a1 
                    1 0 00-.364-1.118L2.025 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 
                    1 0 00.95-.69l1.286-3.955z" />
                                </svg>
                            </div>

                            <!-- Reviews -->
                            <span class="text-gray-500  text-xs">40 reviews</span>
                        </div>

          <div class="flex justify-center gap-4 m-4">
            <span
              class="flex items-center justify-center border-2 border-black w-10 h-10 rounded-full text-black hover:text-red-500 cursor-pointer transition-colors duration-200"
              v-tippy="'Add to Wishlist'">
              <i class="fa-solid fa-heart"></i>
            </span>

            <span
              class="flex items-center justify-center border-2 border-black w-10 h-10 rounded-full text-black hover:text-blue-500 cursor-pointer transition-colors duration-200"
              v-tippy="'Add to Cart'">
              <i class="fa-solid fa-bag-shopping"></i>
            </span>
          </div>
        </div>
      </article>

      <!-- Product Card 2 -->
      <article class="card__article">
        <img src="../assets/herbal-detan-face-wash-powder.webp" alt="image"
          class="card__img w-full max-w-xs sm:max-w-sm lg:max-w-md">

        <div class="card__data">
          <span class="card_price font-bold">₹ 1000.00</span>
          <span class="card__title">Herbal Detan Bath Body Powder</span>

        <div class="flex justify-center space-x-2">
                            <div class="flex ">
                                <!-- Filled Star -->
                                <svg class="w-4 h-4 text-amber-300 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 
                    1 0 00.95.69h4.162c.969 0 1.371 1.24.588 
                    1.81l-3.37 2.449a1 1 0 00-.364 
                    1.118l1.287 3.955c.3.921-.755 
                    1.688-1.54 1.118l-3.37-2.449a1 
                    1 0 00-1.175 0l-3.37 2.449c-.784.57-1.838-.197-1.539-1.118l1.287-3.955a1 
                    1 0 00-.364-1.118L2.025 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 
                    1 0 00.95-.69l1.286-3.955z" />
                                </svg>
                                <svg class="w-4 h-4 text-amber-300 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 
                    1 0 00.95.69h4.162c.969 0 1.371 1.24.588 
                    1.81l-3.37 2.449a1 1 0 00-.364 
                    1.118l1.287 3.955c.3.921-.755 
                    1.688-1.54 1.118l-3.37-2.449a1 
                    1 0 00-1.175 0l-3.37 2.449c-.784.57-1.838-.197-1.539-1.118l1.287-3.955a1 
                    1 0 00-.364-1.118L2.025 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 
                    1 0 00.95-.69l1.286-3.955z" />
                                </svg>
                                <svg class="w-4 h-4 text-amber-300 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 
                    1 0 00.95.69h4.162c.969 0 1.371 1.24.588 
                    1.81l-3.37 2.449a1 1 0 00-.364 
                    1.118l1.287 3.955c.3.921-.755 
                    1.688-1.54 1.118l-3.37-2.449a1 
                    1 0 00-1.175 0l-3.37 2.449c-.784.57-1.838-.197-1.539-1.118l1.287-3.955a1 
                    1 0 00-.364-1.118L2.025 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 
                    1 0 00.95-.69l1.286-3.955z" />
                                </svg>
                                <svg class="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 
                    1 0 00.95.69h4.162c.969 0 1.371 1.24.588 
                    1.81l-3.37 2.449a1 1 0 00-.364 
                    1.118l1.287 3.955c.3.921-.755 
                    1.688-1.54 1.118l-3.37-2.449a1 
                    1 0 00-1.175 0l-3.37 2.449c-.784.57-1.838-.197-1.539-1.118l1.287-3.955a1 
                    1 0 00-.364-1.118L2.025 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 
                    1 0 00.95-.69l1.286-3.955z" />
                                </svg>

                                <!-- Empty Star -->
                                <svg class="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 
                    1 0 00.95.69h4.162c.969 0 1.371 1.24.588 
                    1.81l-3.37 2.449a1 1 0 00-.364 
                    1.118l1.287 3.955c.3.921-.755 
                    1.688-1.54 1.118l-3.37-2.449a1 
                    1 0 00-1.175 0l-3.37 2.449c-.784.57-1.838-.197-1.539-1.118l1.287-3.955a1 
                    1 0 00-.364-1.118L2.025 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 
                    1 0 00.95-.69l1.286-3.955z" />
                                </svg>
                            </div>

                            <!-- Reviews -->
                            <span class="text-gray-500  text-xs">90 reviews</span>
                        </div>

          <div class="flex justify-center gap-4 m-4">
            <span
              class="flex items-center justify-center border-2 border-black w-10 h-10 rounded-full text-black hover:text-red-500 cursor-pointer transition-colors duration-200"
              v-tippy="'Add to Wishlist'">
              <i class="fa-solid fa-heart"></i>
            </span>

            <span
              class="flex items-center justify-center border-2 border-black w-10 h-10 rounded-full text-black hover:text-blue-500 cursor-pointer transition-colors duration-200"
              v-tippy="'Add to Cart'">
              <i class="fa-solid fa-bag-shopping"></i>
            </span>
          </div>
        </div>
      </article>

      <!-- Product Card 3 -->
      <article class="card__article">
        <img src="../assets/kuppaimeni-soap.webp" alt="image" class="card__img w-full max-w-xs sm:max-w-sm lg:max-w-md">

        <div class="card__data">
          <span class="card_price font-bold">₹ 249.00</span>
          <span class="card__title">Kuppaimeni Soap</span>

         <div class="flex justify-center space-x-2">
                            <div class="flex ">
                                <!-- Filled Star -->
                                <svg class="w-4 h-4 text-amber-300 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 
                    1 0 00.95.69h4.162c.969 0 1.371 1.24.588 
                    1.81l-3.37 2.449a1 1 0 00-.364 
                    1.118l1.287 3.955c.3.921-.755 
                    1.688-1.54 1.118l-3.37-2.449a1 
                    1 0 00-1.175 0l-3.37 2.449c-.784.57-1.838-.197-1.539-1.118l1.287-3.955a1 
                    1 0 00-.364-1.118L2.025 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 
                    1 0 00.95-.69l1.286-3.955z" />
                                </svg>
                                <svg class="w-4 h-4 text-amber-300 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 
                    1 0 00.95.69h4.162c.969 0 1.371 1.24.588 
                    1.81l-3.37 2.449a1 1 0 00-.364 
                    1.118l1.287 3.955c.3.921-.755 
                    1.688-1.54 1.118l-3.37-2.449a1 
                    1 0 00-1.175 0l-3.37 2.449c-.784.57-1.838-.197-1.539-1.118l1.287-3.955a1 
                    1 0 00-.364-1.118L2.025 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 
                    1 0 00.95-.69l1.286-3.955z" />
                                </svg>
                                <svg class="w-4 h-4 text-amber-300 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 
                    1 0 00.95.69h4.162c.969 0 1.371 1.24.588 
                    1.81l-3.37 2.449a1 1 0 00-.364 
                    1.118l1.287 3.955c.3.921-.755 
                    1.688-1.54 1.118l-3.37-2.449a1 
                    1 0 00-1.175 0l-3.37 2.449c-.784.57-1.838-.197-1.539-1.118l1.287-3.955a1 
                    1 0 00-.364-1.118L2.025 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 
                    1 0 00.95-.69l1.286-3.955z" />
                                </svg>
                                <svg class="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 
                    1 0 00.95.69h4.162c.969 0 1.371 1.24.588 
                    1.81l-3.37 2.449a1 1 0 00-.364 
                    1.118l1.287 3.955c.3.921-.755 
                    1.688-1.54 1.118l-3.37-2.449a1 
                    1 0 00-1.175 0l-3.37 2.449c-.784.57-1.838-.197-1.539-1.118l1.287-3.955a1 
                    1 0 00-.364-1.118L2.025 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 
                    1 0 00.95-.69l1.286-3.955z" />
                                </svg>

                                <!-- Empty Star -->
                                <svg class="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 
                    1 0 00.95.69h4.162c.969 0 1.371 1.24.588 
                    1.81l-3.37 2.449a1 1 0 00-.364 
                    1.118l1.287 3.955c.3.921-.755 
                    1.688-1.54 1.118l-3.37-2.449a1 
                    1 0 00-1.175 0l-3.37 2.449c-.784.57-1.838-.197-1.539-1.118l1.287-3.955a1 
                    1 0 00-.364-1.118L2.025 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 
                    1 0 00.95-.69l1.286-3.955z" />
                                </svg>
                            </div>

                            <!-- Reviews -->
                            <span class="text-gray-500  text-xs">45 reviews</span>
                        </div>

          <div class="flex justify-center gap-4 m-4">
            <span
              class="flex items-center justify-center border-2 border-black w-10 h-10 rounded-full text-black hover:text-red-500 cursor-pointer transition-colors duration-200"
              v-tippy="'Add to Wishlist'">
              <i class="fa-solid fa-heart"></i>
            </span>

            <span
              class="flex items-center justify-center border-2 border-black w-10 h-10 rounded-full text-black hover:text-blue-500 cursor-pointer transition-colors duration-200"
              v-tippy="'Add to Cart'">
              <i class="fa-solid fa-bag-shopping"></i>
            </span>
          </div>
        </div>
      </article>

    </div>

    <!-- Shop All Button -->
    <div class="flex justify-center mt-8">
      <button
        class="px-4 py-2 bg-white text-black rounded-md hover:bg-[#627254] hover:text-white hover:border-0 border-black">
        Shop All Products
      </button>
    </div>

  </section>
</template>

<script>
export default {
  directives: {
    tippy: {
      mounted(el, binding) {
        tippy(el, { content: binding.value });
      },
    },
  },
};
</script>

<style>
img {
  display: block;
  max-width: 100%;
  height: auto;
}

.card__article {
  position: relative;
  overflow: hidden;
}

.card__img {
  width: 328px;
  border-radius: 1.5rem;
}

.card__data {
  width: 300px;
  background-color: white;
  padding: 0.5rem 1rem;
  box-shadow: 0 8px 24px hsla(0, 0%, 0%, .15);
  border-radius: 1rem;
  position: absolute;
  bottom: -9rem;
  left: 0;
  right: 0;
  margin-inline: auto;
  opacity: 0;
  transition: opacity 1s 1s;
}

.card_price {
  display: block;
  margin-bottom: .25rem;
  color: black;
}

.card__title {
  color: black;
  margin-bottom: .75rem;
}

.card__article:hover .card__data {
  animation: show-data 1s forwards;
  opacity: 1;
  transition: opacity .3s;
}

.card__article:hover {
  animation: remove-overflow 1s forwards;
}

.card__article:not(:hover) {
  animation: show-overflow 1s forwards;
}

.card__article:not(:hover) .card__data {
  animation: remove-data 0.5s forwards;
}

/* Card animation keyframes */
@keyframes show-data {
  50% {
    transform: translateY(-10rem);
  }

  100% {
    transform: translateY(-7rem);
  }
}

@keyframes remove-overflow {
  to {
    overflow: initial;
  }
}

@keyframes remove-data {
  0% {
    transform: translateY(-7rem);
  }

  50% {
    transform: translateY(-10rem);
  }

  100% {
    transform: translateY(.5rem);
  }
}

@keyframes show-overflow {
  0% {
    overflow: initial;
    pointer-events: none;
  }

  50% {
    overflow: hidden;
  }
}
</style>