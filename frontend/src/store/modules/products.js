// import axios from 'axios'
import Products from '../../api/Products'
const state = {
    products: [],
    product: null,
    cart: []
}

const getters = {
    getNumItemsInCart() {
        return state.cart.length
    },
    cartTotalPrice() {
        let total = 0

        state.cart.forEach(item => {
            total += item.product.unit_price * item.quantity
        })

        return total
    },

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
        Products.singleProduct(id)
            .then(resp => {
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
    increaseItemQty({ commit }, { product, quantity }) {
        commit('INCREASE_QTY', { product, quantity })
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
    INCREASE_QTY: (state, { product, quantity }) => {
        // console.log('DATA', state.cart[0], product.id, quantity)
        let prodQty = state.cart.find(prod => {
            return prod.id === product.id
        })

        console.log(prodQty)

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