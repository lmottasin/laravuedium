<script setup>
import { onBeforeUnmount } from 'vue'
import { useChangePassword } from '@/stores/changePassword'
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout.vue'

const store = useChangePassword()

onBeforeUnmount(store.resetForm)
</script>

<template>
  <AuthenticatedLayout>
    <form @submit.prevent="store.updatePassword">
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-xl font-semibold leading-7 text-gray-900">Password Change</h2>
          <div class="alert alert-success mb-4" v-show="store.status">
            {{ store.status }}
          </div>
          <div class="mt-10 pb-12">
            <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="col-span-full">
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">
                  Current Password
                </label>
                <div class="mt-2">
                  <input
                    type="password"
                    name="current_password"
                    id="current_password"
                    class="form-input"
                    v-model="store.form.current_password"
                    :disabled="store.loading"
                  />
                  <ValidationError :errors="store.errors" field="current_password" />
                </div>
              </div>
              <div class="col-span-full">
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">
                  New Password
                </label>
                <div class="mt-2">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    class="form-input"
                    v-model="store.form.password"
                    :disabled="store.loading"
                  />
                  <ValidationError :errors="store.errors" field="password" />
                </div>
              </div>
              <div class="col-span-full">
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">
                  Confirm New Password
                </label>
                <div class="mt-2">
                  <input
                    type="password"
                    name="password_confirmation"
                    id="password_confirmation"
                    class="form-input"
                    v-model="store.form.password_confirmation"
                    :disabled="store.loading"
                  />
                  <ValidationError :errors="store.errors" field="password" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button
          @click="store.resetForm()"
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
