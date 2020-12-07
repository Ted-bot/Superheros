<template>
  <nav class="flex items-center justify-between flex-wrap bg-green-900 p-6 fixed w-full z-10">      
      <router-link to="/" class="flex items-center flex-shrink-0 text-white mr-6">
          <img class="h-8 mr-4" src="shield.png" alt="logo">
      <span class="font-semibold text-xl tracking-tight">
          ComicHeroes
          <span class="font-light">Explorer</span>
      </span>
      </router-link>

      <div class="flex float right">
          <router-link 
            class="bg-green-300 hover:bg-green-500 rounded font-bold py-2 px-4 rounded" 
            to="/"
            >
            categories
            </router-link>
          <router-link 
            class="bg-green-100 hover:bg-green-500 rounded font-bold py-2 px-4 rounded" 
            to="/random"
            >
            Random
            </router-link>
      </div>
  </nav>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>
