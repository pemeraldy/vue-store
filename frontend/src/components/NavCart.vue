<template>
  <div class="btn-group ml-auto" role="group">
    <div class="btn-group" role="group">
      <button
        @click="showCartContent = !showCartContent"
        id="cartContent"
        type="button"
        class="btn btn-primary dropdown-toggle"
      >
        <span>{{itemsInCart}}</span>
        <i class="fas fa-cart-plus fa-2x"></i>
      </button>
      <div v-if="showCartContent" class="dropdown-menu show" x-placement="bottom-start">
        <div class="list-group">
          <a
            href="#"
            class="list-group-item list-group-item-action flex-column align-items-start bg-dark"
          >
            <div class="cart-header mb-3 d-flex w-100 justify-content-between">
              <h5 class="text-warning">Cart Items</h5>
              <h5 class="text-warning">{{itemsInCart}}</h5>
            </div>

            <div
              v-for="item in cartItems"
              :key="item.id"
              class="d-flex w-100 justify-content-between"
            >
              <p class="mb-1 text-white">
                {{item.product.name}} x
                <span class="qnatity">{{item.quantity}}</span>
              </p>
              <small @click="removeProduct(item)" class="text-white">
                <i class="fas fa-trash">x</i>
              </small>
            </div>

            <div class="d-flex w-100 justify-content-between mt-3">
              <div class="total text-white">
                Total
                <span class="badge badge-warning p-2">{{totalPrice}}</span>
              </div>
              <div @click="clearCart" class="text-white">
                <span class="btn btn-sm btn-primary">Clear cart</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showCartContent: false,
    };
  },
  computed: {
    cartItems() {
      // console.log(this.$store.state.products.cart);
      return this.$store.state.products.cart;
    },
    itemsInCart() {
      return this.$store.getters.getItemsInCart;
    },
    totalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
  },
  methods: {
    clearCart() {
      this.$store.dispatch("clearCart");
    },
    removeProduct(product) {
      this.$store.dispatch("removeProduct", product);
    },
  },
};
</script>

<style scoped>
.dropdown-menu {
  position: absolute;
  transform: translate3d(0px, 48px, 0px);
  top: 0px;
  right: 0px;
  left: auto;
  will-change: transform;
  width: 300px;
  padding: 0;
}
</style>