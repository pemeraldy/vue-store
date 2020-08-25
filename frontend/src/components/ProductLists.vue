<template>
  <div class="d-flex flex-wrap jusify-content-center">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script>
import ProductCard from "./ProductCard";
// import { mapActions } from "vuex";
export default {
  components: {
    ProductCard,
  },
  computed: {
    products() {
      return this.$store.state.products.products;
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>

<style>
</style>