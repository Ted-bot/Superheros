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

function getRoutesList(routes, pre) {
  return routes.reduce((array, route) => {
    const path = `${pre}${route.path}`;

    if (route.path !== "*") {
      array.push(path);
    }

    if (route.children) {
      array.push(...getRoutesList(route.children, `${path}/`));
    }

    return array;
  }, []);
}
getRoutesList(router.options.routes, "https://localhost:8080");

export default router;
