<template>  
  <div class="bg-green-700 flex justify-center py-4">
    <div>
      <h1 class="bg-green-200 w-max rounded px-20">Site Map</h1>
      <tbody v-for="item in index" :key="item.length">
        <tr v-for="loc in item" :key="loc.length">
          <td>
            <a :href="`${loc.loc}`" :key="loc.length" class="no-underline list-none hover:underline text-gray-800">
              {{ loc["loc"]  }}
            </a>
          </td>
        </tr>
      </tbody>
    </div>
    
  </div>
  
</template>

<script>
import axios from 'axios';
const parseString = require("xml2js").parseString;

export default {
    name: "Footer",
    data() {
        return {
          index: []
        }
    },
    mounted() {
        axios
          .get("http://localhost:8080/sitemap.xml")
          .then((response) => {
          const self = this;
          parseString(response.data, function(err, result) {
            console.log(result.urlset.value);
          // self.paths = result;
          self.index = result.urlset;
        });
      })
    }
}
</script>
    
<style>

</style>

