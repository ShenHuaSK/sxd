import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL), // 要用 Hash Router
  routes: [
    {
      path: "/",
      name: "主页",
      component: HomeView,
    },
    {
      path: "/about",
      name: "关于",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/terms_of_use",
      name: "用户协议",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/privacy_policy",
      name: "隐私政策",
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
