<template>
  <div class="box-search">
    <b-nav-form @submit.prevent>
      <input
        size="sm"
        v-model="textSearch"
        class="mr-sm-2"
        placeholder="Enter the product you want to search for..."
        ref="focusInput"
      />
    </b-nav-form>
    <div :class="['search-results', objectClass]">
      <ul>
        <li
          v-for="product in filterListProduct"
          :key="product.id"
          @click="closeSearch"
        >
          <router-link tag="div" :to="'/detail/' + product.id"
            >{{ product.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textSearch: "",
      isActive: false,
    };
  },
  methods: {
    closeSearch() {
      this.textSearch = "";
      this.isActive = false;
      this.$emit("close-modal-search");
    },
  },
  computed: {
    listProduct() {
      return this.$store.getters.getProducts;
    },
    filterListProduct() {
      return this.listProduct.filter((el) => {
        return el.title.toLowerCase().includes(this.textSearch.toLowerCase());
      });
    },
    objectClass() {
      return {
        activeSearch: this.isActive,
      };
    },
  },
  created() {
    setTimeout(() => {
      if (this.$refs.focusInput) {
        this.$refs.focusInput.focus();
      }
    }, 100);
  },
  watch: {
    textSearch() {
      if (!this.textSearch.length == 0) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/_searchProductCart.scss";
</style>
