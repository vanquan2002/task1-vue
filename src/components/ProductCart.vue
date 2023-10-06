<template>
  <div>
    <b-col>
      <router-link :to="'/detail/' + product.id" tag="div">
        <b-card
          :img-src="product.image"
          img-alt="Image"
          img-top
          tag="article"
          class="cart-product"
        >
          <b-card-text>
            <h4>{{ product.title }}</h4>
            <h6>$ {{ product.price }}</h6>
          </b-card-text>
          <button class="btn-add-card" @click.stop="addToCart">
            Add to cart
          </button>
        </b-card>
      </router-link>
    </b-col>
  </div>
</template>

<script>
import addCartMixin from "@/mixins/addCartMixin";
import toastMessage from "@/mixins/toastMessage";
export default {
  mixins: [addCartMixin, toastMessage],
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/_productCart.scss";
</style>
