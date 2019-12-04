new Vue({
  el: '#app',
  data: {
    name: 'Loading…',
    email: 'Loading…',
    company: {
      name: 'Loading…',
      catchPhrase: 'Loading…',
    },
  },
  created() {
    axios.get('http://jsonplaceholder.typicode.com/users').then(({ data }) => {
      const randomUser = data[Math.floor(Math.random() * data.length)];

      this.name = randomUser.name;
      this.email = randomUser.email;
      this.company.name = randomUser.company.name;
      this.company.catchPhrase = randomUser.company.catchPhrase;
    });
  },
  mounted() {
    console.log(this.$el);
  },
  updated() {
    console.log(this.$el);
  },
});
