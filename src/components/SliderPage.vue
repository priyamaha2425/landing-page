<template>
  
  <div class="flex flex-col items-center justify-center h-[500px] relative overflow-hidden">
    <div v-for="(image, index) in images"  :key="index" class="absolute w-[50%] transition-all duration-500"      :class="getPositionClass(positionIndexes[index])"  >
      <div class="rounded-xl shadow-lg overflow-hidden">
        <img :src="image" class="w-full h-[400px] object-cover" />
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "../assets/4section-1.jpg";
import img2 from "../assets/4section-2.jpg";
import img3 from "../assets/4section-3.jpg";
import img4 from "../assets/4section-4.jpg";

export default {
  data() {
    return {
      images: [img1, img2, img3, img1, img4],
      positionIndexes: [0, 1, 2, 3, 4],
      interval: null
    };
  },

  mounted() {
    this.startSlider();
  },

  beforeUnmount() {
    clearInterval(this.interval);
  },

  methods: {
    startSlider() {
      this.interval = setInterval(() => {
        this.positionIndexes = this.positionIndexes.map(i => (i + 1) % 5);
      }, 1500); // slide every 3 seconds
    },

    getPositionClass(pos) {
      const positions = [
        "translate-x-0 scale-100 z-50 opacity-100",
        "-translate-x-1/2 scale-75 z-30 opacity-40",
        "-translate-x-[90%] scale-50 z-20 opacity-20",
        "translate-x-[90%] scale-50 z-10 opacity-20",
        "translate-x-1/2 scale-75 z-40 opacity-40" 
      ];

      return positions[pos];
    }
  }
};
</script>