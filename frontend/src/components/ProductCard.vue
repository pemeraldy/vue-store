<template>
  <div class="card product-card text-left mt-2">
    <router-link :to="{name:'product', params:{id:product.id}}">
      <img class="card-img-top w-100" :src="product.images.large" alt />
    </router-link>
    <div class="card-body bg-dark">
      <h5 class="card-title">
        <router-link :to="{name:'product', params:{id:product.id}}">{{product.name}}</router-link>
      </h5>
      <p class="card-text price d-flex">
        <strong>$ {{product.unit_price}}</strong>
        <button @click="addToCart" class="btn btn-sm btn-primary">Add to cart</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  data() {
    return {
      quantity: 0,
    };
  },
  methods: {
    addToCart() {
      // console.log(this.product);
      this.$store.dispatch("addToCart", {
        product: this.product,
        quantity: 1,
      });
    },
  },
};
</script>

<style scoped>
.card.product-card {
  width: 300px;
  margin: 2px;
}
.product-card:first-child {
  margin-left: 0;
}
.product-card:nth-child(odd) {
  margin-right: 0;
  margin-left: 0;
}
h5.card-title a {
  color: #eaeaea !important;
}
.card-text.price {
  color: #eaeaea;
  display: flex;
  justify-content: space-between;
}
</style>