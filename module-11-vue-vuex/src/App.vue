<template>
  <TheNavbar></TheNavbar>
  <div class="container with-nav">
    <div class="card">
      <h1>Про Vuex</h1>
      <h2>Счетчик {{ counter }}</h2>
      <button class="btn primary" @click="increment">Добавить</button>
      <button class="btn primary" @click="addAsync({ value: 100 })">Добавить асинхронно с задержкой</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import TheNavbar from './components/TheNavbar';
export default {
  components: { TheNavbar },
  computed: {
    ...mapGetters(['counter']),
  },
  methods: {
    ...mapMutations(['increment']),
    ...mapActions(['addAsync']),
  },
};
</script>
