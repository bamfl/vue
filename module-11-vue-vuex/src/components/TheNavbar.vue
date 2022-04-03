<template>
  <header class="navbar">
    <div>Vuex {{ counter }} ({{ doubleCounter }})</div>
    <button class="btn" @click="addNum({ value: 10 })">Добавить 10</button>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters('counter', ['counter', 'doubleCounter']),
  },
  methods: {
    ...mapMutations('counter', ['addNum']),
    // or
    // ...mapMutations(['addNum']),
    // addTen() {
    //   this.addNum({ value: 10 });
    // }
    // or
    // ...mapMutations({ addTen: 'addNum'}),
    // addNum() {
    //   this.addTen({ value: 10 });
    // }
  },
};
</script>
