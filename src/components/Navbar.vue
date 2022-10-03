<template>
  <div id="nav" class="bg-cinza border-1 border-black flex center justify-end pt-10 pb-6">
    <router-link to="/" id="logo-url">
      <img v-bind:src="logo" v-bind:alt="alt" id="logo" class="ml-6 -mt-7 w-11">
    </router-link>
    <router-link to="/" class="text-yellow-400 hover:text-current ml-auto pr-4 -mt-4">Home</router-link>
    <router-link to="/pedidos" class="text-yellow-400 hover:text-current pr-14 -mt-4">Pedidos</router-link>
  </div>
</template>

<script>
export default {
    name: "Navbar",
    props: {
      logo: String,
      alt: String
    }
}
</script>
