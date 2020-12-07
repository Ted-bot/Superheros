import Vue from "vue";
import Vuex from "vuex";
import { search, get } from "../helpers/axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    heroes: [],
    singleHero: [],
    searchItem: "",
    loading: false,
    notFound: false,
    selectedHero: {}
  },
  getters: {
    getHeroes: state => state.heroes,
    getSingleHero: state => state.singleHero,
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
    //get state and var someHeroes, push data from someHeroes to state
    addHeroes: async (state, someHeroes) => {
      //search for someHeroes and put in numberHeroes
      const numberHeroes = await search(someHeroes);
      //change value numberHeroes in state heroes
      // state.heroes.push(numberHeroes.data.results)
      state.heroes = numberHeroes.data.results;
    },
    sortHeroes: (state, heroName) => {
      // put hero name in const heroesName
      const heroesName = heroName;
      // use sortfunction on heroesName to compare object
      heroesName.sort((a, b) => {
        let compare = 0;
        if (a.id > b.id) {
          compare = -1;
        } else if (b.id > a.id) {
          compare = 1;
        }
        return compare;
      });
      heroName = heroesName;
      console.log(heroName);
      state.heroes = heroName;
    },
    randomHero: async (state, heroes) => {
      heroes = await get;
      state.heroes = heroes;
      let countHeroes = Math.floor(Math.random() * heroes.length);
      // console.log(countHeroes);
      state.selectedHero = state.heroes[countHeroes];
      state.singleHero = state.selectedHero;
    }
  },
  actions: {
    getNewRandomHero: ({ commit }) => commit("randomHero"),
    setHeroes: ({ commit }, data) => commit("settingHeroes", data),
    setSearchItem: async ({ commit, dispatch }, searchItem) => {
      commit("settingSearchItem", searchItem);
      commit("changingLoading", true);
      const heroes = await search(searchItem);
      commit("changingLoading", false);
      heroes.data?.results
        ? dispatch("setHeroes", heroes.data.results)
        : dispatch("changeNotFound", true) && dispatch("setHeroes", []);
    },
    getRandomHero: ({ commit }, randomName) => {
      commit("allHeroes", randomName);
    },
    changeLoading: ({ commit }, status) => commit("changingLoading", status),
    changeNotFound: ({ commit }, status) => commit("changeNotFound", status)
  }
  // modules: {}
});
