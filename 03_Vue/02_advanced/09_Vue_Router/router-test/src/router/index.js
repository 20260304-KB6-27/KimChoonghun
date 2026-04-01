import { createRouter, createWebHistory } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Members from '@/pages/Members.vue'
import Videos from '@/pages/Videos.vue'

const router = createRouter({
history: createWebHistory(),
  routes: [
    { path: '/', component: Home},
    { path: '/about', component: About},
    { path: '/members', component: Members},
    { path: '/video', component: Videos}
  ]
})

export default router
