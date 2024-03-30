<script lang="ts" setup>
import gsap from "gsap";
import { onMounted, onUnmounted, ref } from "vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const initAni = () => {
  gsap.to(".box", {
    scrollTrigger: {
      scroller: ".wrapper",
      trigger: ".wrapper",
      start: "center 33%",
      toggleActions: "play complete restart",
      scrub: true,
    },
    opacity: 0,
    duration: 2,
    ease: "back",
  });
};

onMounted(() => {
  initAni();
});
onUnmounted(() => {});
</script>

<template>
  <div ref="main" class="h-screen wrapper">
    <div class="w-screen h-screen bg-white panel relative">
      <span
        class="box font-myungjo font-bold text-9xl tracking-widest w-full text-center absolute absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >비오면쉽니다.</span
      >
    </div>
    <div class="w-screen h-screen bg-black panel"></div>
  </div>
</template>

<style>
.wrapper {
  overflow-y: scroll;
  height: 100vh;
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y mandatory;
}
</style>
