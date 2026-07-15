<template>
  <div class="container">
    <canvas id="background-canvas"></canvas>
    <main-nav-bar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
import MainNavBar from "./components/navbar/MainNavBar.vue";
import { initAnimation } from "./Background";

export default defineComponent({
  name: "App",
  components: { MainNavBar },
  setup() {
    let cleanup: (() => void) | undefined;

    onMounted(() => {
      const canvas = document.getElementById(
        "background-canvas"
      ) as HTMLCanvasElement | null;
      if (canvas) cleanup = initAnimation(canvas);
    });

    onUnmounted(() => cleanup?.());
  },
});
</script>

<style>
@import "assets/css/base.css";

#background-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -100;
  pointer-events: none;
}

.container {
  width: 70%;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .container {
    width: 95%;
  }
}
</style>
