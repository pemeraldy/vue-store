<template>
  <div id="app">
    <!-- <Home /> -->
    <Navbar />
    <div class="main-content mt-4">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  components: {
    Navbar,
  },
  mounted() {
    // fetch('http://localhost:4000/products')
    // .then(resp=>resp.json())
    // .then(data => console.log(data))
  },
};
</script>
<style>
</style>
