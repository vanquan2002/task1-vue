<template>
  <div id="app">
    <nav>
      <header-top></header-top>
    </nav>
    <router-view />
    <cart-btn />
  </div>
</template>

<script>
import HeaderTop from "./components/HeaderTop.vue";
import CartBtn from "./components/CartBtn.vue";
export default {
  components: {
    HeaderTop,
    CartBtn,
  },
};
</script>
