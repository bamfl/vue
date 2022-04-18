import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { IOrder } from '../types/index'

const apiKey = 'AIzaSyCTOYz0LELsqdrezrHU7X3K1ZSyY_iNjxg'
const loginEndpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`
const baseUrl = 'https://vue-bank-e9995-default-rtdb.europe-west1.firebasedatabase.app'
const endpoints = {
  orders: `${baseUrl}/orders`
}
export interface State {
  isAuth: boolean
  orders: IOrder[]
  idToken: null | string
}

// eslint-disable-next-line symbol-description
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    isAuth: JSON.parse(localStorage.getItem('isAuth') as string)?.registered || false,
    orders: [],
    idToken: JSON.parse(localStorage.getItem('isAuth') as string)?.idToken || null
  },
  getters: {
    isAuth(state) {
      return state.isAuth
    },
    orders(state) {
      return state.orders
    },
    filteredOrderes(state) {
      return (filterConditionsFunction: (T: IOrder) => boolean) => {
        return state.orders.filter(order => filterConditionsFunction(order))
      }
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
        state.idToken = authObj.idToken

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
    async logout({ state }) {
      state.isAuth = false
      localStorage.removeItem('isAuth')
    },
    async getOrders({ state, dispatch }): Promise<void> {
      try {
        const response = await fetch(`${endpoints.orders}.json?auth=${state.idToken}`)

        if (!response.ok) {
          if (response.status === 401) {
            dispatch('logout')
          }
          console.error(`${response.status}`)
          return
        }

        const ordersData = await response.json()

        state.orders = []

        Object.keys(ordersData).forEach(key => {
          state.orders.push({ id: key, ...ordersData[key] })
        })
      } catch (error) {
        console.error(error)
      }
    },
    async createOrder({ state }, orderObj: IOrder): Promise<void> {
      const response = await fetch(`${endpoints.orders}.json?auth=${state.idToken}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderObj)
      })

      if (!response.ok) {
        console.error(`${response.status}`)
        return
      }

      const { name: id } = await response.json()

      state.orders.push({ id, ...orderObj })
    },
    async changeOrderStatus({ state }, { id, updatedOrder }) {
      const response = await fetch(`${endpoints.orders}/${id}/.json?auth=${state.idToken}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedOrder)
      })

      if (!response.ok) {
        console.error(`${response.status}`)
        return
      }

      let order = state.orders.find(order => order.id === id)

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      order = updatedOrder
    },
    async deleteOrder({ state }, { id }) {
      const response = await fetch(`${endpoints.orders}/${id}/.json?auth=${state.idToken}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        console.error(`${response.status}`)
        return
      }

      state.orders = state.orders.filter(order => order.id !== id)
    }
  }
})

export function useStore () {
  return baseUseStore(key)
}
