import { createApp } from "vue";
import Router from "./router";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faGitlab,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

library.add(faEnvelope, faGithub, faGitlab, faLinkedin);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(Router)
  .mount("#app");
