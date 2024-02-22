<template>
  <div>
    <div class="block-title">
      <div>{{ data.title }}</div>
      <hr />
    </div>
    <div v-for="value in data.values" :key="value">
      <home-info-sub-block :value="value"></home-info-sub-block>
    </div>
  </div>
</template>

<script lang="ts" setup>
import HomeInfoSubBlock from "@/views/home/HomeProfile/HomeInfoSubBlock.vue";

const props = defineProps({
  title: {
    type: [String, Number],
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
</script>

<style scoped>
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
