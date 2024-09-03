<template>
  <div class="container">
    <canvas id="background-canvas"></canvas>
    <main-nav-bar />
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import MainNavBar from "./components/navbar/MainNavBar.vue";

import { initAnimation as init } from "./Background";

// onMounted(() => {
//   // using setTimeout to ensure that the DOM has been rendered and then invoke init function
//   setTimeout(() => {
//     const html = document.querySelector("html");
//     const width = window.innerWidth;
//     const height = html!.scrollHeight + 20
//     init(width, height);
//   }, 10);
// });
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
}

.container {
  width: 70%;
  margin: 0 auto;
}
</style>
