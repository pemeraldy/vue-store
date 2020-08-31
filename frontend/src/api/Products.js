import Api from './Api'

export default {
    all() {
        return Api.get('products')
    },
    singleProduct(id) {
        return Api.get(`products/${id}`)
    }
}
