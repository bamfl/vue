import { IAlert } from '@/types'
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { authModule } from './modules/authModule'
import { shopModule } from './modules/shopModule'

export interface RootState {
  alert: IAlert
}

// eslint-disable-next-line symbol-description
export const key: InjectionKey<Store<RootState>> = Symbol()

export const store = createStore<RootState>({
  modules: {
    auth: authModule,
    shop: shopModule
  },
  state: {
    alert: null
  },
  getters: {
    alert(state) {
      return state.alert
    }
  },
  mutations: {
    setAlert(state, messageObj) {
      state.alert = {
        type: messageObj.type,
        title: messageObj.title,
        message: messageObj.message
      }
    },
    deleteAlert(state) {
      state.alert = null
    }
  }
})

export function useStore () {
  return baseUseStore(key)
}
