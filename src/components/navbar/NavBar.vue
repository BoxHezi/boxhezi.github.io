<template>
  <div id="nav-bar">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "NavBar"
});
</script>

<style scoped>
#nav-bar {
  height: 60px;
  color: var(--text);
  /* background-color: var(--background); */
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
</style>
