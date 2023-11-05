<script setup>
import NavigationBar from '@/components/NavigationBar.vue'
import FooterContent from '@/components/FooterContent.vue'
</script>

<template>
  <body class="bg-gray-100">
    <!-- Navigation -->
    <NavigationBar />

    <main class="container max-w-xl mx-auto space-y-8 mt-8 px-2 md:px-0 min-h-screen">
      <!-- Page Slot -->
      <slot />
    </main>

    <!-- Footer -->
    <FooterContent />
  </body>
</template>
