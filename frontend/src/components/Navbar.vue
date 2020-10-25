<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <router-link class="navbar-brand" to="/">Yopeez</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarColor01"
      aria-controls="navbarColor01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>

        <li class="nav-item">
          <router-link
            :class="{ disabled: $store.getters['isCartEmpty'] }"
            class="nav-link"
            to="/checkout"
            >Checkout</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
      </ul>
      <form @submit.prevent="handleSearch" class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="text"
          placeholder="Search"
          v-model="search"
        />
      </form>
      <NavCart />
    </div>
  </nav>
</template>

<script>
import NavCart from "@/components/NavCart";
export default {
  components: {
    NavCart,
  },
  computed: {
    search: {
      get() {
        return this.$store.getters[`getSearch`];
      },
      set(value) {
        return this.$store.commit("SET_SEARCH", value);
      },
    },
  },
  methods: {
    handleSearch() {
      this.$router.push({
        name: "store",
        query: { ...this.$route.query, search: this.search },
      });
      this.$store.dispatch("getProducts", { search: this.search });
    },
  },
};
</script>

<style scoped></style>
