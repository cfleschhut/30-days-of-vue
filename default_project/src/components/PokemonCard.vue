<template>
  <div class="card has-text-weight-bold has-text-white" :class="[`card--${getPokemon.name}`]">
    <div class="card-image">
      <div class="card-image-container">
        <img v-show="getPokemon.name === 'blastoise'" src="../assets/blastoise.png" />
        <img v-show="getPokemon.name === 'charizard'" src="../assets/charizard.png" />
        <img v-show="getPokemon.name === 'venusaur'" src="../assets/venusaur.png" />
      </div>
    </div>
    <div class="card-content has-text-centered">
      <div class="main">
        <div class="title has-text-white">{{ getPokemon.name }}</div>
        <div class="hp">hp {{ getPokemon.hp }}</div>
      </div>
      <div class="stats columns is-mobile">
        <div class="column has-text-centered">
          {{ getPokemon.type }}
          <br />
          <span class="tag">Type</span>
        </div>
        <div class="column has-text-centered center-column">
          {{ getPokemon.weight }} lbs
          <br />
          <span class="tag">Weight</span>
        </div>
        <div class="column has-text-centered">
          {{ getPokemon.height }} m
          <br />
          <span class="tag">Height</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const pokemonData = [
  {
    id: 1,
    name: "charizard",
    hp: 78,
    type: "🔥",
    weight: 199,
    height: 1.7
  },
  {
    id: 2,
    name: "blastoise",
    hp: 79,
    type: "💧",
    weight: 223,
    height: 1.6
  },
  {
    id: 3,
    name: "venusaur",
    hp: 80,
    type: "🍃",
    weight: 220,
    height: 2.0
  }
];

export default {
  name: "PokemonCard",
  props: ["id"],
  computed: {
    getPokemon() {
      return pokemonData.find(pokemon => pokemon.id === Number(this.id));
    }
  }
};
</script>
