import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/Auth/RegisterView.vue')
    },
    {
      path: '/posts',
      name: 'posts.index',
      component: () => import('@/views/Posts/IndexView.vue')
    }
  ]
})

export default router
