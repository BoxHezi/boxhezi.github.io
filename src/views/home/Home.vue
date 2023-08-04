<template>
  <div id="home">
    <home-profile>
      <template v-slot:name><p>Boxuan Lu</p></template>
      <template v-slot:summary><p>Information Security Engineer | Full Stack Developer</p></template>
      <template v-slot:location><p>Docklands, Melbourne</p></template>

      <template v-slot:links>
        <profile-links link="https://github.com/BoxHezi">
          <template v-slot:icon>
            <font-awesome-icon icon="fa-brands fa-github" />
          </template>
          <template v-slot:text>
            boxhezi-github
          </template>
        </profile-links>

        <profile-links link="https://gitlab.com/BoxHezi">
          <template v-slot:icon>
            <font-awesome-icon icon="fa-brands fa-gitlab" />
          </template>
          <template v-slot:text>
            boxhezi-gitlab
          </template>
        </profile-links>
      </template>

      <!-- <template v-slot:avatar>
        <img src="@/assets/img/box.jpg" alt="Box Hezi" />
      </template>

      <template v-slot:links>
        <profile-links link="https://github.com/BoxHezi">
          <template v-slot:icon>
            <img src="@/assets/img/icon/home/github.svg" alt="" />
          </template>
          <template v-slot:text><p>GitHub</p></template>
        </profile-links>

        <profile-links link="https://gitlab.com/BoxHezi">
          <template v-slot:icon>
            <img src="@/assets/img/icon/home/gitlab.svg" alt="" />
          </template>
          <template v-slot:text><p>GitLab</p></template>
        </profile-links>

        <profile-links link="https://www.linkedin.com/in/boxuan-lu/">
          <template v-slot:icon>
            <img src="@/assets/img/icon/home/linkedin.svg" alt="" />
          </template>
          <template v-slot:text><p>LinkedIn</p></template>
        </profile-links>

        <profile-links
          link="https://drive.google.com/file/d/1llhcjus5orzEbbyRjjJpxpmq8pmJXK7A/view?usp=sharing"
        >
          <template v-slot:icon>
            <img src="@/assets/img/icon/home/resume.svg" alt="" />
          </template>
          <template v-slot:text><p>Resume - EN</p></template>
        </profile-links>

        <profile-links
          link="https://drive.google.com/file/d/155z6qv0SWcZztVLG3vqJ0ev4Ua1WS18F/view?usp=sharing"
        >
          <template v-slot:icon>
            <img src="@/assets/img/icon/home/resume.svg" alt="" />
          </template>
          <template v-slot:text><p>Resume - ZH</p></template>
        </profile-links>
      </template> -->
    </home-profile>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

import HomeProfile from "@/views/home/HomeProfile/HomeProfile.vue";
import ProfileLinks from "./HomeProfile/ProfileLinks.vue";

export default defineComponent({
  setup() {
  },
  components: {
    HomeProfile,
    ProfileLinks
  }
});
</script>

<style scoped>
#home {
  width: 80%;
  margin: 0 auto;
  /* background-color: var(--background); */
}

p {
  margin: 0;
  padding: 0;
}
</style>
