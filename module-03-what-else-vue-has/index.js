const App = {
  data() {
    return {
      title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      myHtml: '<h3>My Html</h3>',
      items: [1, 2, 3, 4, 5, 6]
    }
  }
}

Vue.createApp(App).mount('#app');