import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

export interface State {
  isAuth: boolean
}

// eslint-disable-next-line symbol-description
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    isAuth: JSON.parse(localStorage.getItem('isAuth') as string) || false
  },
  getters: {
    isAuth(state) {
      return state.isAuth
    }
  },
  mutations: {
  },
  actions: {
    login({ state }) {
      state.isAuth = true
      localStorage.setItem('isAuth', JSON.stringify(state.isAuth))
    },
    logout({ state }) {
      state.isAuth = false
      localStorage.removeItem('isAuth')
    }
  }
})

export function useStore () {
  return baseUseStore(key)
}
