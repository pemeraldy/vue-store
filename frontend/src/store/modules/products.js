// import axios from 'axios'
import Products from '../../api/Products'
const state = {
  loadingProducts: false,
  products: [],
  cart: [],
  search: ''
}

const getters = {
  getSearch(state){
    return state.search
  },
  isLoadingProducts(state) {
    return state.loadingProducts
  },
  allItems(state) {
    return state.products
  },
  isInCart: (state) => (id) => {
    return state.cart.some((cartItem) => {
      return cartItem.product.id === id
    })
  },
  isCartEmpty(state) {
    return state.cart.length < 1
  },
  productDetails: (state) => (id) => {
    return state.products.find((p) => p.id === id)
  },
  getNumItemsInCart(state) {
    let itemsInCart = 0
    state.cart.forEach((item) => (itemsInCart += item.quantity))
    return itemsInCart
  },
  cartTotalPrice(state) {
    let total = 0

    state.cart.forEach((item) => {
      total += item.product.unit_price * item.quantity
    })

    return total
  },
}

const actions = {
  getProducts: ({ commit }, params) => {
    commit('SET_LOADING_PRODUCTS', true)
    Products.all(params)
      .then((data) => {
        commit('SET_PRODUCTS', data)
      })
      .finally(() => {
        commit('SET_LOADING_PRODUCTS', false)
      })
  },
  getProduct: ({ commit }, id) => {
    Products.singleProduct(id).then((resp) => {
      // console.log(resp.data)
      commit('SET_PRODUCT', resp.data)
    })
  },
  addToCart: ({ commit }, { product, quantity }) => {
    // console.log(product, quantity)
    commit('ADD_TO_CART', { product, quantity })
  },
  removeProduct({ commit }, product) {
    commit('REMOVE_PRODUCT', product)
  },
  decreaseItemQty({ commit }, { product, quantity }) {
    commit('DECREASE_QTY', { product, quantity })
  },
  clearCart: ({ commit }) => {
    commit('EMPTY_CART')
  },
}

const mutations = {
  SET_SEARCH: (state, search) => {
    state.search = search
  },
  SET_LOADING_PRODUCTS: (state, loading = false) => {
    state.loadingProducts = loading
  },
  SET_PRODUCTS: (state, data) => {
    state.products = data
  },
  SET_PRODUCT: (state, data) => {
    state.product = data
  },
  ADD_TO_CART: (state, data) => {
    // console.log(data)
    let itemInCart = state.cart.find((item) => {
      return item.product.id === data.product.id
    })
    if (itemInCart) {
      itemInCart.quantity += 1
      return
    }
    state.cart.push(data)
  },
  DECREASE_QTY: (state, { product }) => {
    // console.log('DATA', state.cart[0], product.id, quantity)
    let prodQty = state.cart.find((prod) => {
      return prod.id === product.id
    })
    if (prodQty) {
      prodQty.quantity -= 1
    }

    console.log(prodQty)
  },
  REMOVE_PRODUCT: (state, data) => {
    state.cart = state.cart.filter((item) => {
      return item.product.id != data.product.id
    })
  },
  EMPTY_CART: (state) => {
    state.cart = []
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
