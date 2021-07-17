<template>
  <div class="container">
    <div id="projects">
      <div id="projects-zh-section">
        <h3>项目</h3>
        <div v-for="(value, key) in projectsRecordsDetailCN" :key="key">
          <h3>{{ key }}</h3>
          <ol>
            <ul v-for="item in value" :key=item>{{item}}</ul>
          </ol>
        </div>
      </div>

      <div id="projects-en-section">
        <h3>Projects</h3>
        <div v-for="(value, key) in projectsRecordsDetailEN" :key="key">
          <h3>{{ key }}</h3>
          <ol>
            <ul v-for="item in value" :key=item>{{item}}</ul>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import {
  projectsRecordsDetailCN,
  projectsRecordsDetailEN
} from "./ProjectsData";

export default defineComponent({
  setup() {
    return {};
  },
  data() {
    let detailArray: Array<string> = [];

    return {
      projectsRecordsDetailCN,
      projectsRecordsDetailEN,
      detailArray
    };
  },
  methods: {
    getRecordDetail(key: string, isCN: boolean) {
      if (isCN) {
        this.detailArray = projectsRecordsDetailCN[key];
      } else {
        this.detailArray = projectsRecordsDetailEN[key];
      }
      return this.detailArray;
    }
  }
});
</script>

<style scoped>
#projects {
  display: flex;
  text-align: left;
}

#projects-zh-section {
  flex: 1;
  padding-left: 5px;
}

#projects-en-section {
  flex: 1;
  padding-left: 5px;
}
</style>
