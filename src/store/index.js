import Vue from "vue";
import Vuex from "vuex";
import { searchForHero, getHero } from "../helpers/axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    heroes: [],
    randomHero: [],
    searchItem: "",
    loading: false,
    notFound: false
  },
  getters: {
    getHeroes: state => state.heroes,
    getRandomHero: state => state.randomHero,
    getHero: state => id => state.heroes.find(hero => hero.id === id),
    getSearchItem: state => state.searchItem,
    isLoading: state => state.loading,
    getNotFound: state => state.notFound
  },
  mutations: {
    settingHeroes: (state, heroes) => (state.heroes = heroes),
    settingSearchItem: (state, searchItem) => (state.searchItem = searchItem),
    changingLoading: (state, status) => (state.loading = status),
    changingNotFound: (state, status) => (state.notFound = status),
    addHeroes: (state, data) => (state.heroes = data),
    sortHeroes: (state, sortHeroes) => (state.heroes = sortHeroes),
    randomHero: (state, heroes) => (state.randomHero = heroes)
    
  },
  actions: {
    setRandomHero: async ({ commit }, random) => {
      random = await getHero;
      let countHeroes = Math.floor(Math.random() * random.length);
      random = random[countHeroes];
      commit("randomHero", random);
    },
    setHeroes: ({ commit }, data) => commit("settingHeroes", data),
    setSearchItem: async ({ commit, dispatch }, searchItem) => {
      commit("settingSearchItem", searchItem);
      commit("changingLoading", true);
      const heroes = await searchForHero(searchItem);
      commit("changingLoading", false);
      heroes.data?.results
        ? dispatch("setHeroes", heroes.data.results)
        : dispatch("changeNotFound", true) && dispatch("setHeroes", []);
    },
    setAddHeroes: async ({commit}, data) => {
      const numberHeroes = await searchForHero(data);
      //change value numberHeroes in state heroes
      data = numberHeroes.data.results;
      commit("addHeroes", data)
    },
    setSortHeroes: ({commit}, data) => {
      const heroesName = data;
      // use sortfunction to compare objects id
      heroesName.sort((a, b) => {
        let compare = 0;
        if (a.id > b.id) {
          compare = -1;
        } else if (b.id > a.id) {
          compare = 1;
        }
        return compare;
      });
      data = heroesName;
      commit("sortHeroes", data)
    },
    changeLoading: ({ commit }, status) => commit("changingLoading", status),
    changeNotFound: ({ commit }, status) => commit("changeNotFound", status)
  }
  // modules: {}
});
