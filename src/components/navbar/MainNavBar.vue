<template>
  <div>
    <nav-bar>
      <nav-bar-item class="name-nav" path="/">
        <template v-slot:icon>
          <img src="@/assets/img/box.jpg" alt="" />
        </template>
        <template v-slot:iconActive>
          <img src="@/assets/img/box.jpg" alt="" />
        </template>
        <template v-slot:text>Box Hezi</template>
      </nav-bar-item>

      <nav-bar-item class="placeholder-nav">
        <template v-slot:text><nav-bar-animation /></template>
      </nav-bar-item>

      <!-- <nav-bar-item class="links-nav" path="/home">
        <template v-slot:icon>
          <img src="@/assets/img/icon/navbar/home.svg" alt="" />
        </template>
        <template v-slot:iconActive>
          <img src="@/assets/img/icon/navbar/home-filling.svg" alt="" />
        </template>
        <template v-slot:text>Home</template>
      </nav-bar-item>

      <nav-bar-item class="links-nav" path="/about">
        <template v-slot:icon>
          <img src="@/assets/img/icon/navbar/user.svg" alt="" />
        </template>
        <template v-slot:iconActive>
          <img src="@/assets/img/icon/navbar/user-filling.svg" alt="" />
        </template>
        <template v-slot:text>About</template>
      </nav-bar-item>

      <nav-bar-item class="links-nav" path="/contact">
        <template v-slot:icon>
          <img src="@/assets/img/icon/navbar/notification.svg" alt="" />
        </template>
        <template v-slot:iconActive>
          <img src="@/assets/img/icon/navbar/notification-filling.svg" alt="" />
        </template>
        <template v-slot:text>Contact</template>
      </nav-bar-item> -->
    </nav-bar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import NavBar from "./NavBar.vue";
import NavBarItem from "./NavBarItem.vue";
import NavBarAnimation from "./NavBarAnimation.vue";

export default defineComponent({
  name: "MainNavBar",
  components: {
    NavBar,
    NavBarItem,
    NavBarAnimation
  }
});
</script>

<style scoped>
img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  border-radius: 50%;
}

.name-nav {
  flex: 0.6;
}

.placeholder-nav {
  flex: 1;
}

.links-nav {
  flex: 0.4;
}
</style>
