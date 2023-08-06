<template>
  <div class="container">
    <canvas id="background-canvas"></canvas>
    <main-nav-bar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import MainNavBar from "./components/navbar/MainNavBar.vue";
import Home from "./views/home/Home.vue";

import { initAnimation } from "./Background";

export default defineComponent({
  name: "App",
  components: {
    Home,
    MainNavBar,
  },
  setup() {
    onMounted(() => {
      initAnimation();
    });
  },
});
</script>

<style>
@import "assets/css/base.css";

canvas {
  margin: 0 auto;
  /* text-align: left; */
  z-index: -100;
  /* display: block; */
  /* background-color: #000000; */
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.container {
  width: 70%;
  margin: 0 auto;
}
</style>
