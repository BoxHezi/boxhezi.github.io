<template>
  <!-- <div class="nav-bar-item" @click="handleClick()"> -->
  <div class="nav-bar-item">
    <!-- <div v-if="!isActive"><slot name="icon" class="icon"></slot></div>
    <div v-else><slot name="iconActive" class="iconActive"></slot></div> -->
    <div id="text"><slot name="text"></slot></div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "@vue/runtime-core";
// import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  name: "NavBarItem",
  props: {
    path: {
      default: null,
      type: String,
    },
  },
  // setup(props) {
  //   const router = useRouter();
  //   const route = useRoute();

  //   let isActive = computed(() => {
  //     return route.path.indexOf(props.path) !== -1;
  //   });

  //   function handleClick() {
  //     if (route.path !== null) {
  //       router.push(props.path);
  //     }
  //   }

  //   return {
  //     handleClick,
  //     isActive
  //   };
  // }
});
</script>

<style scoped>
.nav-bar-item {
  flex: 1;
  text-align: center;
  color: var(--text);
}
</style>
