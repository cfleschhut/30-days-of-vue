<template>
  <div id="app">
    <NumberDisplay />
    <NumberSubmit />
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import NumberDisplay from "./components/NumberDisplay";
import NumberSubmit from "./components/NumberSubmit";

export default {
  name: "app",
  components: {
    HelloWorld,
    NumberDisplay,
    NumberSubmit
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
