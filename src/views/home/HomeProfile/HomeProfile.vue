<template>
  <div>
    <div id="name"><slot name="name"></slot></div>
    <hr />
    <div id="avatar"><slot name="avatar"></slot></div>
    <hr />
    <div id="links"><slot name="links"></slot></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  }
});
</script>

<style scoped>
hr {
  width: 70%;
}

#links {
  color: var(--snow);
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
}
</style>
