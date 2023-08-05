<template>
  <div>
    <a :href="link" target="_blank">
      <div class="content">
        <span class="icon"><slot name="icon"></slot></span
        ><span><slot name="text"></slot></span>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    link: {
      type: String,
      default: null,
    },
  },
});
</script>

<style scoped>
.content {
  display: flex;
}

.icon {
  text-align: center;
  margin: 0 auto;
  padding: 0 0.2rem;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
