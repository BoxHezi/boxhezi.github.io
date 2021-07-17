<template>
  <div id="app">
    <canvas id="background-canvas">canvas</canvas>
    <main-nav-bar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainNavBar from "./components/navbar/MainNavBar.vue";
import Home from "./views/home/Home.vue";

import { defineCanvas, initAnimation } from "./Background";

export default defineComponent({
  name: "App",
  components: {
    Home,
    MainNavBar
  },
  mounted() {
    // this.defineCanvas();
    const canvas = defineCanvas();
    initAnimation(canvas);
  },
  methods: {
    // defineCanvas() {
    //   const canvas = document.querySelector("canvas");
    //   let ctx = canvas!.getContext("2d");
    //   canvas!.width = window.innerWidth;
    //   canvas!.height = window.innerHeight;
    // }
  }
});
</script>

<style>
@import "assets/css/base.css";

canvas {
  margin: 0;
  z-index: -100;
  background-color: #000000;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
