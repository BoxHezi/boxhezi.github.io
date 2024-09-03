<template>
  <a :href="data.link" target="_blank">
    <font-awesome-icon icon="fa-solid fa-link" />
    <span v-if="data.linkTitle !== ''">{{ data.linkTitle }}</span>
    <span v-else>{{ data.link }} </span>
  </a>
</template>

<script lang="ts" setup>
const props = defineProps({
  linkData: {
    type: [Object],
    required: true,
  },
});

const data = {
  linkTitle: props.linkData?.linkTitle,
  link: props.linkData?.link,
};
</script>

<style scoped></style>
