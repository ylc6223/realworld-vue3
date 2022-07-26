import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import About from "../views/About.vue";
import EventDetails from "@/components/EventDetails";

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/event/:id",
    name: "EventDetails",
    props: true,
    component: EventDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
