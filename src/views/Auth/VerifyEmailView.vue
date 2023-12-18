<script setup>
import { useResendEmailVerification } from '@/stores/resendEmailVerification'
import { useAuth } from '@/stores/auth'
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout.vue'
import { Icon } from '@iconify/vue'

const store = useResendEmailVerification()
const auth = useAuth()
</script>

<template>
  <AuthenticatedLayout>
    <!--    <form @submit.prevent="store.resendEmailVerification()">
      <div class="flex flex-col mx-auto md:w-96 w-full">
        <h1 class="text-2xl font-bold mb-4 text-center">You must verify your email.</h1>


      </div>
    </form>-->
    <main class="container max-w-2xl mx-auto space-y-8 mt-8 px-2 min-h-screen">
      <section
        class="bg-white border-2 p-8 border-gray-800 rounded-xl min-h-[400px] space-y-8 flex items-center flex-col justify-center"
      >
        <form @submit.prevent="store.resendEmailVerification()">
          <div class="alert alert-success mb-4" v-show="store.status">
            {{ store.status }}
          </div>
          <div class="flex gap-4 justify-center flex-col text-center items-center">
            <div>
              <h1 class="font-bold md:text-2xl">Please Verify Your Email</h1>
              <p class="text-gray-700">A email is already sent. If not found check spam folder.</p>
            </div>
          </div>
          <button
            type="submit"
            class="mt-5 hover:cursor-pointer flex items-center justify-center px-3 gap-2 rounded-full py-2 font-semibold bg-gray-100 hover:bg-gray-200 text-gray-700"
            :disabled="store.loading"
          >
            <IconSpinner class="animate-spin" v-if="store.loading" />
            <Icon icon="mdi:email-resend" class="text-current" v-else />
            Resend Verification Email
          </button>
        </form>
      </section>
    </main>
  </AuthenticatedLayout>
</template>
