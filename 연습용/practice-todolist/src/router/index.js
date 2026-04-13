import { createRouter, createWebHistory } from 'vue-router'
// import { Home } from '../pages/MainPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: () => import('../pages/MainPage.vue')}
  ],
})

export default router
