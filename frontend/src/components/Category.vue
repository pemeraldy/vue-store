<template>
  <div>
    <div class="card-header">
      <h5 class="text-white">Category</h5>
    </div>
    <div class="card-body">
      <div class="list-group">
        <router-link
          :to="{ name: 'store', query: { ...$route.query, category: cat } }"
          href="#"
          exact
          v-for="cat in categories"
          :class="{
            active:
              !!$route.query.category && $route.query.category.includes(cat),
          }"
          class="bg-dark text-white list-group-item list-group-item-action"
          :key="cat"
          >{{ capitalize(cat) }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import API from "@/api/Products";
const capitalize = (str = "") => str.charAt(0).toUpperCase() + str.slice(1);
export default {
  data() {
    return {
      categories: [],
    };
  },
  async created() {
    const data = await API.categories();
    this.categories = data;
  },
  methods: {
    capitalize,
  },
};
</script>

<style scoped>
.active {
  opacity: 0.5;
}
</style>
