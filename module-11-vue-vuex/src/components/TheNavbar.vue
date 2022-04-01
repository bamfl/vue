<template>
  <header class="navbar">
    <div>Vuex {{ counter }} ({{ doubleCounter }})</div>
    <button class="btn" @click="addNum">Добавить</button>
  </header>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.counter;
    },
    doubleCounter() {
      return this.$store.getters.doubleCounter;
    },
  },
  methods: {
    addNum() {
      // this.$store.commit('addNum', 10);
      // or
      this.$store.commit('addNum', { value: 10 });
      // or
      // this.$store.commit({
      //   type: 'addNum',
      //   value: 10,
      // });
    },
  },
};
</script>
