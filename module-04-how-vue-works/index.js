const h = Vue.h;

const App = {
  data() {
    return {
      text: 'Test'
    };
  },
  // template: `
  //   <div class="card">
  //     <h1>{{ text }}</h1>
  //     <button @click="text = 'Изменено'">Изменить текст</button>
  //   </div>
  // `,
  methods: {
    changeTitle() {
      this.text = 'Изменено';
    }
  },
  render() {
    return h('div', {class: 'card'}, [
      h('h1', {}, this.text),
      h('button', {onClick: this.changeTitle}, 'Изменить')
    ])
  }
};

Vue.createApp(App).mount('#app');
