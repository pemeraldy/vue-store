<template>
  <div class="d-flex flex-wrap jusify-content-center ml-n4">
    <ProductCard
      class="ml-4"
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import ProductCard from "./ProductCard";
export default {
  props: {
    products: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    ProductCard,
  },
};
</script>

<style></style>
