<template>
  <div id="home">
    <home-profile>
      <template v-slot:name><p>Boxuan Lu</p></template>
      <template v-slot:summary
        ><p>Information Security Engineer | Full Stack Developer</p></template
      >
      <template v-slot:location><p>Docklands, Melbourne</p></template>

      <template v-slot:links>
        <profile-links link="https://github.com/BoxHezi">
          <template v-slot:icon>
            <font-awesome-icon icon="fa-brands fa-github" />
          </template>
          <template v-slot:text> boxhezi | </template>
        </profile-links>

        <profile-links link="https://gitlab.com/BoxHezi">
          <template v-slot:icon>
            <font-awesome-icon icon="fa-brands fa-gitlab" />
          </template>
          <template v-slot:text> boxhezi | </template>
        </profile-links>

        <profile-links link="https://www.linkedin.com/in/boxuan-lu/">
          <template v-slot:icon>
            <font-awesome-icon icon="fa-brands fa-linkedin" />
          </template>
          <template v-slot:text>Boxuan Lu</template>
        </profile-links>
      </template>
    </home-profile>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import HomeProfile from "@/views/home/HomeProfile/HomeProfile.vue";
import ProfileLinks from "./HomeProfile/ProfileLinks.vue";

export default defineComponent({
  setup() {},
  components: {
    HomeProfile,
    ProfileLinks,
  },
});
</script>

<style scoped>
#home {
  width: 80%;
  margin: 0 auto;
}

p {
  margin: 0;
  padding: 0;
}
</style>
