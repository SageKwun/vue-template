import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Hello",
    component: () => import("views/hello/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(), // history 模式则使用 createWebHistory()
  routes,
});

export default router;
