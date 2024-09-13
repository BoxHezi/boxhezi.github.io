<template>
  <div>
    <div class="block-title">
      <div>{{ data.title }}</div>
      <hr />
    </div>
    <div v-for="value in d" :key="value">
      <!-- <div v-for="value in data.values" :key="value"> -->
      <home-info-sub-block :value="value"></home-info-sub-block>
    </div>
  </div>
</template>

<script lang="ts" setup>
import HomeInfoSubBlock from "@/views/home/HomeProfile/HomeInfoSubBlock.vue";

const props = defineProps({
  title: {
    // type: [String, Number],
    type: String,
    required: true,
  },
  values: [Array, Object],
});

let myTitle = props.title;
if (typeof props.title === "string") {
  myTitle = props.title[0].toUpperCase() + props.title.slice(1);
}

const data = {
  title: myTitle,
  values: props.values,
};

const BACKEND_ENDPOINT =
  process.env.VUE_APP_BACKEND_ENDPOINT || "http://172.17.154.168:3000/api/";
// console.log(BACKEND_ENDPOINT);

const resp = await fetch(BACKEND_ENDPOINT + data.title.toLowerCase());
const d = await resp.json();
</script>

<style scoped>
div {
  background-color: #2d2d2d;
  border-radius: 0.5em;
  padding: 0 0.1rem;
  margin: 0 0.1rem;
}

.block-title {
  text-align: left;
  font-size: 2rem;
  font-weight: bold;
  margin: 0.2rem auto;
}

hr {
  margin: 0.1rem auto;
}
</style>
