<template>
  <div class="bg-green-800 min-h-screen">
    <nav-bar />
    <router-view />
  </div>
</template>

<script>
// import NavBar from '@/components/NavBar.vue';
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  },
}
</script>
