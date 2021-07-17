import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const Home = () => import("@/views/home/Home.vue");
const About = () => import("@/views/about/About.vue");
const Contact = () => import("@/views/contact/Contact.vue");
const AboutIntro = () => import("@/views/about/introduction/Introduction.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/about",
    component: About,
    children: [
      {
        path: "",
        redirect: "/about/introduction"
      },
      {
        path: "introduction",
        component: AboutIntro
      },
      {
        path: "writeups",
        component: About
      },
      {
        path: "reading",
        component: About
      },
      {
        path: "learning",
        component: About
      }
    ]
  },
  {
    path: "/contact",
    component: Contact
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
