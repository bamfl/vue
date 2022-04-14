import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

const apiKey = 'AIzaSyCTOYz0LELsqdrezrHU7X3K1ZSyY_iNjxg'
const loginEndpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`

export interface State {
  isAuth: boolean
}

// eslint-disable-next-line symbol-description
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    isAuth: JSON.parse(localStorage.getItem('isAuth') as string)?.registered || false
  },
  getters: {
    isAuth(state) {
      return state.isAuth
    }
  },
  mutations: {
  },
  actions: {
    async login({ state }, { email, password }) {
      try {
        const response = await fetch(loginEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email,
            password,
            returnSecureToken: true
          })
        })

        const authObj = await response.json()
        localStorage.setItem('isAuth', JSON.stringify(authObj))

        if (!response.ok) {
          console.error(`${response.status}`)
          return authObj
        }

        state.isAuth = true
      } catch (error) {
        console.error(error)
      }
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
