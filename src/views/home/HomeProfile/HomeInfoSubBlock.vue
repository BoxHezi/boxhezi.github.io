<template>
  <div>
    <div class="contentTitleContainer" v-if="data.contentTitle !== undefined">
      <div class="contentTitle">
        {{ data.contentTitle }}
      </div>
      <div class="timeframe" v-if="data.timeframe !== undefined">
        {{ data.timeframe }}
      </div>
    </div>
    <div class="subtitle" v-if="data.subtitle !== undefined">
      {{ data.subtitle }}
    </div>
    <div class="contents" v-if="data.contents !== undefined">
      <ul>
        <li v-for="item in data.contents" :key="item">{{ item }}</li>
      </ul>
    </div>
    <div class="links" v-if="data.links !== undefined">
      <ul>
        <li v-for="link in data.links" :key="link">
          <sub-block-link :linkData="link"></sub-block-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SubBlockLink from "@/views/home/HomeProfile/SubBlockLink.vue";

const props = defineProps({
  value: {type: Object, required: true}
})

const data = {
  contentTitle: props.value.contentTitle,
  timeframe: props.value.timeframe,
  subtitle: props.value.subtitle,
  contents: props.value.contents,
  links: props.value.links
}
</script>

<style scoped>
.contentTitleContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.contentTitle {
  font-size: 1.2rem;
  margin-top: 0.5rem;
}

.subtitle {
  font-size: 1rem;
  color: #a0a0a0;
  text-align: left;
}

.contents {
  text-align: justify;
  margin: 0.3rem 0;
}

.links {
  text-align: justify;
}

ul {
  list-style-type: none;
  margin: 0.2rem auto;
}

a {
  color: #ffffff;
}

a:hover {
  color: #c0c0c0;
}

</style>
