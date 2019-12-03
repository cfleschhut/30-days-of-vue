new Vue({
  el: '#app',
  data: {
    greeting: 'Hello World!',
    user: 'Hassan Djirdeh',
    city: 'Toronto',
    cityImage: 'https://bit.ly/2SKJPqJ',
    numbers: [
      { id: 1, value: 1 },
      { id: 2, value: 10 },
      { id: 3, value: 100 },
      { id: 4, value: 1000 },
      { id: 5, value: 10000 },
    ],
  },
  methods: {
    changeGreeting() {
      this.greeting =
        this.greeting === 'Hello World!' ? 'What is up!' : 'Hello World!';
    },
    shuffle() {
      this.numbers = _.shuffle(this.numbers);
    },
  },
});
