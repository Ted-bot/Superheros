<template>
  <nav class="flex items-center justify-between flex-wrap bg-green-900 p-6">      
      <router-link to="/" class="flex items-center flex-shrink-0 text-white mr-6">
          <img class="h-8 mr-4" src="shield.png" alt="logo">
      <span class="font-semibold text-xl tracking-tight">
          ComicHeroes
          <span class="font-light">Explorer</span>
      </span>
      </router-link>
  </nav>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>
