<template>
  <div class="container">
    <div id="introduction">
      <div id="name-intro">
        <h3>卢泊瑄</h3>
        <h3>Boxuan Lu</h3>
      </div>

      <div id="brief-intro">
        <h5>
          本科计算机科学 - 皇家墨尔本理工 2019<br />Bachelor of Computer Science
          - RMIT 2019
        </h5>
        <h5>
          硕士网络安全 - 莫纳什大学 2021<br />Master of Cyber Security - Monash
          2021
        </h5>
      </div>
    </div>
    <hr />

    <div id="experience">
      <div id="experience-zh-section">
        <h3>经验</h3>
        <div v-for="(value, key) in relevantRecordsDetailCN" :key="key">
          <h3>{{ key }}</h3>
          <ol>
            <ul v-for="item in value" :key="item">
              {{
                item
              }}
            </ul>
          </ol>
        </div>
      </div>

      <div id="experience-en-section">
        <h3>Experience</h3>
        <div v-for="(value, key) in relevantRecordsDetailEN" :key="key">
          <h3>{{ key }}</h3>
          <ol>
            <ul v-for="item in value" :key="item">
              {{
                item
              }}
            </ul>
          </ol>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import {
  relevantRecordsDetailCN,
  relevantRecordsDetailEN
} from "./RelevantExperience";

export default defineComponent({
  setup() {
    let detailArray: Array<string> = [];

    return {
      relevantRecordsDetailCN,
      relevantRecordsDetailEN,
      detailArray
    };
  }
});
</script>

<style scoped>
#introduction {
  display: flex;
  text-align: left;
}

#name-intro {
  flex: 1;
  text-align: center;
}

#brief-intro {
  flex: 1;
  padding-left: 5px;
}

#experience {
  display: flex;
  text-align: left;
}

#experience-zh-section {
  flex: 1;
  padding-left: 5px;
}

#experience-en-section {
  flex: 1;
  padding-left: 5px;
}

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
