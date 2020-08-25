<template>
  <div class="container-fluid">
    <div class="row">
      <!-- category and others -->
      <div class="col-md-3">
        <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
          <Category />
          <Brands />
        </div>
      </div>

      <!-- filters and products -->
      <div class="col-md-9">
        <div class="d-flex">
          <div class="filters">
            <div class="btn-group btn-group-toggle">
              <label class="btn btn-primary active">Men</label>
              <label class="btn btn-primary">Women</label>
            </div>
          </div>
          <div class="ml-auto">
            <div class="btn-group btn-group-toggle">
              <select class="btn btn-primary">
                <option selected>Sort price range</option>
                <option value="low_high">Lowest to highest</option>

                <option value="high_low">High to lowest</option>
              </select>
            </div>
          </div>
        </div>

        <ProductLists />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Navbar from "@/components/Navbar";
import Category from "@/components/Category";
import Brands from "@/components/Brands";
import ProductLists from "@/components/ProductLists";
export default {
  name: "Home",
  components: {
    // Navbar,
    Category,
    Brands,
    ProductLists,
  },
  mounted() {
    // this.$store.dispatch('')
  },
};
</script>
