<template>
  <div>
    <about-menu>
      <about-menu-item path="/about/introduction">
        <template v-slot:option>Introduction</template>
      </about-menu-item>

      <about-menu-item path="/about/writeups">
        <template v-slot:option>WriteUps</template>
      </about-menu-item>

      <about-menu-item path="/about/reading">
        <template v-slot:option>Reading</template>
      </about-menu-item>

      <about-menu-item path="/about/learning">
        <template v-slot:option>Learning</template>
      </about-menu-item>
    </about-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AboutMenu from "./AboutMenu.vue";
import AboutMenuItem from "./AboutMenuItem.vue";

export default defineComponent({
  setup() {
    return {};
  },
  components: {
    AboutMenu,
    AboutMenuItem
  }
});
</script>

<style scoped></style>
