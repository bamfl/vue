const App = {
  data() {
    return {
      title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      myHtml: '<h3>My Html</h3>',
      items: [1, 2],
    };
  },
  computed: {
    evenItems() {
      return this.items.filter((item) => item % 2 === 0);
    },
  },
};

Vue.createApp(App).mount('#app');
