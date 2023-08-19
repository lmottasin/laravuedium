import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '@/stores/auth'

function auth(to, from, next) {
  if (!localStorage.getItem('access_token')) {
    return next({ name: 'login' })
  }

  next()
}

function verified(to, from, next) {
  const auth = useAuth()
  if (auth.check && !auth.isEmailVerified) {
    return next({ name: 'email.verification.send' })
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
      path: '/send-email-verification',
      name: 'email.verification.send',
      beforeEnter: [auth],
      component: () => import('@/views/Auth/VerifyEmailView.vue')
    },
    {
      path: '/profile',
      name: 'profile.edit',
      beforeEnter: [auth, verified],
      component: () => import('@/views/Profile/EditView.vue')
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
