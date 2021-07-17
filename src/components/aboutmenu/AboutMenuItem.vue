<template>
  <div class="about-menu-item" @click="handleClick()">
    <div class="option"><slot name="option"></slot></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
  props: {
    path: {
      default: null,
      type: String
    }
  },
  methods: {
    handleClick() {
      if (this.path !== null) {
        this.$router.push(this.path);
      }
    }
  }
});
</script>

<style scoped>
.about-menu-item {
  flex: 1;
}
</style>
