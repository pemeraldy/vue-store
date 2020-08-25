<template>
  <div class="btn-group ml-auto" role="group">
    <div class="btn-group" role="group">
      <button
        @click="showCartContent = !showCartContent"
        id="cartContent"
        type="button"
        class="btn btn-primary dropdown-toggle"
      >
        <i class="fas fa-cart-plus fa-2x"></i>
      </button>
      <div v-if="showCartContent" class="dropdown-menu show" x-placement="bottom-start">
        <div class="list-group">
          <a
            href="#"
            class="list-group-item list-group-item-action flex-column align-items-start bg-dark"
          >
            <h5 class="text-warning">Cart Items</h5>
            <div class="d-flex w-100 justify-content-between">
              <p class="mb-1 text-white">
                Gucci Leather x
                <span class="qnatity">1</span>
              </p>
              <small class="text-white">
                <i class="fas fa-trash"></i>
              </small>
            </div>
          </a>
        </div>
        <div class="list-group">
          <a
            href="#"
            class="list-group-item list-group-item-action flex-column align-items-start bg-dark"
          >
            <h5 class="text-warning">Cart Items</h5>
            <div class="d-flex w-100 justify-content-between">
              <p class="mb-1 text-white">
                Gucci Leather x
                <span class="qnatity">1</span>
              </p>
              <small class="text-white">
                <i class="fas fa-trash"></i>
              </small>
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
      console.log(this.$store.state.products.cart);
      return this.$store.state.products.cart;
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