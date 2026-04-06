import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: () => import("@/pages/TodoList_axios.vue")},
    // { path: "/todos", component: () => import("@/pages/TodoList.vue")},
  ],
})

export default router
