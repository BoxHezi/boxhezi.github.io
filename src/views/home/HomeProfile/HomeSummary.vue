<template>
  <div>
    <div id="intro">
      <div id="name"><slot name="name"></slot></div>
      <div id="vocation" class="section"><slot name="vocation"></slot></div>
      <div id="location" class="section"><slot name="location"></slot></div>
      <div id="links"><slot name="links"></slot></div>
      <br />
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
#links {
  color: var(--text);
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
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
