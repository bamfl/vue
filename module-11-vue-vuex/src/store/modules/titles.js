export default {
  namespaced: true,
  state() {
    return {
      mainTitle: 'Про Vuex',
      headerTitle: 'Header counter',
    };
  },
  getters: {
    mainTitle(state, getters, rootState, rootGetters) {
      console.log('rootState', rootState);
      console.log('rootGetters', rootGetters);
      return state.mainTitle;
    },
    headerTitle(state) {
      return state.headerTitle;
    },
  },
};
