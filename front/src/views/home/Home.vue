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
            <template v-slot:text> boxhezi |</template>
          </profile-links>

          <!-- <profile-links link="https://gitlab.com/BoxHezi">
            <template v-slot:icon>
              <font-awesome-icon icon="fa-brands fa-gitlab" />
            </template>
            <template v-slot:text> boxhezi | </template>
          </profile-links> -->

          <profile-links link="https://www.linkedin.com/in/boxuan-lu/">
            <template v-slot:icon>
              <font-awesome-icon icon="fa-brands fa-linkedin" />
            </template>
            <template v-slot:text>Boxuan Lu</template>
          </profile-links>
        </template>
      </home-summary>
    </div>

    <div v-for="(value, key) in resumeData" :key="key">
      <home-info-block
        :title="key"
        :values="value"
        :key="key"
      ></home-info-block>
      <!--      {{ key }}: {{ value }}-->
    </div>

    <!--    <div id="home-info-block"></div>-->
  </div>
</template>

<script lang="ts" setup>
import HomeSummary from "@/views/home/HomeProfile/HomeSummary.vue";
import ProfileLinks from "./HomeProfile/ProfileLinks.vue";
import HomeInfoBlock from "./HomeProfile/HomeInfoBlock.vue";

// import {start} from "./dataParser";
import { default as resumeData } from "./data.json";
</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
}
</style>
