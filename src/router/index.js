import { createRouter, createWebHistory } from 'vue-router'

function auth(to, from, next) {
  if (!localStorage.getItem('access_token')) {
    return next({ name: 'register' })
  }

  next()
}

function guest(to, from, next) {
  if (localStorage.getItem('access_token')) {
    return next({ name: 'posts.index' })
  }

  next()
}

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
      beforeEnter: guest,
      component: () => import('@/views/Auth/RegisterView.vue')
    },
    {
      path: '/login',
      name: 'login',
      beforeEnter: guest,
      component: () => import('@/views/Auth/LoginView.vue')
    },
    {
      path: '/posts',
      name: 'posts.index',
      beforeEnter: auth,
      component: () => import('@/views/Posts/IndexView.vue')
    }
  ]
})

export default router
