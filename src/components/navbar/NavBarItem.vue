<template>
  <div class="nav-bar-item" @click="handleClick()">
    <div v-if="!isActive"><slot name="icon" class="icon"></slot></div>
    <div v-else><slot name="iconActive" class="iconActive"></slot></div>
    <div id="text"><slot name="text"></slot></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "@vue/runtime-core";

export default defineComponent({
  name: "NavBarItem",
  props: {
    path: {
      default: null,
      type: String
    }
  },
  setup(props) {
    const { path } = toRefs(props);
    return { path };
  },
  computed: {
    isActive(): Boolean {
      return this.$route.path.indexOf(this.path) !== -1;
    }
  },
  methods: {
    handleClick() {
      if (this.path !== null) {
        this.$router.replace(this.path);
      }
    }
  }
});
</script>

<style scoped>
.nav-bar-item {
  flex: 1;
  text-align: center;
  color: white;
}
</style>
