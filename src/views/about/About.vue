<template>
  <div id="about">
    <main-about-menu></main-about-menu>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainAboutMenu from "@/components/aboutmenu/MainAboutMenu.vue";

export default defineComponent({
  setup() {
    return {};
  },
  components: {
    MainAboutMenu
  }
});
</script>

<style scoped>
#about {
  margin: 0 auto;
  width: 85%;
  background: #000000;
}

</style>
