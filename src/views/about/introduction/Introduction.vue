<template>
  <div id="container">
    <div id="introduction">
      <div id="name-intro">
        <h2>Boxuan Lu - 卢泊瑄</h2>
      </div>

      <div id="brief-intro">
        <h4>Bachelor of Computer Science - RMIT 2019</h4>
        <h4>Master of Cyber Security - Monash 2021</h4>
      </div>
    </div>
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
#container {
  display: flex;
  padding-left: 5px;
}

#introduction {
  display: flex;
  text-align: left;
  flex: 1;
}

#name-intro {
  flex: 1;
}

#brief-intro {
  flex: 1;
}
</style>
