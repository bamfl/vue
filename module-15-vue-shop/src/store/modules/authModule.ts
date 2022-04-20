import { Module } from 'vuex'
import { RootState } from '../index'

interface AuthState {
  isAuth: boolean
}

export const authModule: Module<AuthState, RootState> = {
  namespaced: true,
  state: {
    isAuth: false
  },
  getters: {
    isAuth(state) {
      return state.isAuth
    }
  },
  actions: {
    async login({ state }, { email, password }) {
      state.isAuth = true
      console.log(email, password)
    }
  }
}
