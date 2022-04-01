<template>
  <TheNavbar></TheNavbar>
  <div class="container with-nav">
    <div class="card">
      <h1>Про Vuex</h1>
      <h2>Счетчик {{ counter }}</h2>
      <button class="btn primary" @click="increment">Добавить</button>
      <button class="btn primary" @click="addNumAsync">Добавить асинхронно с задержкой</button>
    </div>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar';
export default {
  components: { TheNavbar },
  computed: {
    counter() {
      return this.$store.getters.counter;
    },
  },
  methods: {
    increment() {
      this.$store.commit('increment');
    },
    addNumAsync() {
      this.$store.dispatch('addAsync', {value: 100})
    }
  },
};
</script>
