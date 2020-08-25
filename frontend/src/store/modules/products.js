import axios from 'axios'
const state = {
    products: [],
    product: null,
    cart: []
}

const getters = {}

const actions = {
    getProducts: ({ commit }) => {
        axios.get('http://localhost:4000/products')
            .then(resp => {
                console.log(resp.data)
                commit('SET_PRODUCTS', resp.data)
            })

    },
    getProduct: ({ commit }, id) => {
        axios.get(`http://localhost:4000/products/${id}`)
            .then(resp => {
                console.log(resp.data)
                commit('SET_PRODUCT', resp.data)
            })
    },
    addToCart: ({ commit }, { product, quantity }) => {
        commit('ADD_TO_CART', { product, quantity })
    }
}

const mutations = {
    SET_PRODUCTS: (state, data) => { state.products = data },
    SET_PRODUCT: (state, data) => { state.product = data },
    ADD_TO_CART: (state, data) => { state.cart.push(data) }
}


export default {
    state,
    getters,
    actions,
    mutations
}