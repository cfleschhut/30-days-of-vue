<template>
  <div class="container">
    <div class="pokemon">
      <router-view></router-view>

      <div class="pokemon-links has-text-centered">
        <router-link to="/pokemons/1">Charizard</router-link>
        <router-link to="/pokemons/2">Blastoise</router-link>
        <router-link to="/pokemons/3">Venusaur</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style src="./styles.css">
</style>
