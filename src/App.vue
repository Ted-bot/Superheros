<template>
  <div class="bg-green-800 min-h-screen">
    <nav-bar />
    <div class="pt-20">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Footer
  }
};
</script>
