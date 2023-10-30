<script setup>
const handleLoginWithGithubButtonClick = () => {
  const url =
    'https://github.com/login/oauth/authorize?client_id=' +
    import.meta.env.VITE_APP_GITHUB_CLIENT_ID +
    '&state=github'
  window.open(url, '_self')
}
</script>
<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <router-link to="/" class="text-center text-6xl font-bold text-gray-900">
        <h1 class="text-4xl md:text-4xl lg:text-5xl xl:text-5xl">Laravuedium</h1>
      </router-link>
      <h1 class="mt-7 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        <slot name="header" />
      </h1>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <slot name="main" />
      <slot name="social-login">
        <div class="mt-2">
          <button
            @click="handleLoginWithGithubButtonClick"
            class="cursor-pointer flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Login With Github
          </button>
        </div>
      </slot>
      <slot name="links" />
    </div>
  </div>
</template>
