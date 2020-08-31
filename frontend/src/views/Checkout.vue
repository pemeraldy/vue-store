<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <h3 class="mb-4">Your Order Breakdown</h3>
        <hr />
        <div
          v-for="product in allProductsInCart"
          :key="product.id"
          class="d-flex product-wrap mb-3"
        >
          <div class="product-img">
            <!-- <img :src="product.images.medium" /> -->
          </div>
          <div class="product-details d-flex align-items-center">
            <div class="product-name">{{product.name}}</div>
            <div class="product-quantity d-flex">
              <span class="minus">-</span>
              <span class="quantity">{{product.quantity}}</span>
              <span @click="increaseQty(product)" class="plus">+</span>
              <div class="sub-total">$2000</div>
            </div>
          </div>
        </div>

        <!-- total subtotal -->
        <div class="row">
          <div class="col-6"></div>
          <div class="col-6">
            <div class="totals">
              <h3>Sub Total : ${{totalPrice}}</h3>
              <h3>Delivery : $0</h3>
              <h2>Total: ${{totalPrice}}</h2>
            </div>
          </div>
        </div>
        <div>
          <button class="btn btn-primary">Continue Shopping</button>
        </div>
      </div>
      <!-- Billing Details -->
      <div class="col-md-4">
        <div class="card text-white bg-dark mb-3">
          <div class="card-header">
            <h3 class="card-title text-center">Billing Details</h3>
          </div>
          <div class="card-body">
            <div class="details">
              <h5 class="text-white">Address Details</h5>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
              <hr />
              <h5 class="text-white">Delivery Method</h5>
              <div class="form-group">
                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    id="DoorDelivery"
                    name="delivery"
                    class="custom-control-input"
                    checked
                  />
                  <label class="custom-control-label" for="DoorDelivery">
                    Door Delivery for
                    <span class="badge badge-pill badge-warning">$20</span>
                  </label>
                </div>
                <div class="custom-control custom-radio">
                  <input type="radio" id="pickUp" name="delivery" class="custom-control-input" />
                  <label class="custom-control-label" for="pickUp">
                    Or pickup at the
                    <i class="fas fa-chair-office"></i>office
                  </label>
                </div>
              </div>
              <hr />
              <h5 class="text-white">Payment Method</h5>
              <div class="form-group">
                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    id="cardPayment"
                    name="payment"
                    class="custom-control-input"
                    checked
                  />
                  <label class="custom-control-label" for="cardPayment">Cards</label>
                </div>
                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    id="payOnDelivery"
                    name="payment"
                    class="custom-control-input"
                  />
                  <label class="custom-control-label" for="payOnDelivery">pay on delivery</label>
                </div>
              </div>
            </div>
            <router-link
              to="/message"
              type="button"
              class="btn btn-primary btn-lg btn-block"
            >Confirm Order</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    allProductsInCart() {
      return this.$store.state.products.cart;
    },
    totalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
  },
  methods: {
    increaseQty(a) {
      this.$store.dispatch("increaseItemQty", a);
      console.log(a);
    },
  },
};
</script>

<style scoped>
.product-wrap {
  justify-content: space-between;
}
.product-details {
  justify-content: space-around;
  width: 100%;
}
.product-quantity {
  width: 50%;
  justify-content: space-between;
}
</style>