import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      counter: 21,
    };
  },
  getters: {
    doubleCounter(state) {
      return state.counter * 2;
    },
  },
  mutations: {
    increment(state) {
      state.counter += 1;
    },
  },
});
