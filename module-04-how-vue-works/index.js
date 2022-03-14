const App = {
  data() {
    return {
      text: 'Test'
    };
  },
  template: `
    <div class="card">
      <h1>{{ text }}</h1>
      <button @click="text = 'Изменено'">Изменить текст</button>
    </div>
  `
};

Vue.createApp(App).mount('#app');
