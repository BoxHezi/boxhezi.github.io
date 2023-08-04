<template>
  <div id="nav-bar">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "NavBar",
});
</script>

<style scoped>
#nav-bar {
  height: 60px;
  width: 70%;
  color: var(--text);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 10px auto;
}
</style>
