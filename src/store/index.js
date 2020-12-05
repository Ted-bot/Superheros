import Vue from "vue";
import Vuex from "vuex";
import { search } from "../helpers/axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    heroes: [],
    searchItem: "",
    loading: false,
    notFound: false,
  },
  getters: {
    getHeroes: state => state.heroes,
    getHero: state => id => state.heroes.find(hero => hero.id === id),
    getSearchItem: state => state.searchItem,
    isLoading: state => state.loading,
    getNotFound: state => state.notFound,
  },
  mutations: {
    settingHeroes: (state, heroes) => (state.heroes = heroes),
    settingSearchItem: (state, searchItem) => (state.searchItem = searchItem),
    changingLoading: (state, status) => (state.loading = status),
    changingNotFound: (state, status) => (state.notFound = status),
    //get state and var someHeroes, push data from someHeroes to state
    addHeroes: async (state, someHeroes) => {
      //search for someHeroes and put in numberHeroes
      const numberHeroes = await search(someHeroes)   
      //change value numberHeroes in state heroes   
      // state.heroes.push(numberHeroes.data.results)
      state.heroes = numberHeroes.data.results
    }    
  },
  actions: {
    setHeroes: ({ commit}, data) => commit('settingHeroes', data),
    setSearchItem: async ({commit, dispatch}, searchItem) => {
      commit('settingSearchItem', searchItem)
      commit('changingLoading', true)
      const heroes = await search(searchItem)
      commit('changingLoading', false)
      heroes.data?.results
        ? dispatch("setHeroes", heroes.data.results)
        : dispatch("changeNotFound", true) && dispatch('setHeroes', [])
    },
    changeLoading: ({ commit}, status) => commit('changingLoading', status),
    changeNotFound: ({ commit}, status) => commit('changeNotFound', status),
    
  },
  modules: {}
});
