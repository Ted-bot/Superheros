<template>
  <div class="p-2 flex transform ease-in-out duration-300 hover:scale-110" >
        <router-link 
        :to="`/hero/${hero.id}`" 
        class="w-full"
        >
            <div class="mb-8 px-4">
                <div class="pb-5/6">
                    <img 
                        class="h-full w-full object-cover rounded-lg shadow-md"
                        :src="hero.image.url" 
                        alt="Hero">
                </div>
            </div>

            <div class="relative px-4 -mt-16">
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <h4 
                    class="mt-1 font-hairline text-3xl text-gray-900 leading-tight truncate">
                        {{hero.name}}
                    </h4>
                    <div class="mt-1">
                        <span class="font-semibold">Real Name:</span>
                        {{ hero.biography['full-name'] }}
                    </div>
                    <div class="mt-1 font semi-bold"> 
                        <span class="font-semibold">Aliases: </span>
                        <span
                            v-for="(alias, index) in hero.biography.aliases"
                            :key="index"
                            class="font-normal"
                            >
                               {{index > 0 ? ',' : '' }} {{alias}}
                        </span>
                    </div>

                    <div class="mt-1">
                        <span class="font-semibold">Publisher:</span>
                        {{hero.biography.publisher}}
                    </div>
                    
                    <div class="flex items-baseline mt-4">
                        <span 
                        class="inline-block text-xs px-2 rounded-full uppercase font-semibold tracking-wide"
                        :class="
                            hero.biography.aligment === 'good'
                            ? 'bg-green-200 text-green-800'
                            : hero.biography.aligment === 'bad'
                            ? 'bg-red-200 text-red-800'
                            : 'bg-yellow-200 text-yellow-800'
                        "
                        >
                            {{ hero.biography.alignment }}
                        </span>                        
                    </div>
                </div>
            </div>
        </router-link>
        
  </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        hero: {
            type: Object,
            default: () => {}
        }
    }
}
</script>