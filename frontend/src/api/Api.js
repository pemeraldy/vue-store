import axios from 'axios'

const Api = axios.create({
    baseURL: 'http://localhost:4000'
    // baseURL: 'https://desolate-cliffs-90757.herokuapp.com'
})

export default Api