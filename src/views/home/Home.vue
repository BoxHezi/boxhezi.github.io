<template>
  <div id="home">
    <div id="home-summary">
      <home-summary>
        <template v-slot:name><p>Boxuan Lu</p></template>
        <template v-slot:vocation
          ><p>Information Security Engineer | Full Stack Developer</p></template
        >
        <template v-slot:location><p>Melbourne, Australia</p></template>

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
      </home-summary>
    </div>

    <div id="home-info-block">
      <div id="summary-block">
        <home-info-block title="Summary" />
        <info-block-content>
          <template v-slot:content>
            <ul class="summaryList">
              <li>Ability to handle common vulnerability</li>
              <li>
                Knowledge in cyber kill chain, vulnerability management; Skilled
                in Python, Java
              </li>
              <li>
                Experienced in maintaining self-hosted cloud infrastructure
              </li>
              <li>Native mandarin speaker, fluent in English</li>
            </ul>
          </template>
        </info-block-content>
      </div>

      <div id="experience-block">
        <home-info-block title="Experience" />
        <info-block-content>
          <template v-slot:contentTitle>
            <p>Information Security Engineer</p>
          </template>
          <template v-slot:timeframe>
            <p>Jan 2022 - Apr 2023</p>
          </template>
          <template v-slot:subtitle>
            <p>Zhejiang University NGICS Platform</p>
          </template>
          <template v-slot:content>
            <p>Content</p>
          </template>
        </info-block-content>
      </div>
    </div>

    <div id="test"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

import HomeSummary from "@/views/home/HomeProfile/HomeSummary.vue";
import ProfileLinks from "./HomeProfile/ProfileLinks.vue";
import HomeInfoBlock from "./HomeProfile/HomeInfoBlock.vue";
import InfoBlockContent from "@/views/home/HomeProfile/InfoBlockContent.vue";

import { start } from "./dataParser";

export default defineComponent({
  setup() {
    onMounted(() => {
      start();
    });
  },
  components: {
    HomeSummary,
    ProfileLinks,
    HomeInfoBlock,
    InfoBlockContent,
  },
});
</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
}

.summaryList {
  margin: 0.2rem auto;
  list-style-type: none;
}

</style>
