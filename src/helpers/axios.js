import axios from 'axios'

const api = axios.create({
    baseURL: process.env.VUE_APP_APIURL,
})

const heroesJSON = axios.get(
        'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json'
    ).then(response =>{
        // console.log(response.data);
        return response.data;

})

//export as function
// const search is function called searchItem that takes a value for the api func
export const search = searchItem => api(`search/${searchItem}`)

export const get = heroesJSON;