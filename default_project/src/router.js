import Vue from 'vue';
import VueRouter from 'vue-router';
import PokemonCard from './components/PokemonCard';
import NotFound from './components/NotFound';
import Todos from './components/Todos';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: PokemonCard, props: { id: 1 } },
  { path: '/pokemons/:id', component: PokemonCard, props: true },
  { path: '/todos', component: Todos },
  { path: '*', component: NotFound },
];

export default new VueRouter({
  mode: 'history',
  routes,
});
