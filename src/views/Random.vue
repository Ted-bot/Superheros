<template>
    <div>
        <h1>Random Hero</h1>
        <button 
            class="bg-green-300 hover:bg-green-500 rounded font-bold py-2 px-4 rounded" 
            @click="put"
            >
                Get Random Hero            
        </button>
        <!-- <div> -->
            <div class="p-8 flex flex-wrap">
                <div class="left w-full h-full md:w-1/4">
                    <h1 class="w-full text-white text-2xl font-hairline pb-2">{{heroes.name}}</h1>
                    <img 
                        :src="heroes.images"
                        alt="heroes.name"
                        :key="heroes.id"
                        class="object-contain mb-4 rounded"
                        >
                </div>
                <div class="right w-full md:w-3/4 md:pl-4">
                    <Table class="" :content="heroes.powerstats" title="Power Stats" />
                    <Table class="" :content="heroes.biography" title="Biography" />
                </div>
            </div>
    </div>
</template>

<script>
import Table from '@/components/Table.vue';

export default {
    name: 'HeroRandom',
    components: {
        Table,
    },
    data() {
        return {
            heroes: this.$store.getters.getSingleHero,
        }
    },
    computed: {
        //make api request and push to state heroes
        start(heroes){
            return this.$store.commit('allHeroes', heroes)
        }
        ,
        //get state heroes
        randomHero(){
            // this.start;            
            return this.$store.state.singleHero
        }
    },
    methods: {
        put(x){
            console.log(this.hero);
            this.heroes = x;
        },
    },
    mounted: function () {
        this.start;
        this.randomHero;        
  } 
}
</script>

<style>

</style>