<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <h3 class="mb-4">Your Order Breakdown</h3>
        <hr />
        <div
          v-for="product in allProductsInCart"
          :key="product.id"
          class="d-flex product-wrap mb-3 justify-between"
        >
          <div class="product-img w-50">
            <img :src="product.product.images.medium" />
          </div>
          <div class="product-details d-flex align-items-center">
            <!-- <div class="product-name">{{ product.name }}</div> -->
            <div class="product-quantity d-flex align-items-center ">
              <button @click="decreaseQty(product)" class="minus">
                &minus;
              </button>
              <span class="quantity">{{ product.quantity }}</span>
              <button @click="increaseQty(product)" class=" primary plus">
                &plus;
              </button>
            </div>
          </div>
        </div>

        <!-- total subtotal -->
        <div class="row">
          <div class="col-6"></div>
          <div class="col-6">
            <div class="totals">
              <h3>Sub Total : ${{ totalPrice }}</h3>
              <h3>Delivery : $0</h3>
              <h2>Total: ${{ totalPrice }}</h2>
            </div>
          </div>
        </div>
        <div>
          <router-link tag="button" to="/" class="btn btn-primary"
            >Continue Shopping</router-link
          >
        </div>
      </div>
      <!-- Billing Details -->
      <div class="col-md-4">
        <div class="card text-white bg-dark mb-3">
          <div class="card-header">
            <h3 class="card-title text-center">Billing Details</h3>
          </div>
          <form @submit.prevent class="card-body">
            <div class="details">
              <div class="form-group">
                <label for="exampleInputEmail1">Full Name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="userDetails.name"
                  aria-describedby="name"
                  placeholder=" Your Name"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Phone Number</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="userDetails.number"
                  placeholder="Your Number"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  v-model="userDetails.email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" class="form-text text-muted"
                  >We'll never share your email with anyone else.</small
                >
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Billing address</label>
                <textarea
                  type="text"
                  class="form-control"
                  v-model="userDetails.address"
                  aria-describedby="address"
                  placeholder=" Your address"
                />
              </div>

              <div v-if="paymentError" class="w-100">
                <div class="alert alert-dismissible alert-warning">
                  <button type="button" class="close" data-dismiss="alert">
                    &times;
                  </button>
                  <h4 class="alert-heading text-center">Oops!</h4>
                  <p class="mb-0">{{ paymentError }}</p>
                </div>
              </div>
              <!-- <button
                :class="{ disabled: !isUserDetailsValid }"
                :disabled="!isUserDetailsValid"
                class="btn btn-primary btn-block"
              >
                Confirm Order
              </button> -->
              <paystack
                :class="{ disabled: !isUserDetailsValid }"
                :disabled="!isUserDetailsValid"
                class="btn btn-primary btn-block"
                :amount="userDetails.amount * 100"
                :email="userDetails.email"
                :paystackkey="publicKey"
                :reference="reference"
                :callback="processPayment"
                :close="close"
              >
                Make Payment
              </paystack>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import paystack from "vue-paystack";

export default {
  components: {
    paystack,
  },
  data() {
    return {
      cartSummary: [],
      userDetails: {
        name: "",
        number: "",
        email: "",
        address: "",
        amount: this.$store.getters.cartTotalPrice,
      },
      publicKey: "pk_test_c19036ff9f1bd2f6f642456c0c00a676e19738ee",
      paymentError: null,
    };
  },
  computed: {
    reference() {
      let text = "";
      let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    },
    allProductsInCart() {
      return this.$store.state.products.cart;
    },
    isUserDetailsValid() {
      return Object.values(this.userDetails).every(Boolean);
    },
    totalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
    isCartEmpty() {
      return this.$store.getters["isCartEmpty"];
    },
  },
  methods: {
    increaseQty(product) {
      this.$store.dispatch("addToCart", product);
    },
    decreaseQty(product) {
      this.$store.dispatch("decreaseItemQty", product);
    },

    processPayment() {
      console.log("heer");
      this.$router.push({ name: "message" });
      this.$store.dispatch("clearCart");
    },
    close() {
      console.log("You closed checkout page");
    },
  },
  mounted() {
    if (this.isCartEmpty) {
      this.$router.push({ name: "store" });
    }
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
