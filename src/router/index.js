import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        name: "Main",
        path: "",
        component: () => import(/* webpackChunkName: "main" */ "../views/main")
      }
    ]
  },
  {
    path: "/about",
    component: Layout,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    children: [
      {
        name: "About",
        path: "",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/about")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
