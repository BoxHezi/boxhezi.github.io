<template>
  <div>
    <div id="name"><slot name="name"></slot></div>
    <div id="summary" class="section"><slot name="summary"></slot></div>
    <div id="location" class="section"><slot name="location"></slot></div>
    <div id="links"><slot name="links"></slot></div>
    <hr />
    <!-- <div id="avatar"><slot name="avatar"></slot></div>
    <hr />
    <div id="links"><slot name="links"></slot></div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
hr {
  width: 70%;
}

#links {
  color: var(--text);
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
}

#name {
  font-size: 2rem;
  margin: 0.5rem 0;
  font-weight: bold;
}

.section {
  margin: 0.5rem 0;
}
</style>
