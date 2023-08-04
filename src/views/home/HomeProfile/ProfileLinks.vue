<template>
  <div class="links">
    <a :href="link" target="_blank">
      <!-- <div class="icon"><slot name="icon"></slot></div>
      <div class="text"><slot name="text"></slot></div> -->
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
  /* width: 50%;
  height: 50%; */
  text-align: center;
  margin: 0 auto;
}

.icon {
  padding: 0 0.2rem;
}

/* .icon :deep() img {
  border-radius: 0%;
} */

.text {
  width: 50%;
  height: 50%;
  text-align: center;
  margin: 0 auto;
}

a {
  text-decoration: none;
  color: inherit;
  /* transition: 0s;
  transform: none; */
}

/* a:hover :deep() img {
  transform: scale(1.3);
  transition: transform 1s;
}

a:hover :deep() p {
  transform: scale(1.5);
  transition: transform 1s;
} */
</style>
