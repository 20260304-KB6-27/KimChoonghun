import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'

/*
네비게이션 가드 (beforeEnter)
- false를 반환하게 되면 접근을 차단함
*/
const membersIdGuard = (to, from) => {
  // /members 인 경우 /members/:id 에서만 /members/:id로 접근 가능
  if (from.name !== "members" && from.name !== "members/id") {
    return false;
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/members',
      name: 'members',
      // 지연 로딩 : 해당 경로에 처음 접근할때 컴포넌트를 불러옴
      // 초기로딩 속도 개선
      component: () => import('@/pages/MemberList.vue')
    },
    {
      path: '/members/:id',
      name: 'members/id',
      component: () => import('@/pages/MemberInfo.vue'),
      // members에서만 접근해야 상세정보를 볼 수 있게 설정
      beforeEnter: membersIdGuard,
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
