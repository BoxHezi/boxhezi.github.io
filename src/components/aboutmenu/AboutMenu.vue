<template>
  <div id="about-menu">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  }
});
</script>

<style scoped>
#about-menu {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 10px;
}
</style>
