const App = {
  data() {
    return {
      title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      myHtml: '<h3>My Html</h3>'
    }
  }
}

Vue.createApp(App).mount('#app');