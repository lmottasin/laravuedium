import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { useRouter } from 'vue-router'

export const useAuth = defineStore('auth', () => {
  const router = useRouter()
  const accessToken = useStorage('access_token', '')
  const check = computed(() => !!accessToken.value)
  const emailVerifiedAt = ref('')
  const name = ref('')
  const email = ref('')
  const isEmailVerified = computed(() => !!emailVerifiedAt.value)

  function setAccessToken(value) {
    accessToken.value = value
    window.axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken.value}`
  }

  function setUserDetails(userData) {
    console.log(userData, 'parameter')
    name.value = userData.name
    email.value = userData.email
    emailVerifiedAt.value = userData.email_verified_at

    console.log('pinia state value', [name.value, email.value, emailVerifiedAt.value])
  }

  function login(data) {
    setAccessToken(data.access_token)
    console.log('form logoin method', data.user)
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

  return { login, logout, check, destroyTokenAndRedirectTo, isEmailVerified, setUserDetails }
})
