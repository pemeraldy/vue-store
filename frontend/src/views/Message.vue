<template>
  <div>
    <div class="row">
      <div class="col-8 m-auto">
        <div v-if="success">
          <Jumbotron />
        </div>
        <img
          src="https://res.cloudinary.com/yopee/image/upload/w_300/h_300/v1597390324/m1_11_wkh0eh.jpg"
          alt
        />
      </div>
    </div>
  </div>
</template>

<script>
import Jumbotron from "../components/Jumbotron";
export default {
  components: {
    Jumbotron,
  },
  data() {
    return {
      success: true,
    };
  },
};
</script>

<style>
</style>