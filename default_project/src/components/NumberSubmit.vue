<template>
  <div>
    <input type="number" v-model="number" />
    <button @click="addNumber">Add new number</button>
  </div>
</template>

<script>
import { EventBus } from "../event-bus";

export default {
  name: "NumberSubmit",
  data() {
    return {
      number: 0
    };
  },
  methods: {
    addNumber() {
      EventBus.$emit("number-added", Number(this.number));
    }
  }
};
</script>
