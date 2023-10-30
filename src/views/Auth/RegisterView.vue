<script setup>
import { onBeforeUnmount } from 'vue'
import { useRegister } from '@/stores/register'
import GuestLayout from '@/layouts/GuestLayout.vue'

const store = useRegister()

onBeforeUnmount(store.resetForm)
</script>

<template>
  <GuestLayout>
    <template #header> Create a new account</template>
    <template #main>
      <form class="space-y-6" @submit.prevent="store.handleSubmit" novalidate>
        <!-- Name -->
        <div>
          <label for="name" class="required block text-sm font-medium leading-6 text-gray-900">
            Full Name
          </label>
          <div class="mt-2">
            <input
              v-model="store.form.name"
              id="name"
              name="name"
              type="text"
              autocomplete="name"
              :disabled="store.loading"
              required
              placeholder="Alp Arslan"
              class="block w-full rounded-md border-0 p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
            />
            <ValidationError :errors="store.errors" field="name" />
          </div>
        </div>

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
          <label for="password" class="required block text-sm font-medium leading-6 text-gray-900">
            Password
          </label>
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

        <!-- Confirm Password -->
        <div>
          <label for="password" class="required block text-sm font-medium leading-6 text-gray-900">
            Confirm Password
          </label>
          <div class="mt-2">
            <input
              v-model="store.form.password_confirmation"
              id="password_confirmation"
              name="password_confirmation"
              type="password"
              class="block w-full rounded-md border-0 p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
              autocomplete="confirm-password"
              :disabled="store.loading"
              placeholder="••••••••"
              required
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            :disabled="store.loading"
            class="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <IconSpinner v-show="store.loading" class="ml-1.5" />
            Register
          </button>
        </div>
      </form>
    </template>
    <template #links>
      <p class="mt-3 text-center text-sm text-gray-500">
        Already a member?
        <router-link to="/login" class="font-semibold leading-6 text-black hover:text-black">
          Sign In
        </router-link>
      </p>
    </template>
  </GuestLayout>
</template>
