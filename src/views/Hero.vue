<template>
    <div class="p-8 flex flex-wrap">
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
        </div>
        <router-link
            to="/"
            class="bg-yellow-500 hover:bg-yellow-700 font-bold py-2 px-4 rounded"
        >
            Go Back
        </router-link>
    </div>
</template>

<script>
import Table from '@/components/Table.vue';

export default {
    name: 'HeroDetails',
    components: {
        Table,
    },
    computed: {
        hero(){
            return this.$store.getters.getHero(this.$route.params.id)
        }
    }
}

</script>