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
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  beforeUnmount() {
    console.log('beforeUnmount');
  },
  unmounted() {
    console.log('unmounted');
  }
};

const app = Vue.createApp(App)

app.mount('#app');

setTimeout(() => {
  app.unmount();
}, 10000);