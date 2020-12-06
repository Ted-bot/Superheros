import axios from 'axios'

const api = axios.create({
    baseURL: process.env.VUE_APP_APIURL,
})

//export as function
// const search is function called searchItem that takes a value for the api func
export const search = searchItem => api(`search/${searchItem}`)

// export const get = comicHeroes => ;