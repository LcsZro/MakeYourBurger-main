<template>
    <Banner />
    <div class="m-10">
      <h1 class="text-center text-4xl text-cinza pb-14">Monte seu burger</h1>
      <BurgerForm />
    </div>
</template>

<script>
  import Banner from '../components/Banner.vue'
  import BurgerForm from '../components/BurgerForm.vue'

  export default {
    components: {
      Banner,
      BurgerForm
    }
  }
</script>

