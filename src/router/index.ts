import { createRouter,createWebHashHistory } from 'vue-router'
import layout from '../views/layout/index.vue'
import login from '../views/login/index.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: layout,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
  ],
})

export default router
