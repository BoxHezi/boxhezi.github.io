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

    <!-- <suspense>
      <div v-for="(value, key) in resumeData" :key="key">
        <home-info-block
          :title="key"
          :key="key"
        ></home-info-block> -->
    <!--      {{ key }}: {{ value }}-->
    <!-- </div>
    </suspense> -->

    <suspense>
      <div>
        <home-info-block
          :title="summaryKey"
          :key="summaryKey"
        ></home-info-block>
      </div>
    </suspense>

    <suspense>
      <div v-for="value in resumeDataKey" :key="value">
        <home-info-block :title="value" :key="value"></home-info-block>
        <!--      {{ key }}: {{ value }}-->
      </div>
    </suspense>

    <!--    <div id="home-info-block"></div>-->
  </div>
</template>

<script lang="ts" setup>
import HomeSummary from "./HomeProfile/HomeSummary.vue";
import ProfileLinks from "./HomeProfile/ProfileLinks.vue";
import HomeInfoBlock from "./HomeProfile/HomeInfoBlock.vue";

// import { default as resumeData } from "./data.json";
const summaryKey = "summary";
const resumeDataKey = ["experience", "project", "education", "certification"];
</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
}
</style>
