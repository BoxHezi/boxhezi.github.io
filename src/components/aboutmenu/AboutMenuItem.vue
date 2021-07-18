<template>
  <div class="about-menu-item" @click="handleClick()">
    <div class="option"><slot name="option"></slot></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup(props) {
    const router = useRouter();

    function handleClick() {
      if (props.path !== null) {
        router.push(props.path);
      }
    }

    return {
      handleClick
    };
  },
  props: {
    path: {
      default: null,
      type: String
    }
  }
});
</script>

<style scoped>
.about-menu-item {
  flex: 1;
}
</style>
