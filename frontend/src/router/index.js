import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from '../views/Store.vue'
import Checkout from '../views/Checkout.vue'
import Message from '../views/Message.vue'
import ProductDetails from '../views/ProductDetails.vue'
// // import ProductCard from '../components/ProductCard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'store',
    component: Store
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout
  },
  {
    path: '/product/:id/',
    name: 'product',
    props: true,
    component: ProductDetails
  },
  {
    path: '/message',
    name: 'message',
    component: Message
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
