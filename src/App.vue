<template>
  <Navbar v-bind:logo="logo_src_app" v-bind:alt="alt_name_app" />
  <router-view/>
  <Footer />
</template>

<script>
  import Footer from './components/Footer.vue';
  import Navbar from './components/Navbar.vue';

  export default {
    components: {
      Navbar,
      Footer
    },
    data() {
      return {
        logo_src_app: "/img/logo.png",
        alt_name_app: "Make Burguer"
      }
    }
  }
</script>

