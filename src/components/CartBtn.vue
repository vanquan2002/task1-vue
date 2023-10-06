<template>
  <router-link to="/cart" tag="div" class="btn-card">
    <b-icon class="cart-icon" icon="basket3-fill"></b-icon>
    <div class="cart-number">{{ numberCart }}</div>
  </router-link>
</template>

<script>
export default {
  computed: {
    numberCart() {
      return this.$store.getters.getNumberCard;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/_cartBtn.scss";
</style>
