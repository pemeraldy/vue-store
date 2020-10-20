<template>
  <div v-if="isLoading" class="loading-wrap">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: Boolean,
  },
};
</script>

<style>
.loading-wrap {
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgb(8, 8, 8);
  z-index: 1000;
  opacity: 0.3;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loader {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 12px solid #f3f3f3;
  border-top: 12px solid #4444;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
