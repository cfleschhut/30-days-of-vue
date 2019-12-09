<template>
  <div>
    <h2>The numbers are {{ numbers }}!</h2>
  </div>
</template>

<script>
import { EventBus } from "../event-bus";

export default {
  name: "NumberDisplay",
  data() {
    return {
      numbers: [1, 2, 3]
    };
  },
  created() {
    EventBus.$on("number-added", number => {
      this.numbers.push(number);
    });
  }
};
</script>
