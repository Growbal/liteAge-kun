import { createRouter, createWebHistory } from "vue-router";
import LineChat from "../views/line/Chat.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/line_chat",
      name: "LineChat",
      component: () => import("../views/line/Chat.vue"),
    },
  ],
});

export default router;
