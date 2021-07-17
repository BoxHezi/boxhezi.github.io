import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const Home = () => import("@/views/home/Home.vue");

const About = () => import("@/views/about/About.vue");
const AboutExp = () => import("@/views/about/experience/Experience.vue");
const AboutProj = () => import("@/views/about/projects/Projects.vue");

const Contact = () => import("@/views/contact/Contact.vue");

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
        redirect: "/about/experience"
      },
      {
        path: "experience",
        component: AboutExp
      },
      {
        path: "projects",
        component: AboutProj
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
  },
  { path: "/flag", component: () => import("@/views/Flag.vue") }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
