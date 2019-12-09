<template>
  <div>
    <h2>The numbers are {{ storeState.numbers }}!</h2>
  </div>
</template>

<script>
import { store } from "../store";

export default {
  name: "NumberDisplay",
  data() {
    return {
      storeState: store.state
    };
  }
};
</script>
