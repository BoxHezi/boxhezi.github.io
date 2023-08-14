<template>
  <a :href="value.link" target="_blank">
    <font-awesome-icon icon="fa-solid fa-link"/>
    <span v-if="value.linkTitle !== ''">{{ value.linkTitle }}</span>
    <span v-else>{{ value.link }} </span>
  </a>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    setup(props) {
      let value = {
        linkTitle: props.linkData?.linkTitle,
        link: props.linkData?.link
      };
      return {value};
    },
    props: {
      linkData: {
        type: [Object],
        require: true
      }
    }
  }
);

</script>

<style scoped>

</style>
