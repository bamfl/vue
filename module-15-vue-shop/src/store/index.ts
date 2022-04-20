import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { authModule } from './modules/authModule'

export interface RootState {
  count: number
}

// eslint-disable-next-line symbol-description
export const key: InjectionKey<Store<RootState>> = Symbol()

export const store = createStore<RootState>({
  modules: {
    auth: authModule
  },
  state: {
    count: 42
  },
  getters: {

  }
})

export function useStore () {
  return baseUseStore(key)
}
