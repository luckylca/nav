import { createRouter, createWebHistory } from 'vue-router'
import layout from '../views/layout/index.vue'
import login from '../views/login/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
