import { RootState } from '../index'
import { Module } from 'vuex'
import { axiosInstance } from '@/axios'
import { IProduct } from '@/types'

interface IShopState {
  products: IProduct[] | null
  oneProduct: IProduct | null
  cartProducts: IProduct[] | null
}

export const shopModule: Module<IShopState, RootState> = {
  namespaced: true,
  state: {
    products: null,
    oneProduct: null,
    cartProducts: null
  },
  getters: {
    products(state) {
      return state.products
    },
    oneProduct(state) {
      return state.oneProduct
    },
    cartProducts(state) {
      return state.cartProducts
    }
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    },
    setOneProduct(state, product) {
      state.oneProduct = product
    },
    addProductToCart(state, product) {
      if (!state.cartProducts) {
        state.cartProducts = []
      }

      if (!state.cartProducts.some((prod: IProduct) => prod.id === product.id)) {
        state.cartProducts.push({ ...product, count: 1 })
      }
    },
    setProductCartCount(state, { id, count }) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      state.cartProducts!.find(prod => prod.id === id)!.count = count
    },
    deleteProductFromCart(state, product) {
      if (state.cartProducts) {
        state.cartProducts = state.cartProducts.filter(prod => prod.id !== product.id)
      }
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
