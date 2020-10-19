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
};
</script>
<style></style>
