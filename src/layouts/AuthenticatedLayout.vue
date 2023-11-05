<script setup>
import NavigationBar from '@/components/NavigationBar.vue'
import FooterContent from '@/components/FooterContent.vue'
</script>

<template>
  <!--  <header class="py-6 bg-gray-100 shadow">
    <div class="container md:px-2 px-4 mx-auto">
      <nav class="flex gap-4 justify-between">
        <div class="flex gap-4 items-center">
          <h2 class="text-xl font-bold">
            <div
              class="inline-flex items-center justify-center bg-blue-600 w-6 h-6 text-center text-white rounded"
            >
              L
            </div>
            aravuedium
          </h2>
          <template v-if="auth.check">
            <RouterLink class="router-link" :to="{ name: 'posts.index' }"> Posts</RouterLink>
          </template>
          <template v-else>
            <RouterLink class="router-link" :to="{ name: 'home' }"> Home</RouterLink>
          </template>
        </div>
        <div class="flex gap-4 items-center">
          <template v-if="auth.check">
            <RouterLink class="router-link" :to="{ name: 'profile.edit' }"> Profile</RouterLink>
            <RouterLink class="router-link" :to="{ name: 'profile.change-password' }">
              Change password
            </RouterLink>
            <button @click="auth.logout" class="router-link">Logout</button>
          </template>
          <template v-else>
            <RouterLink class="router-link" :to="{ name: 'login' }"> Login</RouterLink>
            <RouterLink class="router-link" :to="{ name: 'register' }"> Register</RouterLink>
          </template>
        </div>
      </nav>
    </div>
  </header>

  <div class="container md:px-2 px-4 pt-8 md:pt-16 mx-auto">
    <slot />
  </div>-->

  <body class="bg-gray-100">
    <!-- Navigation -->
    <NavigationBar />

    <main class="container max-w-xl mx-auto space-y-8 mt-8 px-2 md:px-0 min-h-screen">
      <div class="text-center p-12 border border-gray-800 rounded-xl">
        <h1 class="text-3xl justify-center items-center">Welcome to Laravuedium!</h1>
      </div>
      <!-- Page Slot -->
      <slot />
    </main>

    <!-- Footer -->
    <FooterContent />
  </body>
</template>
