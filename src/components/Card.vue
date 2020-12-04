<template>
  <div class="p-2 flex" >
        <router-link 
        to="/"
        class="w-full"
        >
            <div class="mb-8 px-4">
                <div class="pb-5/6">
                    <img 
                        class="h-full w-full object-cover rounded-lg shadow-md"
                        src="https://via.placeholder.com/800x600.png?text=Hello+there" 
                        alt="Hero">
                </div>
            </div>
            <div class="relative px-4 -mt-16">
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <h4 
                    class="mt-1 font-hairline text-3xl text-gray-900 leading-tight truncate">
                        Hero Name
                    </h4>
                    <div class="mt-1">
                        Description
                    </div>
                    <div class="flex items-baseline mt-4"> 
                        <span
                            class=
                            "inline-block bg-green-200 text-teal-800 text-xs px-s rounded-full uppercase font-semibold tracking-wide"
                        >
                            <!-- {{ hero.biography.aligment }} -->
                            Something
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
}
</script>