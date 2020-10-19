<template>
  <div class="container" v-if="product">
    <div class="row">
      <div class="col-md-6">
        <div class="product-wrap">
          <img :src="product.images.large" />
        </div>
        <div class="product-scan d-flex mt-5">
          <div class="variant mx-1">
            <img :src="product.images.small" alt="variant" />
          </div>
          <div class="variant mx-1">
            <img :src="product.images.small" alt="variant" />
          </div>
          <div class="variant mx-1">
            <img :src="product.images.small" alt="variant" />
          </div>
        </div>
      </div>
      <div class="col-md-6 mt-5">
        <div class="product-info">
          <h4>{{ product.name }}</h4>
          <p>Price: ${{ product.unit_price }}</p>
          <p>Weight: {{ product.product_details.weight }}</p>
          <p>Material: {{ product.product_details.material }}</p>
          <p>In Stock: {{ product.product_details.instock }}</p>
        </div>
        <div class="d-flex justify-content-between">
          <router-link to="/" type="button" class="btn btn-primary"
            >Keep shopping</router-link
          >
          <button @click="addToCart" type="button" class="btn btn-primary">
            Add to Cart
          </button>
          <router-link to="/checkout" type="button" class="btn btn-primary"
            >Checkout</router-link
          >
        </div>
      </div>
    </div>
    <hr />
    <div class="row mt-5 py-4">
      <div class="col-12">
        <h3 class="text-center mb-3">Other Related Products</h3>
        <div class="related-products d-flex w-100 justify-content-between">
          <div
            class="related-product"
            v-for="related of relatedProducts"
            :key="related.id"
          >
            <img :src="related.images.medium" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import API from "../api/Products";

export default {
  props: ["id"],
  data() {
    return {
      relatedProducts: [],
    };
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addToCart", {
        product: this.product,
        quantity: 1,
      });
    },
  },
  beforeRouteEnter(_, from, next) {
    if (!from.name) {
      return next("/");
    }
    next();
  },
  computed: {
    product() {
      return this.$store.getters[`productDetails`](this.id);
    },
  },
  created() {
    API.all({ category: this.product.categories.join(",") }).then(
      (products) => (this.relatedProducts = products.slice(0, 4)),
      console.warn
    );
  },
};
</script>

<style></style>
