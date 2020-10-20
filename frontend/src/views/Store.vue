<template>
  <div class="container-fluid">
    <loading :isLoading="!this.$store.state.products" />
    <div class="row">
      <!-- category and others -->
      <div class="col-md-3">
        <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
          <Category />
          <!-- <Brands /> -->
        </div>
      </div>

      <!-- filters and products -->
      <div class="col-md-9 ">
        <div class="ml-auto d-flex justify-end w-100">
          <div class="btn-group btn-group-toggle">
            <select class="btn btn-primary" v-model="sort">
              <option selected>Price</option>
              <option value="low_to_high">Lowest to highest</option>

              <option value="high_to_low">High to lowest</option>
            </select>
          </div>
        </div>

        <ProductLists :products="products" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Loading from "@/components/Loading";
import Category from "@/components/Category";
// import Brands from "@/components/Brands";
import ProductLists from "@/components/ProductLists";
export default {
  name: "Home",
  components: {
    Loading,
    // Navbar,
    Category,
    // Brands,
    ProductLists,
  },
  data() {
    return {
      sort: "low_to_high",
      isLoading: false,
    };
  },
  computed: {
    products() {
      return this.$store.getters[`allItems`];
    },
  },
  watch: {
    "$route.query": {
      handler(query) {
        this.fetchProducts(query);
      },
    },
    sort(val) {
      this.handleSort(val);
    },
  },
  created() {
    this.fetchProducts(this.$route.query);
  },
  methods: {
    fetchProducts(query) {
      this.$store.dispatch(`getProducts`, query);
    },
    handleSort(sortBy) {
      this.$router.push({
        name: "store",
        query: { ...this.$route.query, sort: sortBy },
      });
    },
  },
};
</script>
