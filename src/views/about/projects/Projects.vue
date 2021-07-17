<template>
  <div class="container">
    <div id="projects">
      <div id="projects-zh-section">
        <h3>项目</h3>
        <div v-for="records in projectsRecordsCN" :key="records">
          <h3>{{ records }}</h3>
          <ul>
            <ol v-for="value in getRecordDetail(records, true)" :key="value">
              {{
                value
              }}
            </ol>
          </ul>
        </div>
      </div>

      <div id="projects-en-section">
        <h3>Projects</h3>
        <div v-for="records in projectsRecordsEN" :key="records">
          <h3>{{ records }}</h3>
          <ul>
            <ol v-for="value in getRecordDetail(records, false)" :key="value">
              {{
                value
              }}
            </ol>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import {
  projectsRecordsCN,
  projectsRecordsDetailCN,
  projectsRecordsEN,
  projectsRecordsDetailEN
} from "./ProjectsData";

export default defineComponent({
  setup() {
    return {};
  },
  data() {
    let detailArray: Array<string> = [];

    return {
      projectsRecordsCN,
      projectsRecordsDetailCN,
      projectsRecordsEN,
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
