<template>
  <div>
    <div class="basic">
      <div class="contentTitle"><slot name="contentTitle"></slot></div>
      <div class="timeframe"><slot name="timeframe"></slot></div>
    </div>
    <div class="detail">
      <div class="subtitle"><slot name="subtitle"></slot></div>
      <div class="content"><slot name="content"></slot></div>
    </div>
    <br />
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
.basic {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.detail {
  text-align: left;
  padding-left: 0.5rem;
}

.contentTitle {
  font-size: 1.2rem;
  margin: 0.2rem 0;
  font-weight: bold;
}

.subtitle {
  color: #a0a0a0;
  margin: 0.2rem auto;
}
</style>
