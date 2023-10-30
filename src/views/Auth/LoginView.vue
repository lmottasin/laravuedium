<script setup>
import { onBeforeUnmount } from 'vue'
import { useLogin } from '@/stores/login'
import GuestLayout from '@/layouts/GuestLayout.vue'

const store = useLogin()

onBeforeUnmount(store.resetForm)
</script>

<template>
  <GuestLayout>
    <template #header>Sign in to your account</template>
    <template #main>
      <form class="space-y-6" @submit.prevent="store.handleSubmit" novalidate>
        <!-- Email -->
        <div>
          <label for="email" class="required block text-sm font-medium leading-6 text-gray-900">
            Email address
          </label>
          <div class="mt-2">
            <input
              v-model="store.form.email"
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              :disabled="store.loading"
              required
              placeholder="lmottasin@gmail.com"
              class="block w-full rounded-md border-0 p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
            />
            <ValidationError :errors="store.errors" field="email" />
          </div>
        </div>

        <!-- Password -->
        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="required block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div class="text-sm">
              <router-link to="/" class="font-semibold text-black hover:text-black"
                >Forgot password?
              </router-link>
            </div>
          </div>
          <div class="mt-2">
            <input
              v-model="store.form.password"
              id="password"
              name="password"
              type="password"
              class="block w-full rounded-md border-0 p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
              autocomplete="new-password"
              :disabled="store.loading"
              placeholder="••••••••"
              required
            />
            <ValidationError :errors="store.errors" field="password" />
          </div>
        </div>

        <!-- Remember Me -->
        <div>
          <label
            for="rememberMe"
            class="text-sm font-medium leading-6 text-gray-900 flex items-center hover:cursor-pointer"
          >
            <span class="text-sm text-gray-900">Remember me</span>
            <span class="ml-2">
              <input
                id="rememberMe"
                v-model="store.form.remember"
                type="checkbox"
                :disabled="store.loading"
                class="h-5 w-5 text-black focus:ring-black border-gray-300 rounded align-middle"
              />
            </span>
          </label>
          <ValidationError :errors="store.errors" field="remember" />
        </div>

        <div>
          <button
            type="submit"
            :disabled="store.loading"
            class="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <IconSpinner v-show="store.loading" class="ml-1.5" />
            Sign In
          </button>
        </div>
      </form>
    </template>
    <template #links>
      <p class="mt-3 text-center text-sm text-gray-500">
        Don't have an account yet?
        <router-link to="/register" class="font-semibold leading-6 text-black hover:text-black">
          Sign Up
        </router-link>
      </p>
    </template>
  </GuestLayout>
</template>
