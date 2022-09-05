import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/lineChat",
      name: "LineChat",
      component: () => import("../components/views/line/Chat.vue"),
    },
    {
      path: "/answer",
      name: "Answer",
      component: () => import("../components/views/Answer.vue"),
    }
  ],
});

export default router;