<template>
    <div>
        <h1>Push the Button to get Random Hero</h1>
        <!-- <button 
            class="bg-green-300 hover:bg-green-500 rounded font-bold py-2 px-4 rounded" 
            @click="randomHero"
            >
                Get Random Hero            
        </button> -->
        <div>
            Random Hero
             <!-- <div class="p-8 flex flex-wrap">
                <div class="left w-full h-full md:w-1/4">
                <h1 class="w-full text-white text-2xl font-hairline pb-2">{{hero.name}}</h1>
                <img 
                :src="hero.image.url" 
                alt="hero.name"
                class="object-contain mb-4 rounded"
                >
                </div>        
                <div class="right w-full md:w-3/4 md:pl-4">
                    <Table class="" :content="hero.powerstats" title="Power Stats" />
                    <Table class="" :content="hero.biography" title="Biography" />
                </div> -->
            </div>
    </div>
</template>

<script>

export default {
    name: 'HeroRandom',
    data() {
        return {
            heroes: []
        }
    },
    computed: {
        randomHero(heroes){
            console.log(heroes);
            // return data;
            return this.$store.commit('randomHeroes', heroes)
        }
    },
    methods: {
        pushHeroes() {
            let heroesObjects = this.heroes;
            console.log(heroesObjects);
        },
        
    },
    mounted: function () {
        this.randomHero
  } 
}
</script>

<style>

</style>