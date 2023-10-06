<template>
  <div class="cart-detail">
    <b-container class="bv-example-row">
      <b-row class="justify-content-md-center">
        <b-col cols="12" md="auto">
          <b-overlay :show="showOverlay" rounded="sm">
            <b-card
              title="Product details"
              :aria-hidden="showOverlay ? 'true' : null"
            >
              <b-card no-body class="overflow-hidden" style="max-width: 540px">
                <b-row no-gutters>
                  <b-col md="6">
                    <b-card-img
                      :src="dataProduct.image"
                      alt="Image"
                      class="rounded-0 img-detail"
                    ></b-card-img>
                  </b-col>
                  <b-col md="6">
                    <b-card-body :title="dataProduct.title">
                      <b-card-text>
                        <h3>$ {{ dataProduct.price }}</h3>
                      </b-card-text>
                      <b-form-rating
                        id="rating-inline"
                        inline
                        :value="dataProduct.rating?.rate"
                      ></b-form-rating>
                      <b-card-text>
                        <p>{{ dataProduct.description }}</p>
                      </b-card-text>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
              <b-row>
                <b-col cols="12">
                  <div class="control-btn">
                    <router-link to="/" tag="a" class="btn-back-home">
                      <b-icon class="icon-back" icon="arrow-left"></b-icon> Back
                    </router-link>
                    <button class="btnAddCard" @click="addToCart">
                      Add to cart
                    </button>
                  </div>
                </b-col>
              </b-row>
            </b-card>
          </b-overlay>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import addCartMixin from "@/mixins/addCartMixin";
import toastMessage from "@/mixins/toastMessage";
export default {
  mixins: [addCartMixin, toastMessage],
  data() {
    return {
      selectedProductId: this.$route.params.id,
      showOverlay: true,
      product: null,
    };
  },
  created() {
    this.$store.dispatch("selectedProduct", this.selectedProductId);
  },
  computed: {
    dataProduct() {
      return this.$store.getters.getSelectedProductData;
    },
  },
  watch: {
    dataProduct(to) {
      this.showOverlay = false;
      this.product = to;
    },
    $route(to) {
      this.showOverlay = true;
      this.selectedProductId = to.params.id;
      this.$store.dispatch("selectedProduct", this.selectedProductId);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/_detail.scss";
</style>
