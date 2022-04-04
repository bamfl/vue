<template>
  <TheNavbar></TheNavbar>
  <div class="container with-nav">
    <div class="card">
      <h1>{{ mainTitleGlobal }}</h1>
      <h1>{{ mainTitle }}</h1>
      <h2>Счетчик {{ counter }}</h2>
      <button class="btn primary" @click="increment">Добавить</button>
      <button class="btn primary" @click="addHundred">Добавить асинхронно с задержкой</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import TheNavbar from './components/TheNavbar';

export default {
  components: { TheNavbar },
  computed: {
    ...mapGetters({ mainTitleGlobal: 'mainTitle' }),
    ...mapGetters('titles', ['mainTitle']),
    ...mapGetters('counter', ['counter']),
  },
  methods: {
    ...mapMutations('counter', ['increment']),
    ...mapActions('counter', ['addAsync']),
    addHundred() {
      this.addAsync({ value: 100 });
    },
  },
};
</script>
