<template>
  <div id="app">
    <div class="container">
      <div class="pokemon">
        <PokemonCard pokemon="charizard" />
      </div>
    </div>
  </div>
</template>

<script>
import BlastoiseCard from "./components/BlastoiseCard";

export default {
  name: "app",
  components: {
    PokemonCard: BlastoiseCard
  }
};
</script>

<style src="./styles.css">
</style>
