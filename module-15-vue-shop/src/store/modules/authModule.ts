import { axiosInstance } from '@/axios'
import { IUser } from '@/types'
import { Module } from 'vuex'
import { RootState } from '../index'

interface IAuthState {
  isAuth: boolean
}

export const authModule: Module<IAuthState, RootState> = {
  namespaced: true,
  state: {
    isAuth: JSON.parse(localStorage.getItem('isAuth') as string) || false
  },
  getters: {
    isAuth(state) {
      return state.isAuth
    }
  },
  mutations: {
    login(state) {
      state.isAuth = true
      localStorage.setItem('isAuth', JSON.stringify(true))
    }
  },
  actions: {
    async loginRequest({ commit }, { email, password }) {
      const { data } = await axiosInstance.get('/users')

      data.forEach((obj: IUser) => {
        if (obj.password === password && obj.email === email) {
          commit('login', { root: true })
        } else {
          commit('setAlert', { type: 'danger', title: 'Ошибка!', message: 'Такого пользователя не существует!' }, { root: true })
        }
      })
    }
  }
}
