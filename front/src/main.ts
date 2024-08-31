import { createApp } from "vue";
import Router from "./router";
import App from "./App.vue";

import {default as FontAwesomeIcon} from "./FontAwesomeIcon";

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(Router)
  .mount("#app");
