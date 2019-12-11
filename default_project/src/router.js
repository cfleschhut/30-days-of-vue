import Vue from 'vue';
import VueRouter from 'vue-router';
import PokemonCard from './components/PokemonCard';
import NotFound from './components/NotFound';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: PokemonCard, props: { id: 1 } },
  { path: '/pokemons/:id', component: PokemonCard, props: true },
  { path: '*', component: NotFound },
];

export const router = new VueRouter({
  mode: 'history',
  routes,
});
