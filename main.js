new Vue({
  el: '#app',
  data: {
    message: 'Greetings!',
  },
  computed: {
    reverseMessage() {
      console.log('computed function run');
      return this.message
        .split('')
        .reverse()
        .join('');
    },
  },
});
