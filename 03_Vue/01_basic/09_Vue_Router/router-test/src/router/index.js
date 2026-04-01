import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      /*
        ✓ 37 modules transformed.
        dist/index.html                     0.43 kB │ gzip:  0.29 kB
        dist/assets/index-BQmE1JZV.css      4.28 kB │ gzip:  1.31 kB
        dist/assets/AboutView-DAK8KsTK.js   0.24 kB │ gzip:  0.21 kB
        dist/assets/index-DGYRaSD2.js      99.66 kB │ gzip: 38.59 kB
        -> 비동기로 설정시 페이지별로 js가 build된다. => 성능적으로 이쪽이 더 나음
      */
      // component: AboutView,
      /*
        ✓ 36 modules transformed.
        dist/index.html                  0.43 kB │ gzip:  0.29 kB
        dist/assets/index-BQmE1JZV.css   4.28 kB │ gzip:  1.31 kB
        dist/assets/index-Dv8ZlqB3.js   98.63 kB │ gzip: 38.14 kB
      */
    },
  ],
})

export default router
