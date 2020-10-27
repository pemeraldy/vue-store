import axios from 'axios'

const Api = axios.create({
    baseURL: 'http://localhost:4000'
    // baseURL: 'https://yopee-vue-store.herokuapp.com',
})

export default Api