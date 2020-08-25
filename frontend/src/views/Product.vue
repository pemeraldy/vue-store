<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="product-wrap">
          <img src="https://via.placeholder.com/350x350" alt="product" />
        </div>
        <div class="product-scan d-flex mt-5">
          <div class="variant mx-1">
            <img src="https://via.placeholder.com/50x50" alt="variant" />
          </div>
          <div class="variant mx-1">
            <img src="https://via.placeholder.com/50x50" alt="variant" />
          </div>
          <div class="variant mx-1">
            <img src="https://via.placeholder.com/50x50" alt="variant" />
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="product-info">
          <p>Prouduct: G-shock 123</p>
          <p>Price: $233</p>
          <p>Price: $233</p>
          <p>Weight: 12kg</p>
          <p>Material: Leather</p>
          <p>In stock</p>
        </div>
        <div class="d-flex justify-content-between">
          <router-link to="/" type="button" class="btn btn-primary">Keep shopping</router-link>
          <router-link to="/checkout" type="button" class="btn btn-primary">Checkout</router-link>
        </div>
      </div>
    </div>
    <hr />
    <div class="row mt-5 py-4">
      <div class="col-12">
        <h3 class="text-center mb-3">Other Related Products</h3>
        <div class="related-products d-flex w-100 justify-content-between">
          <div class="related-product">
            <img src="https://via.placeholder.com/150x150" alt />
          </div>
          <div class="related-product">
            <img src="https://via.placeholder.com/150x150" alt />
          </div>
          <div class="related-product">
            <img src="https://via.placeholder.com/150x150" alt />
          </div>
          <div class="related-product">
            <img src="https://via.placeholder.com/150x150" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
};
</script>

<style>
</style>