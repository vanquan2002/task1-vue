import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "homePage",
    component: () => import("../pages/HomePage.vue"),
  },
  {
    path: "/about",
    name: "aboutPage",
    component: () => import("../pages/AboutPage.vue"),
  },
  {
    path: "/detail/:id",
    name: "detailPage",
    component: () => import("../pages/DetailPage.vue"),
  },
  {
    path: "/cart",
    name: "cartPage",
    component: () => import("../pages/CartPage.vue"),
  },
  {
    path: "*",
    name: "errorPage",
    component: () => import("../pages/ErrorPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
