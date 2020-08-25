import axios from 'axios'
import Products from '../../api/Products'
const state = {
    products: [],
    product: null,
    cart: []
}

const getters = {
    getItemsInCart() {
        return state.cart.length
    },
    cartTotalPrice() {
        let total = 0

        state.cart.forEach(item => {
            total += item.product.unit_price * item.quantity
        })

        return total
    }
}

const actions = {
    getProducts: ({ commit }) => {
        Products.all()
            .then(resp => {
                // console.log(resp.data)
                commit('SET_PRODUCTS', resp.data)
            })

    },
    getProduct: ({ commit }, id) => {
        axios.get(`http://localhost:4000/products/${id}`)
            .then(resp => {
                // console.log(resp.data)
                commit('SET_PRODUCT', resp.data)
            })
    },
    addToCart: ({ commit }, { product, quantity }) => {
        console.log(product, quantity)
        commit('ADD_TO_CART', { product, quantity })
    },
    removeProduct({ commit }, product) {
        commit('REMOVE_PRODUCT', product)
    },
    clearCart: ({ commit }) => {
        commit('EMPTY_CART')
    }
}

const mutations = {
    SET_PRODUCTS: (state, data) => { state.products = data },
    SET_PRODUCT: (state, data) => { state.product = data },
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
    REMOVE_PRODUCT: (state, data) => {
        state.cart = state.cart.filter((item) => {
            return item.product.id != data.product.id
        })
    },
    EMPTY_CART: (state) => { state.cart = [] }
}


export default {
    state,
    getters,
    actions,
    mutations
}