<template>
  <div>
    <a :href="data.link" target="_blank">
      <div class="content">
        <span class="icon"><slot name="icon"></slot></span
        ><span><slot name="text"></slot></span>
      </div>
    </a>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  link: {
    type: String,
    default: null,
  },
});

const data = {
  link: props.link,
};
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
