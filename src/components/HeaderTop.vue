<template>
  <div class="header">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">
            <b-icon class="" icon="house-fill"></b-icon>
            Home
          </b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item
            v-if="isShowIconSearch"
            id="show-btn"
            @click="$bvModal.show('bv-modal-example')"
          >
            <b-icon class="" icon="search"></b-icon>
          </b-nav-item>
          <b-modal id="bv-modal-example" hide-footer>
            <template #modal-title> Search </template>
            <search-product
              v-on:close-modal-search="$bvModal.hide('bv-modal-example')"
            >
            </search-product>
          </b-modal>

          <b-nav-item-dropdown right v-if="userData">
            <template #button-content>
              <em class="user-name">{{ userData.username }}</em>
            </template>
            <b-dropdown-item @click="handleLogout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item
            id="show-btn-2"
            @click="$bvModal.show('bv-modal-example-2')"
            v-else
          >
            <template>
              <em class="login-text">Login</em>
            </template>
          </b-nav-item>
          <b-modal id="bv-modal-example-2" hide-footer>
            <template #modal-title>Login</template>
            <div class="d-block">
              <form-logIn
                v-on:close-modal="$bvModal.hide('bv-modal-example-2')"
              ></form-logIn>
            </div>
            <b-button
              class="mt-3"
              block
              @click="$bvModal.hide('bv-modal-example-2')"
              >Close Me</b-button
            >
          </b-modal>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import SearchProduct from "./SearchProduct.vue";
import FormLogIn from "./FormLogIn.vue";
import toastMessage from "@/mixins/toastMessage";
export default {
  mixins: [toastMessage],
  data() {
    return {
      isShowIconSearch: true,
      storageDataUser: null,
      storageDataCart: null,
    };
  },
  components: {
    SearchProduct,
    FormLogIn,
  },
  methods: {
    handleLogout() {
      this.$store.commit("handleLogout");
      this.makeToast("info", "Signed out successfully!");
    },
  },
  computed: {
    userData() {
      return this.$store.getters.getUserData;
    },
  },
  created() {
    this.storageDataUser = JSON.parse(localStorage.getItem("user"));
    this.storageDataCart = JSON.parse(localStorage.getItem("cart"));
    if (this.storageDataUser) {
      this.$store.commit("setUserData", this.storageDataUser);
    }
    if (this.storageDataCart) {
      this.$store.commit("setCartStorage", this.storageDataCart);
    }
  },
  watch: {
    $route() {
      if (this.$route.params.id) {
        this.isShowIconSearch = false;
      } else {
        this.isShowIconSearch = true;
      }
    },
  },
};
</script>
