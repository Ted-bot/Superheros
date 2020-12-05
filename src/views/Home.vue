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
      <button @click="sortList(heroName)" >Sort list</button>
       <div v-if="searchItem && heroes.length > 0" class="w-full flex flex-wrap overflow-y-auto"> 
        <Card 
          class="sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 p-2" 
          v-for="hero in heroes" 
          :key="hero.id" 
          :hero="hero"
        />
       </div> 

       <div v-else-if="heroes.length > 0" class="w-full flex flex-wrap overflow-y-auto"> 
        <Card 
          class="sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-2"
          v-for="hero in heroes.slice(1, 11)" 
          :key="hero.id" 
          :hero="hero"
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
  data() {
    return {
      someHeroes: 'spider',
      heroName: this.$store.getters.getHeroesName
    }
  },
  computed: {
    searchItem() {
      return this.$store.getters.getSearchItem    
      },
    heroes() {
      return this.$store.getters.getHeroes 
    },
    fetchData(someHeroes) {
      console.log(someHeroes._data.someHeroes);
      // heroes();
      return this.$store.commit("addHeroes", someHeroes._data.someHeroes);
    }
  },
  methods: {
    setSearchItem(event) {
      this.$store.dispatch('setSearchItem', event.target.value);
    },
    sortList(heroName) {
      console.log(heroName)
        }
  },
  mounted: function () {
    this.fetchData;
    this.heroes;
  }
};
</script>
