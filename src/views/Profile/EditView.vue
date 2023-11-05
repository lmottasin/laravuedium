<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
import { useProfile } from '@/stores/profile'
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout.vue'

const store = useProfile()

onMounted(store.fetchProfile)
onBeforeUnmount(store.resetForm)
</script>

<template>
  <!--  <AuthenticatedLayout>
    <form @submit.prevent="store.updateProfile">
      <div class="flex flex-col mx-auto md:w-96 w-full">
        <h1 class="text-2xl font-bold mb-4 text-center">Edit profile</h1>

        <div class="flex flex-col gap-2 mb-4">
          <label for="name" class="required">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            class="form-input"
            v-model="store.form.name"
            :disabled="store.loading"
          />
          <ValidationError :errors="store.errors" field="name" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="email" class="required">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            class="form-input"
            v-model="store.form.email"
            :disabled="store.loading"
          />
          <ValidationError :errors="store.errors" field="email" />
        </div>

        <div class="border-t h-[1px] my-6"></div>

        <button type="submit" class="btn btn-primary" :disabled="store.loading">
          <IconSpinner class="animate-spin" v-show="store.loading" />
          Update profile
        </button>
      </div>
    </form>
  </AuthenticatedLayout>-->

  <AuthenticatedLayout>
    <form @submit.prevent="store.updateProfile">
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-xl font-semibold leading-7 text-gray-900">Edit Profile</h2>
          <div class="alert alert-success mb-4" v-show="store.status">
            {{ store.status }}
          </div>
          <p class="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>

          <div class="mt-10 pb-12">
            <div class="col-span-full mt-10 pb-10">
              <label for="photo" class="block text-sm font-medium leading-6 text-gray-900">
                Photo
              </label>
              <div class="mt-2 flex items-center gap-x-3">
                <input class="hidden" type="file" name="avatar" id="avatar" />
                <img
                  class="h-12 w-12 rounded-full"
                  src="https://avatars.githubusercontent.com/u/831997"
                  alt="Ahmed Shamim Hasan Shaon"
                />
                <svg
                  class="h-12 w-12 text-gray-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <label for="avatar">
                  <div
                    class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    Change
                  </div>
                </label>
              </div>
            </div>

            <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="col-span-full">
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">
                  Name
                </label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    v-model="store.form.name"
                    :disabled="store.loading"
                    class="form-input"
                  />
                  <ValidationError :errors="store.errors" field="name" />
                </div>
              </div>

              <div class="col-span-full">
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div class="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="form-input"
                    v-model="store.form.email"
                    :disabled="store.loading"
                  />
                  <ValidationError :errors="store.errors" field="email" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button
          @click="store.cancelFrom"
          type="button"
          class="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button :disabled="store.loading" type="submit" class="submit-button">
          <IconSpinner class="animate-spin" v-show="store.loading" />
          Save
        </button>
      </div>
    </form>
  </AuthenticatedLayout>
</template>
