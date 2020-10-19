import Api from './Api'

const pickData = (res) => res.data

export default {
    async categories() {
        return Api.get('categories').then(pickData)
    },
   async all(params) {
        return Api.get('products', {params}).then(pickData)
    },
   async singleProduct(id) {
        return Api.get(`products/${id}`).then(pickData)
    }
}
