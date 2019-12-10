<template>
  <div class="card has-text-weight-bold has-text-white" :class="[`card--${pokemon}`]">
    <div class="card-image">
      <div class="card-image-container">
        <img
          :src="`http://static.pokemonpets.com/images/monsters-images-800-800/${getPokemon.imageTag}`"
        />
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
const pokemonData = {
  charizard: {
    name: "Charizard",
    imageTag: "6-Charizard.png",
    hp: 78,
    type: "🔥",
    weight: 199,
    height: 1.7
  },
  blastoise: {
    name: "Blastoise",
    imageTag: "9-Blastoise.png",
    hp: 79,
    type: "💧",
    weight: 223,
    height: 1.6
  },
  venusaur: {
    name: "Venusaur",
    imageTag: "8003-Mega-Venusaur.png",
    hp: 80,
    type: "🍃",
    weight: 220,
    height: 2.0
  }
};

export default {
  name: "BlastoiseCard",
  props: ["pokemon"],
  computed: {
    getPokemon() {
      return pokemonData[this.pokemon];
    }
  }
};
</script>
