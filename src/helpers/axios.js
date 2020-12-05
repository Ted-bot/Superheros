import axios from 'axios'

const api = axios.create({
    baseURL: process.env.VUE_APP_APIURL,
})

//export as function
export const search = searchItem => api(`search/${searchItem}`)

export const get = searchItem => api(`id/${searchItem}`)