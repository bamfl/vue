import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      counter: 42,
    };
  },
  // mutations - синхронный код, commit функция
  mutations: {
    increment(state) {
      state.counter++;
    },
    addNum(state, payload) {
      state.counter += payload.value;
    },
  },
  // getters - вычисления, основанные на данных в state и getters
  getters: {
    counter(state) {
      return state.counter;
    },
    doubleCounter(state, getters) {
      return getters.counter * 2;
    },
  },
  // actions - асинхронный код, запросы к API, dispatch функция
  actions: {
    addAsync({ commit }, payload) {
      setTimeout(() => {
        commit('addNum', payload);
      }, 2000);
    },
  },
});
