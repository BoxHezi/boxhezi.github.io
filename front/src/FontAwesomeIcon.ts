import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faGitlab,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {faLink} from "@fortawesome/free-solid-svg-icons";

library.add(faEnvelope, faGithub, faGitlab, faLinkedin, faLink);

export default FontAwesomeIcon;
