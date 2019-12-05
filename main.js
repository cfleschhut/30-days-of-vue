let renderComponent = {
  render(h) {
    return h(
      'div',
      {
        attrs: {
          class: 'render-card',
        },
      },
      [
        h(
          'header',
          {
            attrs: {
              class: 'card-header card-header-title',
            },
          },
          this.message,
        ),
      ],
    );
  },
  props: ['message'],
};

let multiLineTemplate = {
  template: `
    <div class="card">
      <header class="card-header card-header-title">
        {{ message }}
      </header>
    </div>
   `,
  props: ['message'],
};

const localComponent = {
  template: `<p>{{message}}</p>`,
  data() {
    return {
      message: 'Hello World!',
    };
  },
};

let counterOne = {
  template: `
    <button class="component-button" @click="counter++">
      You clicked me {{counter}} times
    </button>
  `,
  data() {
    return {
      counter: 0,
    };
  },
};

Vue.component('tweet-content', {
  props: ['tweet'],
  template: `
  <div class="media-content">
    <div class="content">
      <p>
        <strong>{{tweet.name}}</strong>
        <small>{{tweet.handle}}</small>
        <br />
        {{tweet.tweet}}
      </p>
    </div>
    <div class="level-left">
      <a class="level-item">
        <span class="icon is-small">
          <i class="fas fa-heart"></i>
        </span>
        <span class="likes">
          {{tweet.likes}}
        </span>
      </a>
      <a class="level-item" @click="$emit('add', tweet)">
        <span class="icon is-small">
          <i class="fas fa-plus"></i>
        </span>
      </a>
    </div>
  </div>
  `,
});

Vue.component('tweet-component', {
  props: {
    tweet: {
      type: Object,
      required: true,
    },
  },
  template: `
  <div class="tweet">
    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img :src="tweet.img" />
          </figure>
        </div>
        <tweet-content :tweet="tweet" @add="$emit('add', $event)" />
      </article>
    </div>
    <div class="control has-icons-left">
      <input class="input is-small" placeholder="Tweet your reply..." />
      <span class="icon is-small is-left">
        <i class="fas fa-envelope"></i>
      </span>
    </div>
  </div>
  `,
});

const tweets = [
  {
    id: 1,
    name: 'James',
    handle: '@jokerjames',
    img: './images/james.png',
    tweet: "If you don't succeed, dust yourself off...",
    likes: 10,
  },
  {
    id: 2,
    name: 'Fatima',
    handle: '@fantasticfatima',
    img: './images/fatima.png',
    tweet: 'Better late than never but never late...',
    likes: 12,
  },
  {
    id: 3,
    name: 'Xin',
    handle: '@xeroxin',
    img: './images/xin.png',
    tweet: 'Beauty in the struggle...',
    likes: 18,
  },
];

new Vue({
  el: '#app',
  data: {
    tweets,
    message: 'Greetings!',
  },
  methods: {
    addTweetMessage(tweet) {
      const lastTweetObjectID = this.tweets[this.tweets.length - 1].id;
      const newTweet = { ...tweet, id: lastTweetObjectID + 1 };

      this.tweets.push(newTweet);
    },
  },
  components: {
    'render-component': renderComponent,
    'local-component': localComponent,
    'counter-one': counterOne,
    'multi-line-template': multiLineTemplate,
  },
});
