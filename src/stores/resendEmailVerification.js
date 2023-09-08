import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

export const useResendEmailVerification = defineStore('resend-email-verification', () => {
  const errors = reactive({})
  const status = ref('')
  const loading = ref(false)

  async function resendEmailVerification() {
    loading.value = true
    errors.value = {}
    status.value = ''

    return window.axios
      .post('auth/email/resend-verification-notification')
      .then((response) => {
        status.value = response.data.message
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        loading.value = false
      })
  }

  return {
    loading,
    errors,
    status,
    resendEmailVerification
  }
})
