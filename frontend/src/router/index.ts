import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/question/line",
      name: "LineChat",
      component: () => import("../components/views/line/Chat.vue"),
    },
    {
      path: "/answer",
      name: "Answer",
      component: () => import("../components/views/Answer.vue"),
    },
    {
      path: "/",
      name: "start",
      component: () => import("../components/views/PreStart.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../components/views/login/LoginForm.vue"),
    },
    {
      path: "/loginManage",
      name: "loginManage",
      component: () => import("../components/views/login/LoginManage.vue"),
    },
  ],
});

export default router;
