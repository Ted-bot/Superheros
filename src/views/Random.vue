<template>
    <div class="mt-2">
        <h1>Random Hero</h1>
        <button 
            class="bg-green-300 hover:bg-green-500 rounded font-bold py-2 px-4 rounded" 
            @click="putNewHero"
            >
                Get Random Hero            
        </button>
        <!-- <div> -->
            <div class="p-8 flex flex-wrap">
                <div class="left w-full h-full md:w-1/4">
                    <h1 class="w-full text-white text-2xl font-hairline pb-2">{{hero.name}}</h1>
                    <img 
                        :src="`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/${hero.slug}.jpg`"
                        alt="hero.name"
                        :key="hero.id"
                        class="object-contain mb-4 rounded"
                        >
                </div>
                <div class="right w-full md:w-3/4 md:pl-4">
                    <Table class="" :content="hero.powerstats" title="Power Stats" />
                    <Table class="" :content="hero.biography" title="Biography" />
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
    computed: {
        hero(){ 
            return this.$store.getters.getSingleHero
        },
        //make api request and push to state hero
        start(){
            return this.$store.commit('randomHero')
        },
        //get state hero
        randomHero(){          
            return this.$store.state.singleHero
        }
    },
    methods: {
        putNewHero(){
            console.log("Hi there");
            return this.$store.commit('randomHero')
        },
    },
    created: function () {
        this.start;
        this.randomHero;        
  } 
}
</script>