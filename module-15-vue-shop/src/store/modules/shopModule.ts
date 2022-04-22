import { RootState } from '../index'
import { Module } from 'vuex'
import { axiosInstance } from '@/axios'
import { IProduct } from '@/types'

interface IShopState {
  products: IProduct[] | null
  oneProduct: IProduct | null
}

export const shopModule: Module<IShopState, RootState> = {
  namespaced: true,
  state: {
    products: null,
    oneProduct: null
  },
  getters: {
    products(state) {
      return state.products
    },
    oneProduct(state) {
      return state.oneProduct
    }
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    },
    setOneProduct(state, product) {
      state.oneProduct = product
    }
  },
  actions: {
    async getProductsRequest({ commit }) {
      const { data } = await axiosInstance.get('/products')
      commit('setProducts', data)
    },
    async getOneProductRequest({ commit }, id: string) {
      const { data } = await axiosInstance.get(`/products/${id}`)
      commit('setOneProduct', data)
    },
    async addProductRequest({ state, commit }, newProduct: IProduct) {
      const { data } = await axiosInstance.post('products', newProduct)
      const updatedProducts = state.products?.map(product => product.id === data.id ? data : product)
      commit('setProducts', updatedProducts)
    }
  }
}
