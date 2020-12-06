import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Hero from "../views/Hero.vue";
import Random from "../views/Random.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/hero/:id",
    name: "HeroDetails",
    component: Hero
  },
  {
    path: "/random",
    name: "HeroRandom",
    component: Random
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
