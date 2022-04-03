import { createStore, createLogger } from 'vuex';
import counter from './modules/counter';
import titles from './modules/titles';
import getters from './getters';

export default createStore({
  plugins: [createLogger()],
  modules: {
    counter,
    titles,
  },
  // glabal state
  state() {
    return {
      mainTitle: 'Global title. Про Vuex',
    };
  },
  getters: getters,
});
