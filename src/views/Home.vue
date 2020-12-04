<template>
  <div>
    <label class="block px-2 pt-1 md:px-16 md:pt-8">
      <input 
        :value="searchItem"
        type="text"
        class="form-input mt-1 1 block w-full"
        placeholder="Search a Superhero, example: Spiderman"
        @change="setSearchItem"
      >
        
    </label>
    <div class="flex flex-col flex-wrap justify-center items-center">
      <h1 
        v-if="searchItem"
        class="w-full text-center px-4 md:px-16 text-green-200 font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
      >
      <span class="font-hairline">Showing results for</span>
        "{{ searchItem }}"
      </h1>
       <div v-if="searchItem && heroes.length > 0" class="w-full flex-1 flex-warp"> 
        <Card 
          class="sm:1/2 md:1/2 lg:w-1/4 xl:w-1/4 p-2" 
          v-for="hero in heroes" 
          :key="hero.id" 
        />
       </div> 
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "Home",
  components : {
    Card,
  },
  computed: {
    searchItem() {
      return this.$store.getters.getSearchItem    
      },
    heroes() {
      return this.$store.getters.getHeroes 
    }
  },
  methods: {
    setSearchItem(event) {
      this.$store.dispatch('setSearchItem', event.target.value);
    }
  }
};
</script>
