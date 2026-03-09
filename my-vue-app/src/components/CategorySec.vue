<template>
    <section class="max-w-7xl mx-auto  px-6 pl-20">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"> <!-- BOOK SECTION -->
            <div class="relative flex justify-center items-center p-20"> <!-- LEFT ARROW --> <button @click="prevPage"
                    class="absolute -left-12 z-10 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center">
                    ◀ </button> <!-- BOOK -->
                    <div class="p-6 border-2 border-gray-200 rounded-xl bg-white shadow-xl shadow-[#627254]">
                <div id="flipbook" class="w-[700px] h-[450px] "> <!-- PRODUCT 1 -->
                    <div class="page bg-white flex items-center justify-center"> <img
                            src="../assets/happy-heads-lice-nits-kit.webp" class="w-full h-full object-cover" /> </div>
                    <div class="page bg-[#e7f0dd] flex flex-col items-center justify-center text-center h-full pt-40">
                        <h3 class="text-2xl font-semibold mb-4">₹ 1500 </h3>
                        <p class="text-gray-700"> Happy Heads Lice & Nits Kit </p>

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
                            <span class="text-gray-500  text-xs">40 reviews</span>
                        </div>
                        <div class="flex justify-center p-5 gap-5">
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
                    </div> <!-- PRODUCT 2 -->
                    <div class="page bg-white flex items-center justify-center"> <img
                            src="../assets/centella-loofha-soap-1.webp" class="w-full h-full object-cover" /> </div>
                       <div class="page bg-[#e7f0dd] flex flex-col items-center justify-center text-center h-full pt-40">
                        <h3 class="text-2xl font-semibold mb-4"> ₹ 299</h3>
                        <p class="text-gray-700"> Centella Loofah Soap </p>
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
                            <span class="text-gray-500  text-xs">80 reviews</span>
                        </div>
                        <div class="flex justify-center p-5 gap-5">
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
                </div>
                </div> <!-- RIGHT ARROW --> <button @click="nextPage"
                    class="absolute -right-12 z-10 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center">
                    ▶ </button>
            </div> <!-- TEXT SECTION -->
            <div class="p-10">
                <span>Best Sellers</span>
                <h2 class="text-4xl font-bold mb-6"> Collection Best Sellers </h2>
               <button class="px-4 py-2 bg-white text-black rounded-md hover:bg-[#627254] hover:text-white hover:border-0  border-black">
                Shop All Products
              </button>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            pageFlip: null,
            currentPage: 0,
            totalPages: 0
        }
    },
    directives: {
        tippy: {
        mounted(el, binding) {
            tippy(el, { content: binding.value });
        },
        },
    },
    mounted() {

        this.pageFlip = new St.PageFlip(
            document.getElementById("flipbook"),
            {
                width: 300,
                height: 450,
                size: "fixed",
                showCover: false,
                usePortrait: false,
           
            }
        )

        const pages = document.querySelectorAll("#flipbook .page")

        this.pageFlip.loadFromHTML(pages)

        this.totalPages = pages.length - 1

        // update current page when flipping
        this.pageFlip.on("flip", (e) => {
            this.currentPage = e.data
        })

    },

    methods: {

        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.pageFlip.flipNext()
            }
        },

        prevPage() {
            if (this.currentPage > 0) {
                this.pageFlip.flipPrev()
            }
        }

    }
} 
</script>
