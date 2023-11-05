import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { useRouter } from 'vue-router'
import axios from 'axios'

export const useAuth = defineStore('auth', () => {
  const router = useRouter()
  const accessToken = useStorage('access_token', '')
  const check = computed(() => !!accessToken.value)
  const user = reactive({
    name: '',
    email: '',
    emailVerifiedAt: ''
  })
  const isEmailVerified = computed(() => !!user.emailVerifiedAt)

  function setAccessToken(value) {
    accessToken.value = value
    window.axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken.value}`
  }

  function setUserDetails(userData) {
    user.name = userData.name
    user.email = userData.email
    user.emailVerifiedAt = userData.email_verified_at
  }

  async function getAuthUser() {
    await axios
      .get('/auth/user')
      .then((response) => {
        setUserDetails(response.data.data)
      })
      .catch((e) => {
        throw new Error(e)
      })
  }

  function login(data) {
    setAccessToken(data.access_token)
    setUserDetails(data.user)
    router.push({ name: 'posts.index' })
  }

  function destroyTokenAndRedirectTo(routeName = 'login') {
    setAccessToken(null)
    router.push({ name: routeName })
  }

  async function logout() {
    return window.axios.post('auth/logout').finally(() => {
      destroyTokenAndRedirectTo()
    })
  }

  return {
    user,
    isEmailVerified,
    login,
    logout,
    check,
    destroyTokenAndRedirectTo,
    getAuthUser
  }
})
