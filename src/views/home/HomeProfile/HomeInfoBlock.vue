<template>
  <div>
    <div class="block-title">
      <div>{{ title }}</div>
      <hr />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import InfoBlockContent from "./InfoBlockContent.vue";

export default defineComponent({
  setup() {},
  props: {
    title: {
      type: String,
    },
  },
  components: {
    InfoBlockContent,
  },
});
</script>

<style scoped>
.block-title {
  text-align: left;
  font-size: 2rem;
  font-weight: bold;
  margin: 0.2rem auto;
}

hr {
  margin: 0.2rem auto;
}
</style>
