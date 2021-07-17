<template>
  <div>
    <about-menu>
      <about-menu-item path="/about/experience">
        <template v-slot:option>Experience</template>
      </about-menu-item>

      <about-menu-item path="/about/projects">
        <template v-slot:option>Projects</template>
      </about-menu-item>

      <!-- <about-menu-item path="/about/reading">
        <template v-slot:option>Reading</template>
      </about-menu-item>

      <about-menu-item path="/about/learning">
        <template v-slot:option>Learning</template>
      </about-menu-item> -->
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
