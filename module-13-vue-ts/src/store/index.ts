import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

export interface State {
  count: number,
  title: string
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 42,
    title: 'Hi'
  },
  getters: {
    doubleCounter(state) {
      return state.count * 2
    }
  }
})

export function useStore() {
  return baseUseStore(key)
}
