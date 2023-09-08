<script setup>
import { useResendEmailVerification } from '@/stores/resendEmailVerification'
import { useAuth } from '@/stores/auth'

const store = useResendEmailVerification()
const auth = useAuth()
</script>

<template>
  <form @submit.prevent="store.resendEmailVerification()">
    <div class="flex flex-col mx-auto md:w-96 w-full">
      <h1 v-if="auth.isEmailVerified" class="text-2xl font-bold mb-4 text-center">
        You email is already verified.
      </h1>
      <h1 v-else class="text-2xl font-bold mb-4 text-center">You must verify your email.</h1>
      <div class="alert alert-success mb-4" v-show="store.status">
        {{ store.status }}
      </div>
      <button type="submit" class="btn btn-primary" :disabled="store.loading">
        <IconSpinner class="animate-spin" v-show="store.loading" />
        Resend Email Verification
      </button>
    </div>
  </form>
</template>
