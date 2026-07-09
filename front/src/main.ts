import { createApp } from "vue";
import type { Component } from "vue";
import Router from "./router";
import App from "./App.vue";

import { default as FontAwesomeIcon } from "./FontAwesomeIcon";

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon as Component);
app.use(Router);
app.mount("#app");
